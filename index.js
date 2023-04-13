const express = require('express')
 

const app =express()

app.get('/',(req, res) =>{
    res.send("Hello World")
})
app.get('/api//books', (req,res) =>{
    res.json(books)
})


app.post('./api/books',(req)=>{
    res.json(req.body)
})

app.get('/api/books/:book_id', (req, res)=>{
    const book_id=Number(req.params.book_id)
    const book = book.find((b) => b.id === book_id)
    res.json(book)
})

app.listen(3001, ()=>{
    console.log('server is running at port 3001')
})
