const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile.js');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

/// POST
server.post('/api/cohorts', async (req, res) => {
  try {
    const [id] = await db('cohorts').insert(req.body);

    const cohort = await db('cohorts')
      .where({ id })
      .first();

    res.status(201).json(cohort);
  } catch (error) {
    const message = 'We ran into an error';
    res.status(500).json({ message, error });
  }
});

/// GET
server.get('/api/cohorts', async (req,res) => {
  try{
    const cohort = await db('cohorts')
    res.status(200).json(cohort)
  } catch (e) {
    res.status(500).json(e)
  }
})

server.get('/api/cohorts/:id', async (req, res) => {
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .first();
    res.status(200).json(zoo);
  } catch (error) {
    res.status(500).json(error);
  }
});

/// UPDATE
server.put('/api/cohorts/:id', async (req, res) => {
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const cohort = await db('cohort')
        .where({ id: req.params.id })
        .first();

      res.status(200).json(cohort);
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

/// DELETE
server.delete('/api/cohorts/:id', async (req, res) => {
  try {
    const cohort = await db('cohorts')
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Records not found' });
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});