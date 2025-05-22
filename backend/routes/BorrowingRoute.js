import express from "express";
import {
    getBorrowing,
    getBorrowingById,
    createBorrowing,
    updateBorrowing,
    deleteBorrowing
} from "../controllers/BorrowingController.js";

const router = express.Router();

router.get('/borrowing', getBorrowing);
router.get('/borrowing/:id', getBorrowingById);
router.post('/borrowing', createBorrowing);
router.patch('/borrowing/:id', updateBorrowing);
router.delete('/borrowing/:id', deleteBorrowing);

export default router;
