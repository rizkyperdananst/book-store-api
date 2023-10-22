const express = require('express');
const port = process.env.PORT || 3000;
const bookRoute = require('./routes/bookRoute');
const router = require('./routes/bookRoute');

const app = express();

app.use(express.json()); // fungsinya agar kita bisa menambahkan data array/dummi ke dalam array books, karna disini kita belum memakai database hanya memakai array json. Dan ini juga disebut middleware.


app.use(bookRoute);

// GET, POST, PUT || PATCH, DELETE
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello World"
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
