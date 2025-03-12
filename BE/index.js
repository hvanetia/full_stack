import express from "express";

const app = express();

const jokes = [
    {
      "id": 1,
      "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      "id": 2,
      "joke": "Why do Java developers wear glasses? Because they don't C#."
    }
  ]
  

app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})

app.listen(3000, () => {
    console.log("running ....")
})