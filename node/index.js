const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', async (req,res) => {
    const sql = `SELECT name FROM people`
    const teste = connection.query(sql, (err, result) => {
        if (err) throw err;

        const people =  result.map((item) => (item.name))
        res.send('<h1>Full Cycle Rocks!</h1>' + people.join('<br>'))
    })
})

app.listen(port, ()=> {
    console.log(`Server running on ${port}`)
})