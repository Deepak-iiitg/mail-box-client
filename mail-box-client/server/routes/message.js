const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/message');
router.post('/message',messageControllers.addMessage);
router.delete('/message/:id',messageControllers.deleteMessage);
router.patch('/message/:id',messageControllers.updateIsRead);
router.get('/message/receiver/:id',messageControllers.getReceiveMessage);
router.get('/message/sender/:id',messageControllers.getSentMessage);
module.exports = {router};