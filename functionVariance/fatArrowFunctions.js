'use strict'

const noArgs =
  () => {
    console.log('in no arg, no return')
  }

const oneArgWithParams =
  (x) => {
    console.log(`x: ${x}`)
  }

const oneArgNoParams =
  x => {
    console.log(`x: ${x}`)
  }

// if x is undefined it gets the default
// otherwise it takes the value passed in
const oneArgWithDefaut =
  (x = 'default') => {
    console.log(`x: ${x}`)
  }

const twoArgs =
  (x, y) => {
    console.log(`x: ${x}, y: ${y}`)
  }

// default must be the last, or right-most value
// otherwise it may cause many unexpected issues
const twoArgsWithDefault =
  (x, y = 'default') => {
    console.log(`x: ${x}, y: ${y}`)
  }

// ... rest takes the remaining parameters and puts them into an array
// also must be the last parameter or it will auto include all others
const restParam =
  (...rest) => {
    console.log(rest)
  }

const oneArgWithRestParams =
  (x, ...rest) => {
    console.log(`x: ${x}`)
    console.log(rest)
  }

// testing functions

console.log('noArgs')
noArgs()

console.log('oneArgNoParams')
oneArgNoParams()

console.log('oneArgWithParams')
oneArgWithParams('one arg')

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

// automatically returns the value if no { } are found
// if { } are used the return keyword must be used to return a value
const singleLineValueReturn =
  () =>
    'returned value'

const multiListValueReturn =
  () => {
    console.log('multi line value return')
    return 'returned value'
  }

let x = 10
// without { } around expression this will return the value of x
const singleLineNoReturn =
  () => { x += 10 }

const multiLineNoReturn =
  () => {
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
