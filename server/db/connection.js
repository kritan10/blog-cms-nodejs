/ eslint-disable no-unused-vars /
import { createConnection } from "mysql2";

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'cms',
    port: 3306,
});

connection.query("SELECT 1", (err) => {
    if (err) throw err
    console.log("\nDatabase Connected");
})

export default connection