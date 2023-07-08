<<<<<<< HEAD
function sum (a,b){
    return a+b; 
}

const ans = document.getElementById("h1");
var final = sum(3,1);
ans.textContent = (final);
=======
const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://salman:salman20@cluster0.ux25ecb.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(uri);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var book = [
  {'Title':'' , 'Author': '', 'Publisher':'' , 'Date': '', 'Website':''}
]

app.get('/', (req, res) => {
  res.send('<h1 style="color: rgb(114, 114, 114); font-family:monospace; text-align:center"> Salman AlMaskati <br> Home Page </h1> <h3> <a href="/bookinventory/add">Add a book</a> </h3> <br> <h3><a href="/bookinventory/list">List of book</a><h/3> ')
})


app.get('/bookinventory/add', (req, res) => {
  var form = ' <form method="POST" action="/bookinventory/added"> <label for="title">Title:</label><br> <input type="text" id="title" name="Title" required><br> <label for="author">Author:</label><br> <input type="text" id="author" name="Author" required><br> <label for="publisher">Publisher:</label><br> <input type="text" id="publisher" name="Publisher" required><br> <label for="date">Date:</label><br> <input type="text" id="date" name="Date" required><br> <label for="website">Website:</label><br> <input type="text" id="website" name="Website" required><br><br> <input type="submit" value="Add Book"></form>'

  res.send('Add a Book Title : ' + form);
})


app.post('/bookinventory/added', function(req, res){

  console.log(req.body);
  var new_title = req.body.Title;
  var new_author = req.body.Author;
  var new_publisher = req.body.Publisher;
  var new_date = req.body.Date;
  var new_website = req.body.Website;

  var new_book = {'Title': new_title, 'Author': new_author, 'Publisher': new_publisher, 'Date': new_date, 'Website': new_website};
  book.push(new_book);
  res.send('Title: ' + new_title + ' added to the book inventory.<br> <a href="/bookinventory/list">list of Books</a>');



  
const client = new MongoClient(uri);
async function run() {
  try {
    const db = client.db('tmu');
    const coll = db.collection('Books');
    // Query
    const query = await coll.insertOne(new_book);
    console.log('1 document inserted');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
});



app.get('/bookinventory/list', async (req, res) => {
  
  await client.connect();
  const db = client.db('tmu');
  const coll = db.collection('Books');

  const cursor = coll.find({});
  const books = await cursor.toArray();

  res.send(books);

});


async function run() {
  try {
    const db = client.db('tmu');
    const coll = db.collection('Books');
    const query = await coll.find().toArray();
    console.log(query);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
>>>>>>> 2bf289b8f601be5a39208665b70428c444347829
