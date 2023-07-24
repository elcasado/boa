const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/submit-form', async (req, res) => {
  try {
    const { userid, password } = req.body;

    // Create a new instance of the Form model with the submitted data
    const newForm = new Form({ userid, password });

    // Save the new form submission to the database
    await newForm.save();

    console.log("newForm", newForm);

    // Send a success response
    res.status(200).json({ message: 'Form submission successful' });
  } catch (error) {
    // Send an error response if something went wrong
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;