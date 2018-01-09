var faker = require('faker');
var customers = [];

exports.getAll = function (req, res) {
  if (customers.length === 0) {
    for (let index = 0; index < 200; index++) {
      customers.push({
        "id": faker.random.number(),
        "name": faker.name.findName(),
        "email": faker.internet.email(),
      });
    }
  }

  var page = req.query.page,
      size = req.query.size;

  function paginate (array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  };

  var result = paginate(customers, size, page);

  res.send(result);
};

exports.get = function (req, res){
  var customerId = req.params.id,
    result = undefined;

  for (let index = 0; index < customers.length; index++) {
    const element = customers[index];

    if (element.id == customerId) {
      result = element;
      break;
    }
  }

console.log(result);

  if (result)
    res.send(result)
  else
    res.status(404).send('Not found');
};
