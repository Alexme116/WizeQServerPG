const chatsModel = require('../models/chatsModel');

async function getChatsById(req, res) {
    const { id } = req.params;
    try {
        const chats = await chatsModel.getChatsById(id);
        res.json(chats);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function createChat(req, res) {
    const chat_req = req.body;
    try {
        const chat = await chatsModel.createChat(chat_req);
        res.json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function deleteChat(req, res) {
    const { id } = req.params;
    try {
        const chat = await chatsModel.deleteChat(id);
        res.json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function updateChat(req, res) {
    const { id } = req.params;
    const chat_req = req.body;
    try {
        const chat = await chatsModel.updateChat(id, chat_req);
        res.json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = { getChatsById, createChat, deleteChat, updateChat }