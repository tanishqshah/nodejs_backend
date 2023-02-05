const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Finserv@2023",
});

client.connect();
client.query("create DATABASE mypgdb", (err, data) => {
    if(!err) {
        console.log("Database created");
    }
    client.end();
})