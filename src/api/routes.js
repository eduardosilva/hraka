module.exports = function(app){
    var customers = require('./controllers/customers');
    app.get('/customers', customers.getAll);
    app.get('/customers/:id', customers.get);
    // app.post('/musicians', musicians.add);
    // app.put('/musicians/:id', musicians.update);
    // app.delete('/musicians/:id', musicians.delete);
}
