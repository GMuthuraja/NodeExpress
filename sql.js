const sql = require('mssql');

const dbConfig = {
    server: 'RAQCHEDT-49',
    database: 'SampleDB',
    user: 'sa',
    password: 'pass@123',
    options: {
        encrypt: false
      }
};

console.log("sql connecting......")
const connection = new sql.connect(dbConfig, function (err) {
    const request = new sql.Request(connection);
    request.query('select * from Customers', function (err, recordset) {
        if (err)
            console.log('Database connection error'+err);

        console.dir("User Data: " + JSON.stringify(recordset));
    });
});