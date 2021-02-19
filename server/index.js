require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const { Pool } = require('pg');
const fetch = require('node-fetch');

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

app.use(staticMiddleware);

app.get('/api/comments', (req, res) => {
  const sql = `
  select * from comments
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });

});


app.get('/api/game',(req,res) => {

    fetch('https://api.igdb.com/v4/games', {
        method: 'post',
        body:   'fields name,rating; limit 4; where rating > 99;',
        headers: { 'Accept': 'application/json',
                   'Client-ID': '7i5eel4xjpf149c9kf2jvt5u1tf31k',
                   'Authorization': 'Bearer rkcf8ockuwldran995w4wtll8hrno0',
        },
    })
        .then(res => res.json())
        .then(games => {console.log('games[0].id: ',games[0].id);
        res.json(games);
        });


});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
