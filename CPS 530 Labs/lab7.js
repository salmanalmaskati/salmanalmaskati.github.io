
const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://salman:salman20@cluster0.ux25ecb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('tmu');
    const coll = db.collection('Books');
    // Query

    const docs = [
        {Title: "Harry Potter and the Philosopher's Stone", 
        Author: "J.K. Rowling", 
        Publisher:"Bloomsbury",
        Date:"26 June 1997", 
        Website:"https://www.wizardingworld.com/discover/books/harry-potter-and-the-philosophers-stone"},

        {Title: "To Kill a Mockingbird",Author: "Harper Lee",
        Publisher: "J. B. Lippincott & Co.",
        Date: "11 July 1960",
        Website: "https://www.harpercollins.com/products/to-kill-a-mockingbird-harper-lee"},

        {Title: "1984",
        Author: "George Orwell",
        Publisher: "Secker and Warburg",
        Date: "8 June 1949",
        Website: "https://www.penguin.co.uk/books/305944/1984/9780141036144.html"},

        {Title: "The Lord of the Rings",
        Author: "J.R.R. Tolkien",
        Publisher:"George Allen & Unwin",
        Date: "29 July 1954",
        Website: "https://www.tolkien.co.uk/products/the-lord-of-the-rings-7-book-boxed-set-9780261103573"},

        {Title: "Pride and Prejudice",
        Author: "Jane Austen",
        Publisher: "T. Egerton",
        Date: "28 January 1813",
        Website: "https://www.penguinrandomhouse.com/books/159700/pride-and-prejudice-by-jane-austen/"}
    ];

    const query = await coll.insertMany(docs);
    console.log('Multiple document inserted');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

