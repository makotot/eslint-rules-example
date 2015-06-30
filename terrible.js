var foo = {
  bar: 1,
};

if (foo.bar = 0) {
  console.log(foo.bar);
}

var controlRegexPatternA = /\\x1f/;
var controlRegexPatternB = new RegExp('\x20');

debugger;


function hoge (a, b, a) {
  return a;
}

hoge(1, 2, 3);

var obj = {
  a: 1,
  b: 2,
  a: 1
};

switch (obj.a) {
  case 1:
    break;
  case 2:
    break;
  case 1:
    break;
  default:
    break;
}

var charClassPattern = /^[]/;

if (obj.a) {
}

try {
} catch (e) {
  e = 0;
}

if (!!obj.a) {
}

var extraParens = (1 * 0);

function extraSemi () {
};

function funcAssignA () {
}

function funcAssignB () {
}

funcAssignA = funcAssignB;

if (obj.a) {
  function innerDeclaration () {}
}


var invalidPattern = RegExp('.', 'z');

　
if ((!a in obj)) {
  console.log(0);
}

Math();

var spaceInText = /foo         bar/;

var reservedKeys = {
  class: ''
};

var sparseArray = [,,];

function unreachable () {
  var x = 0;

  return x;

  x = 1;
}

if (obj.a == NaN) {
  obj.a = 0;
}

/**
 * valid JSDoc
 */
function validJSDoc () {
  return 'valid';
}

typeof "valid typeof" === "strin";


var accessorPairs = {
  set foo (val) {
    this.val = val;
  }
};


function blockScoped () {
  if (obj.a) {
    var blockScopedVar = "var";
  }

  console.log(blockScopedVar);
}


function complexity (opt) {
  if (opt) {
    return opt;
  } else if (!opt) {
    return 1;
  } else {
    return 0;
  }
}

function consistentReturn (x) {
  if (x) {
    return x;
  } else {
    return;
  }
}

if (obj) console.log(obj);

switch (obj.a) {
  case 1:
    break;
  case 2:
    break;
}

var dotNotation = obj['a'];

var dot = {
  location: function () {
    return this;
  }
};

dot.
  location();

dot
  .location();

if (obj.a == 0) {
  console.log(obj.b);
}

for (key in obj) {
  console.log(key);
}

alert(this);

function noArgumentsCall () {
  var arg = arguments.callee;
}

function lookLikeDivision () {
  return /=foo/;
}

function elseReturn (x) {
  if (x) {
    return x;
  } else {
    return;
  }
}

emptyLabel:
  var foobar = 0;

if (obj == null) {
  console.log('null');
}

eval();

String.prototype.extendNative = function () {
  return this;
};

var extraBind = function () {
  console.log('extra');
}.bind(hoge);


switch (obj.a) {
  case 1:
    obj.c = 100;
  default:
    obj.c = null;
}

var floatingDecimal = .5;

setTimeout("console.log('implied!')", 100);


function DisallowIterator () {
}
DisallowIterator.prototype.__iterator__ = function () {
};


labeldStatement:
  break labeldStatement;

{}

for (var i = 0; i < 10; i++) {
  (function (n) {
    console.log(n);
  })(i);
}

var multispaces =  1;

var multilineString = 'line\
  line';

String = 'native object';

var funcConstructor = new Function ();

var primitiveWrapper = new String('primitive');

function NoNew () {
}

new NoNew();

var octalEscape = '\251';

var octalLiteral = 011;

var reassignParam = function (x) {
  x = 0;
};

var env = process.env;

var proto = obj.__proto__;

var redeclearVar = 0;
var redeclearVar = 1;

function returnAssignment () {
  var assigned = 0;

  return assigned = 1;
}

location.href = 'javascript:void(0)';

var selfCompare = 10;

if (selfCompare === selfCompare) {
  selfCompare = 0;
}


var noSequenceA = (3, 5);
noSequenceA = noSequenceB += 5, noSequence + noSequenceB;

function throwLiteral () {
  throw "no-throw-literal";
}

"unused expressions";

void 0;

// TODO: no-warning-comments

with (obj) {
  console.log(this);
}

var radix = parseInt("001");

function varsOnTop (n) {
  var vars1 = 0;
  if (n) {
    return n;
  }

  var vars2 = 10;

  return vars1 + vars2 + n;
}

var wrapIife = function () {
  return {};
}();


var yoda = 1;

if (1 === yoda) {
  console.log(yoda);
}

"use strict";

function useStrict () {
  "use strict";
}

var shadowErr = 'err';
try {
  throw new Error();
} catch (shadowErr) {
}

var deleteVar;
delete deleteVar;

var labelVar = 0;
function bar() {
  labelVar:
    for (;;) {
    break labelVar;
  }
}

var undefined;

var shadow;

function noShadow () {
  var shadow = 'shadow';
}

var undefInit = undefined;

var unusedVar;

console.log(beforeDefine);
var beforeDefine = 0;

