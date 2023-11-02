const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb+srv://spam:<password>@pwcluster.brehs9e.mongodb.net/'; 

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to Database');
    const db = client.db();
    
    // Register user information and add to collection
    async function registerUser (firstName, lastName, email, password) {
        const user_info = db.collection('user_info');
        const documentToInsert = {first_name: firstName, last_name: lastName, user_email: email, user_pw: password};
        const insertResult = await collection.insertOne(documentToInsert);
        console.log('Inserted document with _id:', insertResult.insertedId);
    }

    // Register a new password to the collection
    async function addPass (pw) {
        const pws = db.collection('registered_pws');
        const aes_pw = encryptString(pw);
        const pw_to_register = {registered_pws: aes_pw};
        const insert_pw = await collection.insertOne(pw_to_register);
        console.log('Inserted Pass: ', aes_pw)
    }

    // Get all registered passwords
    async function getPws() {
        const query = {registered_pws}
    }

    // AES-GCM Password encryption Algorithm
    async function encryptString(text, encryptionKey) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const key = await crypto.subtle.importKey("raw", encryptionKey, "AES-GCM", true, ["encrypt"]);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encryptedData = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
        return { encryptedData, iv };
    }

    // AES-GCM Password Decryption Algorithm
    async function decryptString(encryptedData, iv, encryptionKey) {
        const key = await crypto.subtle.importKey("raw", encryptionKey, "AES-GCM", true, ["decrypt"]);
        const decryptedData = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, encryptedData);
        const decoder = new TextDecoder();
        return decoder.decode(decryptedData);
    }
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    client.close();
  }
}

connectToMongoDB();
