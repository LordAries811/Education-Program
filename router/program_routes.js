const express = require('express');
const router = express.Router();
const { getAllPrograms, getProgramById, createProgram, updateProgram, deleteProgram } = require('../controller/program_controller');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);
router.get('/', getAllPrograms);
router.get('/:id', getProgramById);
router.post('/', createProgram);
router.put('/:id', updateProgram);
router.delete('/:id', deleteProgram);

module.exports = router;
