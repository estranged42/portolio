var lastFib = 0;
var currentFib = 1;

var nextFib = function() {
  var nextFib = lastFib + currentFib;
  lastFib = currentFib;
  currentFib = nextFib;
  return nextFib;
}

for (i = 0; i < 10; i++) {
  console.log(nextFib());
}

