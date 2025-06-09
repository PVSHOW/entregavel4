// backend/routes/tasks.js
const express = require('express');
const router = express.Router();
const pool = require('../utils/db');

// Listar tarefas
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});

// Criar tarefa
router.post('/', async (req, res) => {
  const { title, description, status } = req.body;
  try {
    await pool.query('INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3)', [title, description, status]);
    res.status(201).json({ message: 'Tarefa criada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
});

// Atualizar tarefa
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    await pool.query('UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4', [title, description, status, id]);
    res.json({ message: 'Tarefa atualizada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
});

// Deletar tarefa
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
});

module.exports = router;