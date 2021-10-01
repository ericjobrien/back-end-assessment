const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

  
 app.get("/api/compliment", (req, res) => {
   const compliments = ["Gee, you're a smart cookie!",
 					 "Cool shirt!",
 					 "Your Javascript skills are stellar.",
   ];

   // choose random compliment
   let randomIndex = Math.floor(Math.random() * compliments.length);
   let randomCompliment = compliments[randomIndex];

   res.status(200).send(randomCompliment);
  
 });

app.get("/api/fortune", (req, res) => {
  const fortune = ['A golden egg of opportunity falls into your lap this month', 
  'A person of words and not deeds is like a garden full of weeds',
'Adventure can be real happiness.', 'All your hard work will soon pay off',
'Bide your time, for success is near'];

// choose random fortune
let randomIndex = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndex];

res.status(200).send(randomFortune);

});


app.get('/api/saying', (req, res) => {
  const sayings = ['I need to leave', 'Apples are bitter on top of mountains', 'Eating seeds is a past-time activity',
'Never look a bluejay in the eyes', 'The taste of freedom, comes from dirt...get a shovel', 'Why not ask for mustard?',
'Even strong people jaywalk'];

  


let randomIndex = Math.floor(Math.random() * sayings.length);
let randomSaying = sayings[randomIndex];

res.status(200).send(randomSaying);

});

app.get('/api/halloween', (req, res) => {
  const halloween = 'HAPPY HALLOWEEN'
  res.status(200).send(halloween);
});

app.listen(4000, () => console.log("Server running on 4000"));
