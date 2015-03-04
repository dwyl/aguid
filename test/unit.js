var aguid = require('../lib/');
var test  = require('tape');

function validate(guid, t) {
  var parts = guid.split('-');
  // http://stackoverflow.com/questions/10687505/uuid-format-8-4-4-4-12-why
  t.equal(parts[0].length, 8, "First part is 8 characters");
  t.equal(parts[1].length, 4, "First part is 4 characters");
  t.equal(parts[2].length, 4, "First part is 4 characters");
  t.equal(parts[3].length, 4, "First part is 4 characters");
  t.equal(parts[4].length, 12, "Last part is 12 characters");
  return;
}

test("Generate a Random (V.4) GUID", function(t) {
  var guid = aguid();
  t.equal(guid.length, 36, "Random GUID works as expected: "+guid);
  // t.equal(str, '1ARVn', "Perma is consistent. 1234 >> 1ARVn")
  validate(guid, t);
  t.end();
});

test("Generate a Random (V.4) GUID", function(t) {
  var str = "hello@world.io";
  var guid = aguid(str);
  t.equal(guid, 'd828ed52-32ed-4908-86df-df934d3c315d', "Consisten UUID-like String "+guid);
  t.equal(guid.length, 36, "Length check passes");
  validate(guid, t);
  t.end();
});
