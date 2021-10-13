import path from 'path';

module.exports = {
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),  
    },
    migrations: {
        dirname: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
        dirname: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
};