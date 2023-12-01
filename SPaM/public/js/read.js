const { MongoClient, ServerApiVersion } = require('mongodb');

const userName = '';
const found = false;

async function main(){

    const uri = "mongodb+srv://spamadmin:spamadmin@cluster0.mfau0rr.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Awaiting to connect ...');

        // Make the appropriate DB calls
        console.log('finding user info ...');
        await  findUser(client, userName);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log('Client closed');
    }
}

async function findUser(client, userName){
    const result = await client.db("spam-db").collection("users").findOne({username: userName});

    if(result) {
        console.log(`Found user in the collection with the name '${userName}'`);
        console.log(result);
        found = true;
    } else {
        console.log(`User not found with name '${userName}'`);
        found = false;
    }
}

main().catch(console.error);