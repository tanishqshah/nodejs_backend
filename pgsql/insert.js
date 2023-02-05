const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Finserv@2023",
    database: "nodeconnect"
});
client.connect();
client.query("insert into student values('110','Hardik garg','20','Mumbai','Developer')", (err, data) => {
    if(!err) {
        console.log(data.rows);
    }
    client.end();
})
