require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const { Pool } = require('pg');
const fetch = require('node-fetch');
const ClientError = require('./client-error'); // eslint-disable-line
const errorMiddleware = require('./error-middleware');
const path = require('path');

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();



app.use(staticMiddleware);



// loads comments
app.get('/api/comments/:id', (req, res) => {
    const gameId = req.params.id;
  const sql = `
  select * from comments where "gameId" = '${gameId}'
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
      .catch(err => console.error(err));
});


//post comments
app.use(express.json());

app.post('/api/comments',(req,res) => {
    const name = req.body.content[1];
    const comment = req.body.content[0];
    const gameId = req.body.content[2];
    const sql = `
    insert into "comments" ("name","commentBody","gameId")
    values('${name}','${comment}','${gameId}');
    `;

    db.query(sql)
        .then(result =>{
            res.json(result.rows);
        })
        .catch(err => console.error(err));
});

//post ratings
app.use(express.json());

app.post('/api/rating',(req,res) =>{
    const rating = req.body.content[0];
    const gameId = req.body.content[1];
    // const ratingId = req.body.content[2];
    const sql = `
        insert into "rating" ("rating","gameId")
        values('${rating}','${gameId}')
    `;

    db.query(sql)
        .then(result =>{
            res.json(result.rows);
        })
        .catch(err => console.error(err));
});


// app.use(staticMiddleware);

//loads ratings
app.get('/api/rating/:id',(req,res) => {
    const gameId = req.params.id;
    // const ratingId = req.params.ratingId;
    const sql = `
  select * from rating where "gameId" = '${gameId}'
  `;

    db.query(sql)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => console.error(err));
});

//delete comments
app.delete('/api/comments/:id',(req,res) => {
    const deleteId = req.params.id;
    const sql = `
    delete from "comments" where "commentId" = '${deleteId}'
    `;

    db.query(sql)
        .then(result => {
            res.json(result.rows);
        })
        .catch(err => console.error(err));

});


//loads popular titles
app.use(express.json());

app.post('/api/game',(req,res) => {
    const platform = req.body.content;
    fetch('https://api.igdb.com/v4/games', {
        method: 'post',
        body:  platform,
        headers: { 'Accept': 'application/json',
                   'Client-ID': '7i5eel4xjpf149c9kf2jvt5u1tf31k',
                   'Authorization': 'Bearer fje25cq7g3etez2abqoj8sxx9srigp',
        },
    })
        .then(res => res.json())
        .then(games => {
             res.json(games);
        })
        .catch(err => console.error(err));
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
                'Authorization': 'Bearer fje25cq7g3etez2abqoj8sxx9srigp',
            },
        })
            .then(res =>res.json())
            .then(searchResults => {
                res.json(searchResults);
            })
            .catch(err => console.error(err));

});

app.use((req, res) => {
    res.sendFile('/index.html', {
        root: path.join(__dirname, 'public')
    });
});
app.use(errorMiddleware);


app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
