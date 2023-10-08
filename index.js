import express from 'express';
const app = express();
const port = 3000;

app.get('/heavy-load', (req, res) => {
   let count = 0;
   for (let index = 0; index < 500_000_000; index++) {
      count++;
   }
   res.send(`Hello World!${count}`);
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
