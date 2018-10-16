export default "泛型";

// 基本使用

function wawa<T>(name: T): T {
  return name;
}

console.log(wawa<string>("牛逼"));
console.log(wawa<number>(123));
console.log(wawa(123));

// 泛型变量

function fanX<A>(value: A[]) {
  console.log(value.length);
}
fanX([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);

// 泛型类型

function nima<cao>(value: cao): cao {
  return value;
}
let type: <cao>(value: cao) => cao = nima;
console.log(type<string>("mmp"));

//泛型类
class fanClass<YY> {
  constructor(public md: YY) {}
  cao: <YY>(x: YY, y: YY) => YY;
}
let wolg = new fanClass<number>(222);
wolg.cao = function(x, y) {
  console.log(x, y);
  return this.md;
};
console.log(wolg.cao(1, 2));

// 泛型约束

interface mmp {
  length: number;
}

function shishi<T extends mmp>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(shishi("111"));
