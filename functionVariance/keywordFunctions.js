'use strict'

function noArgs () {
  console.log('in no arg, no return')
}

function oneArg (x) {
  console.log(`x: ${x}`)
}

// if x is undefined it gets the default
// otherwise it takes the value passed in
function oneArgWithDefaut (x = 'default') {
  console.log(`x: ${x}`)
}

function twoArgs (x, y) {
  console.log(`x: ${x}, y: ${y}`)
}

// default must be the last, or right-most value
// otherwise it may cause many unexpected issues
function twoArgsWithDefault (x, y = 'default') {
  console.log(`x: ${x}, y: ${y}`)
}

// ... rest takes the remaining parameters and puts them into an array
// also must be the last parameter or it will auto include all others
function restParam (...rest) {
  console.log(rest)
}

function oneArgWithRestParams (x, ...rest) {
  console.log(`x: ${x}`)
  console.log(rest)
}

// function noArgsNoReturn () {
//   console.log('no args, no return')
// }

// function noArgsYesReturn () {
//   return 'something'
// }

// testing functions
console.log('noArgs')
noArgs()

console.log('oneArg')
oneArg('one arg')

console.log('oneArgWithDefaut')
oneArgWithDefaut()

console.log('twoArgs')
twoArgs('one arg', 'another arg')

console.log('twoArgsWithDefault')
twoArgsWithDefault('one arg plus the default')

console.log('restParam')
restParam('one arg', 'another arg', 'and another arg', 'maybe one more')

console.log('oneArgWithRestParams')
oneArgWithRestParams('one arg', 'another arg', 'and another arg', 'maybe one more')

function singleLineValueReturn () {
  return 'returned value'
}

function multiListValueReturn () {
  console.log('multi line value return')
  return 'returned value'
}

let x = 10
function singleLineNoReturn () {
  x += 10
}

function multiLineNoReturn () {
  console.log(`x: ${x}`)
  x += 10
}

// testing functions
console.log('singleLineValueReturn')
console.log(singleLineValueReturn())

console.log('multiListValueReturn')
console.log(multiListValueReturn())

console.log('singleLineNoReturn')
console.log(singleLineNoReturn())

console.log('multiLineNoReturn')
console.log(multiLineNoReturn())
