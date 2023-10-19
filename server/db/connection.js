/* eslint-disable no-unused-vars */
import { createConnection } from "mysql2";
import dotenv from "dotenv"

dotenv.config()

const connection = createConnection({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'cms',
    port: 3306,
});

connection.query("SELECT 1", (err, result, fields) => {
    if (err) console.log(err);
    console.log("\nDatabase Connected");
})

export default connection