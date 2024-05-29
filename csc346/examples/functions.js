console.log( echo("one") );
console.log( echoTwo("two") );
console.log( echoThree("three") );

function echo(a) {
  return a;
}

echoTwo = function(a) {
  return a;
}

var echoThree = function(a) {
  return a;
}
