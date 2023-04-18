const express = require('express')
const books = require('../data/books')

const router = express.Router()

// This makes codes organized rather then writing everthing in one file
router.route('/')
    .get((req, res) => {
        res.json(books)
    })

    .post((req, res) => {
        if(!req.body.title){
            return res.status(400).json({error: 'Title is missing'})
        }
        const book = {
            id : books.length + 1,
            title : req.body.title,
            author : req.body.author || 'Anonymous' 
        }
        books.push(book)
        // res.json(book)
        res.status(201).json(book)
        // res.json(req.body);
    })

    .put((req, res) => {
        res.status(405).json({ error:"This method (PUT) is not allowed" })
    })

    .delete((req, res) => {
        res.json({})
    })
    
router.route('/:book_id')
    .get((req, res) => {
        // const book_id = res.body.id
        // res.json(book_id)
    })

    .post((req, res) => {
        res.status(405).json({error: 'This method (POST) is not allowed'})
    })

    .put((req, res) => {
        const updated_books = books.map((b) => {
        if(b.id == req.params.book_id){
            b.title = req.body.title
            b.author = req.body.author
        }
            return b
        })
        res.json(updated_books)
    })

    // .delete((req, res) => {
    //     books=books.filter((b) => {
    //         return b.id != req.params.book_id
    //     })
    //     res.json(books)
    // })

    .delete((req, res) => {
        const index = books.findIndex((b) => b.id === parseInt(req.params.book_id));
        if (index === -1) {
          return res.status(404).json({ error: 'Book not found' });
        }
        books.splice(index, 1);
        res.json(books);
      });
    

module.exports = router