// const books = [
//     {
//         id: 1,
//         title: "War and Peace",
//         author: "Leo Tolstoy",
//         year: 1869
//     },
//     {
//         id: 2,
//         title: "The Lord of the Rings",
//         author: "J. R. R. Tolkien",
//         year: 1954
//     },
//     {
//         id: 3,
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//     }
// ]

const { Book } = require('../models');

const index = async (req, res) => {
    try {
        const data = await Book.findAll();
        res.status(200).json({
            status: "success",
            message: "Get all books",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }
};

const store = async (req, res) => {
    try {
        const { title, author, year } = req.body;

        const book = await Book.create({ title, author, year });
        res.status(201).json({
            status: "success",
            message: `Book with title ${book.title} created successfully`,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }

     // simpan data dari request ke variabel book
    //  const book = req.body;
    
    //  const id = books[books.length - 1].id + 1;
    //  book.id = id;
    //  books.push(book);
 
    //  res.status(201).json({
    //      status: "success",
    //      message: `Book with title ${book.title} created successfully`,
    //      data: book
    //  });
};

const show = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await Book.findByPk(id);
        
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
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }
}

const update = async (req, res) => {
    try {
        // Mendapatkan id dari request
        const id  = req.params.id;
        const { title, author, year } = req.body;

        const book = await Book.update({ title, author, year }, {
            where: {
                id: id
            }
        })

        if(book) {
            res.status(200).json({
                status: "success",
                message: `Book with id ${id} updated successfully`,
                data: {
                    id: id,
                    title: title,
                    author: author,
                    year: year
                }
            });
        } else {
            res.status(404).json({
                status: "failed",
                message: `Book with id ${id} not found`
            })
        }

    } catch (error) {
        console.log(error.message);
    }
};

const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await Book.destroy({
            where: {
                id: id
            }
        });

        if(book) {
            res.status(200).json({
                status: "success",
                message: `Book with id ${id} deleted successfully`
            });
        } else {
            res.status(404).json({
                status: "failed",
                message: `Book with id ${id} not found`
            })
        }
    }
    catch (error) {
        res.status(500).json({
            status: "failed",
            message: error.message
        });
    }
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};