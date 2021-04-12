const express = require('express')
const mysql = require("mysql")

const app = express()
const port = process.env.PORT || 3002

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
})

connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }

    console.log("connected")
})

connection.query("CREATE DATABASE tasks", (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result)
    console.log("Database Created")
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
