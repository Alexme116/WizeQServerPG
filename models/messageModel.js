const { db } = require('../config/db');

const getMessageById = async (id) => {
    try {
        const query = 'SELECT d.id, d.is_from, d.message FROM users U JOIN messages d ON U.id = d.chat_id WHERE U.id = $1;';
        const { rows } = await db.query(query, [id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

const deleteMessage = async (chat_id) => {
    try {
        const query = 'DELETE FROM messages WHERE chat_id = $1 RETURNING *';
        const { rows } = await db.query(query, [chat_id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

module.exports = { getMessageById, deleteMessage }