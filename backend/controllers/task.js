const pool = require('../database')

const getAllTask = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task;')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
}
const createTask = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task (description) VALUES($1);', [req.body.description]);
        res.status(201).json(result);

    }
    catch (err) {
        console.log(err)
    }
}
const getTask = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task WHERE id=$1', [req.params.id]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err)
    }
}
const updateTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE task SET description = $1, done = $2 WHERE id=$3',
            [req.body.description, req.body.done, req.params.id])
        res.status(200).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
}

const deleteTask = async (req, res) => {
    try {
        const result = await pool.query('DELETE  * FROM task WHERE id=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }

}
module.exports = {
    getAllTask, createTask, getTask, updateTask, deleteTask
}