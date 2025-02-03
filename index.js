const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { isPrime, isPerfect, isArmstrong, getDigitSum } = require("./utils");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());


app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);

  const prime = isPrime(num);
  const perfect = isPerfect(num);
  const armstrong = isArmstrong(num);
  const even = num % 2 === 0;
  const digitSum = getDigitSum(num);
  
  // Determine properties
  const properties = [];
  if (armstrong) properties.push("armstrong");
  properties.push(even ? "even" : "odd");

  try {
    // Fetch fun fact from Numbers API
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    const funFact = response.data;

    res.json({
      number: num,
      is_prime: prime,
      is_perfect: perfect,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch fun fact." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});