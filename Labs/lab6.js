var express = require('express');
var app = express();

app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 


var book = [
  {'Title':'' , 'Author': '', 'Publisher':'' , 'Date': '', 'Website':''}
]


app.get('/', (req, res) => {
  res.send('<h1> Salman AlMaskati <br> Home Page </h1> <a href="/bookinventory/add">Add a book</a> <br> <a href="/bookinventory/list">List of book</a> ')
})

app.get('/bookinventory/add', (req, res) => {
  var title_form = '<br><form action="/bookinventory/addtitle" method="post"><label for="title">Title:</label><br><input type="text" id="title" name="title"><input type="submit" value="Submit"><br></form>'

  var author_form = '<br><form action="/bookinventory/addauthor" method="post"><label for="author">Author:</label><br><input type="text" id="author" name="author"><input type="submit" value="Submit"><br></form>'

  var publisher_form = '<br><form action="/bookinventory/addpublisher" method="post"><label for="publisher">Publisher:</label><br><input type="text" id="publisher" name="publisher"><input type="submit" value="Submit"><br></form>'

  var date_form = '<br><form action="/bookinventory/adddate" method="post"><label for="date">Date:</label><br><input type="text" id="date" name="date"><input type="submit" value="Submit"><br></form>'

  var website_form = '<br><form action="/bookinventory/addwebsite" method="post"><label for="publisher">Website:</label><br><input type="text" id="website" name="website"><input type="submit" value="Submit"><br></form>'






  res.send('Add a Book Title : ' + title_form + author_form + publisher_form + website_form + date_form);
})

app.get('/bookinventory/list', (req, res) => {
  var html='<p>'
  for(var i=0;i<book.length;i++){
    var title = book[i].Title || '';
    var author = book[i].Author || '';
    var publisher = book[i].Publisher || '';
    var date = book[i].Date || '';
    var website = book[i].Website || '';

    html=html+title +'<br>' + author + publisher + date + website
  }
  html+='</p>'

  res.send('Book Inventory List (Title/Author/Publisher/Date/Website): ' + html );
})




app.post('/bookinventory/addtitle', function(req, res){

  console.log(req.body);
  var new_title = req.body.title;

  var title_json = {'Title': new_title};
  book.push(title_json);
  res.send('Title: ' + new_title + ' is added!<br> <a href="/bookinventory/add">Continue Adding</a> <br> <a href="/bookinventory/list">list of Books</a>');
}

);


app.post('/bookinventory/addauthor', function(req, res){

  console.log(req.body);
  var new_author = req.body.author;

  var author_json = {'Author': new_author};
  book.push(author_json);
  res.send('Author: ' + new_author +  ' is added!<br> <a href="/bookinventory/add">Continue Adding</a> <br> <a href="/bookinventory/list">list of Books</a>');
}

);

app.post('/bookinventory/addpublisher', function(req, res){

  console.log(req.body);
  var new_publisher = req.body.publisher;

  var publisher_json = {'Publisher': new_publisher};
  book.push(publisher_json);
  res.send('Publisher: ' + new_publisher + ' is added!<br> <a href="/bookinventory/add">Continue Adding</a> <br> <a href="/bookinventory/list">list of Books</a>');
}

);

app.post('/bookinventory/adddate', function(req, res){

  console.log(req.body);
  var new_date = req.body.date;

  var date_json = {'Date': new_date};
  book.push(date_json);
  res.send('Date: ' + new_date + ' is added!<br> <a href="/bookinventory/add">Continue Adding</a> <br> <a href="/bookinventory/list">list of Books</a>');
}

);

app.post('/bookinventory/addwebsite', function(req, res){

  console.log(req.body);
  var new_website = req.body.website;

  var website_json = {'Website': new_website};
  book.push(website_json);
  res.send('Website: ' + new_website + ' is added!<br> <a href="/bookinventory/add">Continue Adding</a> <br> <a href="/bookinventory/list">list of Books</a>');
}

);



const port = 5000






  

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})