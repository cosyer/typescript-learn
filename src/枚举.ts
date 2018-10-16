export default "枚举";

// 数字枚举

enum def {
  one,
  two,
  three,
  four
}

console.log(def);

function foo(what: def) {
  console.log(what);
}

foo(def.one);

// 字符串枚举

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
console.log(Direction);
