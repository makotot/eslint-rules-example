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

function handleCbErr (err, done) {
  done();
}

var mixedRequire = require('./module'),
  mixed = 'mixed';

var NewRequire = new require('./module');

var pathConcat = __dirname + 'path.js';

function processExit () {
  process.exit(1);
}

var fs = require('fs');

fs.existsSync('./some-path');

var bracketSpaces = [ 1, 2 ];

if (obj) {
  obj.d = 0;
}
else {
  obj = {};
}

var camel_case = '';

var space = 0 , arround = 1;

var comma
  , style;

var computedProp = { foo: 1 };

computedProp[ 'foo' ];

var self;

setTimeout(function () {
  self = this;
  console.log(self);
}, 0);

var funcNames = function () {};

function funcStyleA () {}

var funcStyleB = function () {};

var keySpacing = {
  space : []
};

var linesAroundCommentA;
// lines around comment
var linesAroundCommentB;


function nestedCb (cbA) {
  cbA(function (cbB) {
    cbB(function (cbC) {
      cbC(function (cbD) {
        cbD(function () {
        });
      });
    });
  });
}

function newCap () {}

var cap = new newCap();

function NewParens () {}

var parens = new NewParens;

var newLineAfterVar = 0;
console.log(newLineAfterVar);

var arrayConstructor = new Array(1, 2);

for (var i = 0; i < 10; i++) {
  if (i < 5) {
    continue;
  }
}

var inlineComment = '';//inline

if (obj.a) {
} else {
  if (obj.b) {
  }
}



var nestedTernary = obj.a ? 0 : obj.b ? 1 : 2;

var NewObj = new Object();

var spacedFn = function () {};

spacedFn ();

var noTernary = obj ? 1 : 0;

var trailingspaces;  

var _underscoreDangle;

var unneededTernary = obj.a === 1 ? true : false;

var curlySpace = { foo: 1 };

function oneVar () {
  var oneVarA;
  var oneVarB;
}

var operatorAssignment = 1;

operatorAssignment = operatorAssignment + 1;

var operatorLinebreak = 0 + 
  1;

function paddedBlock () {

  console.log(this);
}

var quote = {
  prop: ''
};

var quotes = "quotes quotes";

var semiSpacing ;

var semi

var sortVarsA, sortVarsC, sortVarsB;

if(obj) {
  console.log('space after keywords');
}

if (obj){
  console.log('space before blocks');
}

function spaceBeforeFnParen() {}

( function () {
  console.log('space in parens');
} )();

var spaceInfixOps = 1+1;

function spaceReturnThrowCase () {
  return-1;
}

++ obj.a;

//spaced comment

function wrapRegex () {
  return /regex/.test('regex');
}

class MyClass {

  constructor () {
    super();
  }
}

function*generators () {
}

class BeforeSuper extends MyClass {
  constructor () {
    this.name = '';
    super();
  }
}

var noVar;

var objShorthand = {
  a: function () {
  }
};

let preferConst = 0;

function maxDepth (x, y) {
  for (var i = 0; i < 10; i++) {
    if (x) {
      if (y) {
        i++;
      }
    }
  }
}

var maxLen = 'maxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlenmaxlen';

function maxParams (a, b, c, d, e) {
}

function maxStatements () {
  var hogehoge = 1;
  var foobar = 2;
  var barfoo = 3;
  var fooo = 4;
}

var bitwise = obj.a ^ obj.b;

var plusplus = 0;

plusplus++;
