const express = require('express');
const summarizeText = require('./summarizer'); // make sure this returns a Promise

const app = express();
app.use(express.json()); // Parse JSON request bodies


const summarizeText = require('./summarizer');


app.post('/summarize', async (req, res) => {
  const { text } = req.body;
  const summary = await summarizeText(text);
  res.json(summary);
});

module.exports = router;


app.listen(5000, () => {
  console.log('connected');
});


