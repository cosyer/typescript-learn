export default "函数";

// 函数定义类型

function wocao(value: string): string {
  return value;
}
console.log(wocao("我曹"));

// 可选参数

function canSelect(name: string, age: number, hobby?: string): string {
  if (hobby) {
    return name + age + hobby;
  } else {
    return name + age;
  }
}
console.log(canSelect("小明", 25, "乒乓球"));
console.log(canSelect("小黑", 25));

// 默认参数

function defaultValue(name = "大哥", say = "我错了"): string {
  return name + say;
}
console.log(defaultValue());
console.log(defaultValue("小弟", "你牛逼"));

// 剩余参数

function arg(...argiments: string[]): string[] {
  return argiments;
}

console.log(arg("1", "222", "mmp", "whh"));
