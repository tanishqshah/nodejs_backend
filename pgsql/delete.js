const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Finserv@2023",
    database: "nodeconnect"
});
client.connect();
client.query("delete from student where empid='110'", (err, data) => {
    if(!err) {
        console.log(data.rows);
    }
    client.end();
})
