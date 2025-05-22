import Borrowing from "../models/BorrowingModel.js";

export const getBorrowing = async (req, res) => {
    try {
        const response = await Borrowing.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBorrowingById = async (req, res) => {
    try {
        const response = await Borrowing.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBorrowing = async (req, res) => {
    try {
        await Borrowing.create(req.body);
        res.status(201).json({ msg: "Borrowing Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBorrowing = async (req, res) => {
    try {
        await Borrowing.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Borrowing Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBorrowing = async (req, res) => {
    try {
        await Borrowing.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Borrowing Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}
