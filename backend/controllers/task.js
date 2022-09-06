import pool from '../database.js';

export const getAllTask = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task;')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};

export const createTask = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task (description) VALUES($1);', [req.body.description]);
        res.status(201).json(result);

    }
    catch (err) {
        console.log(err)
    }
};

export const getTask = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task WHERE "ID"=$1', [req.params.id]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err)
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE task SET done=$1 WHERE "ID"=$2',
            [req.body.done, req.params.id])
        res.status(200).json(result).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
};

export const deleteTask = async (req, res) => {
    try {
        const result = await pool.query('DELETE  * FROM task WHERE "ID"=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }

};

export default {
    getAllTask, createTask, getTask, updateTask, deleteTask
}