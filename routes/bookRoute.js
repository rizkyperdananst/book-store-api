const express = require('express');
const { index, store, show, update, destroy } = require('../controllers/bookController');
const router = express.Router();

router.get('/api/books', index);
router.get('/api/books/:id', show);
router.post('/api/books', store);
router.patch('/api/books/:id', update);
router.delete('/api/books/:id', destroy);

module.exports = router;