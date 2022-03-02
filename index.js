const express = require("express");
const Cors = require('cors'); 
const dotenv= require("dotenv");
const app = express();

app.use(express.json());
app.use(Cors());
dotenv.config(); 
const port = process.env.PORT || 8001;
app.get('/', (req, res) => res.status(200).send("Hello Programmers"));

app.post('/bfhl', (req, res) => {
    const data = [...req.body.data]

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'yourname_yourrollno',
        'email': 'yourrmail',
        'roll_number': 'yourrollno',
        'numbers': numbers,
        'alphabet': alphabets
    })
})

app.listen(port, () => console.log(`listening :${port}`));