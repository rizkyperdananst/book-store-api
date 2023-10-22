const books = [
    {
        id: 1,
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1869
    },
    {
        id: 2,
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        year: 1954
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    }
]

const index = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Get all books",
        data: books
    });
};

const store = (req, res) => {
     // simpan data dari request ke variabel book
     const book = req.body;
    
     const id = books[books.length - 1].id + 1;
     book.id = id;
     books.push(book);
 
     res.status(201).json({
         status: "success",
         message: `Book with title ${book.title} created successfully`,
         data: book
     });
};

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);

    if(book) {
        res.status(200).json({
            status: "success",
            message: `Get book with id ${id}`,
            data: book
        });
    } else {
        res.status(404).json({
            status: "failed",
            message: `Book with id ${id} not found`
        });
    }
}

module.exports = {
    index,
    show,
    store,
};