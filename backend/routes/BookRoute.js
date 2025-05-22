import express from "express";
import {
    getBooks, 
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from "../controllers/BookController.js";

const router = express.Router();

router.get('/book', getBooks);
router.get('/book/:id', getBookById);
router.post('/book', createBook);
router.patch('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

export default router;
