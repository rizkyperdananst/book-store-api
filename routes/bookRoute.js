const express = require('express');
const { index, store, show } = require('../controllers/bookController');
const router = express.Router();

router.get('/api/books', index);
router.get('/api/books/:id', show);
router.post('/api/books', store);

module.exports = router;