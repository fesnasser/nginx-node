const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var createTableSql = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))`
connection.query(createTableSql)

const sql = `INSERT INTO people(name) values('Felipe')`
connection.query(sql)

connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
});

process.on('SIGINT', () => {
    process.exit(1);
});