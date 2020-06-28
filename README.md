# typescript
[TypeScript](https://www.typescriptlang.org/) 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

## 区别
|TypeScript|JavaScript|
|:---:|:---:|
|JavaScript 的超集用于解决大型项目的代码复杂性|一种脚本语言，用于创建动态网页|
|可以在编译期间发现并纠正错误|作为一种解释型语言，只能在运行时发现错误|
|强类型，支持静态和动态类型|弱类型，没有静态类型选项|
|最终被编译成 JavaScript 代码，使浏览器可以理解|可以直接在浏览器中使用|
|支持模块、泛型和接口|不支持模块，泛型或接口|
|支持 ES3，ES4，ES5 和 ES6 等|不支持编译其他 ES3，ES4，ES5 或 ES6 功能|
|社区的支持仍在增长，而且还不是很大|大量的社区支持以及大量文档和解决问题的支持|

### 安装
```js
npm install -g typescript
```

### 编译
```js
tsc helloworld.ts
// helloworld.ts => helloworld.js
```

[在线学习语法和特性](https://www.typescriptlang.org/play)

## 函数
### 区别
|TypeScript|JavaScript|
|:---:|:---:|
|含有类型|无类型|
|箭头函数|箭头函数（ES2015）|
|函数类型|无函数类型|
|必填和可选参数|所有参数都是可选的|
|默认参数|默认参数|
|剩余参数|剩余参数|
|函数重载|无函数重载|

### 箭头函数
简单看下示例，详细可见[JavaScript 中 this 的详解](https://mydearest.cn/jsthis.html)
```js
myBooks.forEach(() => console.log('reading'));

myBooks.forEach(title => console.log(title));

myBooks.forEach((title, idx, arr) =>
  console.log(idx + '-' + title);
);

myBooks.forEach((title, idx, arr) => {
  console.log(idx + '-' + title);
});
```

### 参数类型和返回类型
```js
function createUserId(name: string, id: number): string {
  return name + id;
}
```

### 函数类型
```js
let IdGenerator: (chars: string, nums: number) => string;

function createUserId(name: string, id: number): string {
  return name + id;
}

IdGenerator = createUserId;
```

### 可选参数和默认参数
```js
// 可选参数
function createUserId(name: string, id: number, age?: number): string {
  return name + id;
}

// 默认参数
function createUserId(
  name: string = "Semlinker",
  id: number,
  age?: number
): string {
  return name + id;
}
```
在声明函数时，可以通过 ? 号来定义可选参数，比如 age?: number 这种形式。在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。

### 剩余参数
```js
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
```

### 函数重载
函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。
```js
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
```

方法重载是指在同一个类中方法同名，参数不同（参数类型不同、参数个数不同或参数个数相同时参数的先后顺序不同），调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术。所以类中成员方法满足重载的条件是：在同一个类中，方法名相同且参数列表不同。下面我们来举一个成员方法重载的例子：
```js
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
}

const calculator = new Calculator();
const result = calculator.add("Semlinker", " Kakuqo");
```
这里需要注意的是，当 TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。另外在 Calculator 类中，add(a: Combinable, b: Combinable){ } 并不是重载列表的一部分，因此对于 add 成员方法来说，我们只定义了四个重载方法。

## 变量声明

## 接口

## 枚举

## 泛型

## 类

## 类型 (11种)
### Boolean
```js
let isDone: boolean = false;
// ES5：var isDone = false;
```

### Number
```js
let count: number = 10;
// ES5：var count = 10;
```

### String
```js
let name: string = "Semliker";
// ES5：var name = 'Semlinker';
```

### Array
```js
let list: number[] = [1, 2, 3];
// ES5：var list = [1,2,3];

let list: Array<number> = [1, 2, 3]; // Array<number>泛型语法
// ES5：var list = [1,2,3];
```

### Enum
使用枚举我们可以定义一些带名字的常量。使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。
#### 数字枚举
```js
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST,
}

let dir: Direction = Direction.NORTH;
```
默认情况下，NORTH 的初始值为 0，其余的成员会从 1 开始自动增长。换句话说，Direction.SOUTH 的值为 1，Direction.EAST 的值为 2，Direction.WEST 的值为 3。上面的枚举示例代码经过编译后会生成以下代码：
```js
"use strict";
var Direction;
(function (Direction) {
  Direction[(Direction["NORTH"] = 0)] = "NORTH";
  Direction[(Direction["SOUTH"] = 1)] = "SOUTH";
  Direction[(Direction["EAST"] = 2)] = "EAST";
  Direction[(Direction["WEST"] = 3)] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
```
也可以设置 NORTH 的初始值，比如：
```js
enum Direction {
  NORTH = 3,
  SOUTH,
  EAST,
  WEST,
}
```

#### 字符串枚举
```js
enum Direction {
  NORTH = "NORTH",
  SOUTH = "SOUTH",
  EAST = "EAST",
  WEST = "WEST",
}
```
编译生成：
```js
"use strict";
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (Direction = {}));
```

#### 异构枚举
异构枚举的成员值是数字和字符串的混合：
```js
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
```
编译生成：
```js
"use strict";
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
```
数字枚举相对字符串枚举多了 “反向映射”：
```js
console.log(Enum.A) //输出：0
console.log(Enum[0]) // 输出：A
```

### Any
在 TypeScript 中，任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型（也被称作全局超级类型）。
```js
l et notSure: any = 666;
notSure = "Semlinker";
notSure = false;
```
any 类型本质上是类型系统的一个逃逸舱。作为开发者，这给了我们很大的自由：TypeScript 允许我们对 any 类型的值执行任何操作，而无需事先执行任何形式的检查。
```js
let value: any;

value.foo.bar; // OK
value.trim(); // OK
value(); // OK
new value(); // OK
value[0][1]; // OK
```
在许多场景下，这太宽松了。使用 any 类型，可以很容易地编写类型正确但在运行时有问题的代码。如果我们使用 any 类型，就无法使用 TypeScript 提供的大量的保护机制。为了解决 any 带来的问题，TypeScript 3.0 引入了 unknown 类型。AnyScript 2333.

### Unknown
就像所有类型都可以赋值给 any，所有类型也都可以赋值给 unknown。这使得 unknown 成为 TypeScript 类型系统的另一种顶级类型（另一种是 any）。下面我们来看一下 unknown 类型的使用示例：
```js
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK
```

对 value 变量的所有赋值都被认为是类型正确的。但是，当我们尝试将类型为 unknown 的值赋值给其他类型的变量时会发生什么？

```js
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error
```
unknown 类型只能被赋值给 any 类型和 unknown 类型本身。直观地说，这是有道理的：只有能够保存任意类型值的容器才能保存 unknown 类型的值。毕竟我们不知道变量 value 中存储了什么类型的值。

将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的。通过将 any 类型改变为 unknown 类型，我们已将允许所有更改的默认设置，更改为禁止任何更改。

### Tuple
众所周知，数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组。在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型，其工作方式类似于数组。

元组可用于定义具有有限数量的未命名属性的类型。每个属性都有一个关联的类型。使用元组时，必须提供每个属性的值。为了更直观地理解元组的概念，我们来看一个具体的例子：
```js
let tupleType: [string, boolean]; // 强制类型匹配
tupleType = ["Semlinker", true];
```

### Void
某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void：
```js
// 声明函数返回值为void
function warnUser(): void {
  console.log("This is my warning message");
}
```

需要注意的是，声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null：
```js
let unusable: void = undefined;
```

### Null/Undefined
TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null。
```js
let u: undefined = undefined;
let n: null = null;
```
默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。

### Never
never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

在 TypeScript 中，可以利用 never 类型的特性来实现全面性检查，具体示例如下：
```js
type Foo = string | number;

function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}
```

注意在 else 分支里面，我们把收窄为 never 的 foo 赋值给一个显示声明的 never 变量。如果一切逻辑正确，那么这里应该能够编译通过。但是假如后来有一天你的同事修改了 Foo 的类型：
type Foo = string | number | boolean;
复制代码然而他忘记同时修改 controlFlowAnalysisWithNever 方法中的控制流程，这时候 else 分支的 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，这时就会产生一个编译错误。通过这个方式，我们可以确保
controlFlowAnalysisWithNever 方法总是穷尽了 Foo 的所有可能类型。 通过这个示例，我们可以得出一个结论：`使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。`

## 类型断言
### 尖括号
```js
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

### as
```js
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 类型守卫
类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。目前主要有四种的方式来实现类型保护：

### in 关键字
```js
interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
```

### typeof 关键字
```js
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```
typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，"typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。

### instanceof 关键字
```js
interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {}
  getPaddingString() {
    return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(6);

if (padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为 'SpaceRepeatingPadder'
}
```

### 自定义类型保护的类型谓词
```js
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}
```

## 联合类型和类型别名
### 联合类型
联合类型通常与 null 或 undefined 一起使用：
```js
const sayHello = (name: string | undefined) => {
  /* ... */
};
```
例如，这里 name 的类型是 string | undefined 意味着可以将 string 或 undefined 的值传递给sayHello 函数。
```js
sayHello("Semlinker");
sayHello(undefined);
```

### 可辨识联合

TypeScript 可辨识联合（Discriminated Unions）类型，也称为代数数据类型或标签联合类型。它包含 3 个要点：`可辨识、联合类型和类型守卫。`

这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。`如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。`

#### 可辨识
可辨识要求联合类型中的每个元素都含有一个单例类型属性(公共属性)，比如：
```js
enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}
```
在上述代码中，我们分别定义了 Motorcycle、 Car 和 Truck 三个接口，在这些接口中都包含一个 vType 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

#### 联合类型
基于前面定义了三个接口，我们可以创建一个 Vehicle 联合类型：
```js
type Vehicle = Motorcycle | Car | Truck;
```
现在我们就可以开始使用 Vehicle 联合类型，对于 Vehicle 类型的变量，它可以表示不同类型的车辆。

#### 类型守卫
下面我们来定义一个 evaluatePrice 方法，该方法用于根据车辆的类型、容量和评估因子来计算价格，具体实现如下：
```js
const EVALUATION_FACTOR = Math.PI; 
function evaluatePrice(vehicle: Vehicle) {
  return vehicle.capacity * EVALUATION_FACTOR;
}

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
```
对于以上代码，TypeScript 编译器将会提示以下错误信息：
```js
Property 'capacity' does not exist on type 'Vehicle'.
Property 'capacity' does not exist on type 'Motorcycle'.
```

原因是在 Motorcycle 接口中，并不存在 capacity 属性，而对于 Car 接口来说，它也不存在 capacity 属性。那么，现在我们应该如何解决以上问题呢？这时，我们可以使用类型守卫。下面我们来重构一下前面定义的 evaluatePrice 方法，重构后的代码如下：
```js
function evaluatePrice(vehicle: Vehicle) {
  switch(vehicle.vType) {
    case "car":
      return vehicle.transmission * EVALUATION_FACTOR;
    case "truck":
      return vehicle.capacity * EVALUATION_FACTOR;
    case "motorcycle":
      return vehicle.make * EVALUATION_FACTOR;
  }
}
```

### 类型别名
类型别名用来给一个类型起个新名字(alias)。
```js
type Message = string | string[];

let greet = (message: Message) => {
  // ...
};
```

## 交叉类型
TypeScript 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。

```js
interface IPerson {
  id: string;
  age: number;
}

interface IWorker {
  companyId: string;
}

type IStaff = IPerson & IWorker;

const staff: IStaff = {
  id: 'E1006',
  age: 33,
  companyId: 'EFT'
};

console.dir(staff)
```
在上面示例中，我们首先为 IPerson 和 IWorker 类型定义了不同的成员，然后通过 & 运算符定义了 IStaff 交叉类型，所以该类型同时拥有 IPerson 和 IWorker 这两种类型的成员。
