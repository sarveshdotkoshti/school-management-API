const express = require('express');
const router = express.Router();
const connection = require('../config/db');

// Add School API
router.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  connection.query(query, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added successfully.', schoolId: result.insertId });
  });
});

// List Schools API
router.get('/listSchools', (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required.' });
  }

  const query = 'SELECT * FROM schools';
  connection.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    // Calculate distance using Haversine formula
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const toRadians = (deg) => deg * (Math.PI / 180);
      const R = 6371; // Earth's radius in km

      const dLat = toRadians(lat2 - lat1);
      const dLon = toRadians(lon2 - lon1);
      const a = Math.sin(dLat / 2) ** 2 +
                Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c;
    };

    const sortedSchools = results.map((school) => ({
      ...school,
      distance: calculateDistance(userLat, userLon, school.latitude, school.longitude),
    })).sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  });
});

module.exports = router;
