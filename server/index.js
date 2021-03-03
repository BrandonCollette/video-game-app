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


// loads comments
app.get('/api/comments', (req, res) => {
  const sql = `
  select * from comments
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    });
});

//loads popular titles
app.use(express.json());

app.post('/api/game',(req,res) => {
    const platform = req.body.content;
    console.log('paltform: ',platform);
    fetch('https://api.igdb.com/v4/games', {
        method: 'post',
        body:  platform,
        headers: { 'Accept': 'application/json',
                   'Client-ID': '7i5eel4xjpf149c9kf2jvt5u1tf31k',
                   'Authorization': 'Bearer rkcf8ockuwldran995w4wtll8hrno0',
        },
    })
        .then(res => res.json())
        .then(games => {
             res.json(games);
        });
});

//search for titles
app.use(express.json());

app.post('/api/search',(req,res) => {
    const search = req.body.content;
        fetch('https://api.igdb.com/v4/games', {
            method: 'post',
            body: `search "${search}"; fields name,cover.image_id,summary,rating;`,
            headers: {
                'Accept': 'application/json',
                'Client-ID': '7i5eel4xjpf149c9kf2jvt5u1tf31k',
                'Authorization': 'Bearer rkcf8ockuwldran995w4wtll8hrno0',
            },
        })
            .then(res =>res.json())
            .then(searchResults => {
                res.json(searchResults);
            });

});


app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
