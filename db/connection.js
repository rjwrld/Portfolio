const mysql = require('mysql');

class Connection {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }

    connect() {
        this.connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL database:', err);
                return;
            }
            console.log('Connected to MySQL database!');
        });
    }

    query(sql, params, callback) {
        this.connection.query(sql, params, (err, results) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    end() {
        this.connection.end((err) => {
            if (err) {
                console.error('Error closing MySQL connection:', err);
                return;
            }
            console.log('MySQL connection closed!');
        });
    }
}

module.exports = Connection;
const config = {
    host: '3306',
    user: 'root',
    password: '$RJwrld%2115',
    database: 'portfolio'
};

const connection = new Connection(config);
connection.connect();

// Use the connection to execute queries
connection.query('SELECT * FROM users', [], (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    console.log('Query results:', results);
});

// Close the connection when done
connection.end();