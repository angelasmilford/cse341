const { ObjectId } = require('mongodb');
const connectDB = require('../db/connection');

const getAllContacts = async (req, res) => {
    try {
        const db = await connectDB();
        const contacts = await db.collection('contacts').find().toArray();
        res.json(contacts)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingleContact = async (req, res) => {
    try {
        const db = await connectDB();
        const contact = await db.collection('contacts').findOne({ _id: new ObjectId(req.params.id) });
        
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.json(contact);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllContacts, getSingleContact}