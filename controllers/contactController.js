import Contact from "../models/Contact.js";

// Get all contacts (customers/vendors)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ businessId: req.user._id });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a contact
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({ ...req.body, businessId: req.user._id });
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
