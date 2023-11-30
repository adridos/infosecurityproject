function submitForm() {
  const username = document.querySelector('[name="username"]').value;
  const password = document.querySelector('[name="password"]').value;
  const phone = document.querySelector('[name="phone"]').value;

  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, phone }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      // Handle success, e.g., redirect to a new page
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error, e.g., show an error message
    });
}
/*const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const app = express();
const port = 3000; // Change this to your desired port

// Function to generate a random 256-bit key
const generateKey = () => crypto.randomBytes(32);
const key = generateKey();

app.use(bodyParser.json());

app.post('/signup', async (req, res) => {
  const { username, password, phone } = req.body;

  try {
    const encryptedPassword = await encrypt(password, key);

    const uri = 'your-mongodb-uri'; // Replace with your MongoDB URI
    const client = new MongoClient(uri);

    await client.connect();

    const result = await insertUser(client, username, encryptedPassword, phone);

    await client.close();

    res.json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

async function insertUser(client, username, password, phone) {
  const result = await client.db('spam-db').collection('users').insertOne({
    username,
    password,
    phone,
    entries: [],
  });

  return result;
}

async function encrypt(pass, key) {
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(pass, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/