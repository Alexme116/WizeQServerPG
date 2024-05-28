const express = require('express');
const router = express.Router();
const chatsController = require('../controllers/chatsController');

router.get('/:id', chatsController.getChatsById);
router.post('/', chatsController.createChat);
router.delete('/:id', chatsController.deleteChat);

module.exports = router;