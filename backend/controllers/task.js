import pool from '../database.js';


export const createTaskList = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task_list(name) VALUES($1);', [req.body.name]);
        res.status(201).send({ message: "Succes Create" })
    }
    catch (err) {
        console.log(err)
    }
};
export const getAllList = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task_list')
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};
export const getAllFromList = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task_list INNER JOIN task USING (list_id) WHERE list_id=$1;', [req.params.id])
        res.status(200).json(result.rows)
    }
    catch (err) {
        console.log(err)
    }
};
export const deleteList = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM task_list WHERE list_id=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }
};


export const createTask = async (req, res) => {
    try {
        const result = await pool.query(
            'INSERT INTO task (list_id,description) VALUES($1,$2);', [req.params.id, req.body.description]);
        res.status(201).json(result);

    }
    catch (err) {
        console.log(err)
    }
};
export const doneTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE task SET done=$1 WHERE task_id=$2',
            [req.params.done, req.params.id])
        res.status(200).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
};

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query('UPDATE task SET description=$1 WHERE task_id=$2',
            [req.params.description, req.params.id])
        res.status(200).send({ message: "Succes updated" })
    } catch (err) {
        console.log(err)
    }
};

export const deleteTask = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM task WHERE task_id=$1',
            [req.params.id])
        res.status(200).send({ message: "Succes delete" })
    } catch (err) {
        console.log(err)
    }
};

