const app = "I don't do much."

function kittens(){
  var kittens = [
  'Milo',
  'Otis',
  'Garfield']
  return kittens
} 

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}