class DatabaseConnection {
    constructor() {
        // Configura la conexión con la base de datos
        this.host = 'localhost';
        this.user = 'root';
        this.password = 'password';
        this.database = 'mydatabase';
    }

    connect() {
        // Realiza la conexión con la base de datos
        const connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        // Maneja los errores de conexión
        connection.connect((err) => {
            if (err) {
                console.error('Error al conectar con la base de datos:', err);
                return;
            }
            console.log('Conexión exitosa con la base de datos');
        });

        // Devuelve la conexión establecida
        return connection;
    }
}

// Ejemplo de uso
const dbConnection = new DatabaseConnection();
const connection = dbConnection.connect();