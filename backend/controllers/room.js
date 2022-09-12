import pool from '../database.js';

export const getAllRoom = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM room;')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};

export const createRoom = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO room (name) VALUES($1);', [req.body.name]);
        res.status(201).json(result.rows);
    }
    catch (err) {
        console.log(err)
    }
};

export const getRoom = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM room WHERE ID=$1', [req.params.id]);
        res.status(200).json(result.rows);
    } catch (err) {
        console.log(err)
    }
};

export const updateRoom = async (req, res) => {
    try {
        const result = await pool.query('UPDATE room SET name=$1 WHERE "ID"=$2',
            [req.body.name, req.params.id])
        res.status(200).json(result).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const result = await pool.query('DELETE  * FROM room WHERE "ID"=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }

};

export default {
    getAllRoom, createRoom, getRoom, updateRoom, deleteRoom
}