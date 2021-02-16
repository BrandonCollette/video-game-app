require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const { Pool } = require('pg');

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

app.use(staticMiddleware);

app.get('/api/game', (req, res) => {
  const sql = `
  select * from comments
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });

});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
