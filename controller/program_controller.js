const asyncHandler = require('express-async-handler');
const { Program } = require('../config/dbConnection');

const getAllPrograms = asyncHandler(async (req, res) => {
    const programs = await Program.findAll();
    res.status(200).json(programs);
});

const getProgramById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const program = await Program.findByPk(id);

    if (program) {
        res.status(200).json(program);
    } else {
        res.status(404).json({ error: 'Program not found' });
    }
});

const createProgram = asyncHandler(async (req, res) => {
    const programData = req.body;
    const createdProgram = await Program.create(programData);
    res.status(201).json(createdProgram);
});

const updateProgram = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    const program = await Program.findByPk(id);

    if (program) {
        await program.update(updatedData);
        res.status(200).json(program);
    } else {
        res.status(404).json({ error: 'Program not found' });
    }
});

const deleteProgram = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const program = await Program.findByPk(id);

    if (program) {
        await program.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Program not found' });
    }
});

module.exports = {
    getAllPrograms,
    getProgramById,
    createProgram,
    updateProgram,
    deleteProgram,
};
