require('dotenv').config()
const exp = require('express');
const mongoose = require('mongoose')
let books = require('./data/books')

const book_routes = require(`./routes/book-routes`)

const port = process.env.PORT

mongoose.connect('mongodb://127.0.0.1:27017/demo')
    .then(()=>{
        console.log(`bluetooth device connected successfully`)
    })
    .catch((err)=> console.log(err))


const broute = require('./routes/book-routes')


const app = exp();

// Middle Wear - software that lies between an operating system and the applications running on it(Cerates a response for a request)

app.use(exp.json())

// 1st parameter is route and 2nd is req and res
app.get('/', (request, response) => {
    console.log(request);
    // response.send('Hello World')
    response.send('Hello')
});

app.use('/api/books', broute)

app.listen(port, () => {
    console.log(` Server is running at port ${port}`);
})

// app.get('/api/books', (req, res) => {
//     res.json(books);
// })

// app.post('/api/books',(req, res) => {
//     if(!req.body.title){
//         return res.status(400).json({error: 'Title is missing'})
//     }
//     const book = {
//         id : books.length + 1,
//         title : req.body.title,
//         author : req.body.author || 'Anonymous' 
//     }
//     books.push(book)
//     // res.json(book)
//     res.status(201).json(book)
//     // res.json(req.body);
// })

// app.put('/api/books/:book_id', (req, res) => {
//     // Maps return type is list
//     const updated_books = books.map((b) => {
//         if(b.id == req.params.book_id){
//             b.title = req.body.title
//             b.author = req.body.author
//         }
//         return b
//     })
//     res.json(updated_books)
// })

// app.delete('/api/books/:book_id', (req, res) => {
//     books = books.filter((b) => {
//         return b.id != req.params.book_id
//     })
//     res.json(books)
// })

// // Dyanamic routing
// app.get(('/api/books/:book_id'), (req, res)=> {
//     console.log(req.params)
//     const book = books.find((b) => b.id == req.params.book_id)
//     res.json(book)
// })

// // Takes a 1st parameter port(listens to the port)
// app.listen(port, () => {
//     console.log(Running server at port ${port});
// })

// // == only compares value not type === compares type

