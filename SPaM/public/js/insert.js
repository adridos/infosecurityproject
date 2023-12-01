const { MongoClient, ServerApiVersion } = require('mongodb');
const crypto = require('crypto');

// Function to generate a random 256-bit key
const generateKey = () => crypto.randomBytes(32);
const key = generateKey();

async function main(){

    const uri = "mongodb+srv://spamadmin:spamadmin@cluster0.mfau0rr.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Awaiting to connect ...');

        // Make the appropriate DB calls
        console.log('Inserting user info ...');
        encPass = await encrypt(pw, key);
        await  insertUser(client, userName, encPass);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log('Client closed');
    }
}

async function insertUser(client, userName, pw){

    const result = await client.db("spam-db").collection("users").insertOne({
        username: userName,
        password: pw,
        entries: [ ],
    });

    if(result) {
        console.log(`User: '${userName}' was created with password '${pw}'`)
    } else {
        
    }
}

async function encrypt (pass, key) {
    const iv = crypto.randomBytes(16); // Initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(pass, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

main().catch(console.error);

module.exports = {
    insertUser,
};