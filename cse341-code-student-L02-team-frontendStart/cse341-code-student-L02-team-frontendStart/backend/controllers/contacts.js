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

const createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const db = await connectDB();
        const result = await db.collection('contacts').insertOne({ firstName, lastName, email, favoriteColor, birthday });
        res.status(201).json({ id: result.insertedId });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;

        const db = await connectDB();
        const result = await db.collection('contacts').updateOne(
            { _id: new ObjectId(id) },
            { $set: { firstName, lastName, email, favoriteColor, birthday } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.sendStatus(204); // No Content
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await connectDB();
        const result = await db.collection('contacts').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.sendStatus(200); // OK
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAllContacts, getSingleContact, createContact, updateContact, deleteContact };