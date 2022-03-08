const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES

//CONTACT FORM
//create a contact form submission
app.post ('/contactForms', async (req, res) => {
  try {
    const {first_name, last_name, email, title, message } = req.body;
    const newContactForm = await pool.query(
      "INSERT INTO contactform (first_name, last_name, email, title, message) VALUES ($1, $2, $3, $4, $5) RETURNING *", [first_name, last_name, email, title, message ]
    );
    res.json(newContactForm.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all contact form submissions
app.get('/contactForms', async (req, res) => {
  try {
    const allContactForms = await pool.query(
      "SELECT * FROM contactform"
    );
    res.json(allContactForms.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a contact form submission
app.get('/contactForms/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const contactForm = await pool.query("SELECT * FROM contactform WHERE contactform_id = $1", [id]);
    res.json(contactForm.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update a contact form submission
app.put('/contactForms/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const { first_name, last_name, email, title, message } = req.body;
    const updateContactForm = await pool.query(
      "UPDATE contactform SET first_name = $1, last_name = $2, email = $3, title = $4, message = $5 WHERE contactform_id = $6",
      [first_name, last_name, email, title, message, id]
    );
    res.json(updateContactForm[id]);
  } catch (err) {
    console.log(err.message);
  }
});

//delete a contact form submission
app.delete('/contactForms/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const deleteContactForm = await pool.query(
      "DELETE FROM contactform WHERE contactform_id = $1",
      [id]
    );
    res.json('contact form was deleted');
  } catch (err) {
    console.log(err.message);
  }
});

//Lorem Ipsum Content
//get all h1
app.get('/headingOne', async (req, res) => {
  try {
    const allHeadingOnes = await pool.query(
      "SELECT * FROM headingone"
    );
    res.json(allHeadingOnes.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get all h2
app.get('/headingTwo', async (req, res) => {
  try {
    const allHeadingTwos = await pool.query(
      "SELECT * FROM headingtwo"
    );
    res.json(allHeadingTwos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get all paragraphs
app.get('/paragraph', async (req, res) => {
  try {
    const allParagraphs = await pool.query(
      "SELECT * FROM paragraph"
    );
    res.json(allParagraphs.rows);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});