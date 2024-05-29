const messagesModel = require('../models/messageModel');

async function getMessageById(req, res) {
    const { chat_id } = req.params;
    try {
        const message = await messagesModel.getMessageById(chat_id);
        res.json(message);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function deleteMessage(req, res) {
    const { chat_id } = req.params;
    try {
        const message = await messagesModel.deleteMessage(chat_id);
        res.json(message);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getMessageById, deleteMessage }