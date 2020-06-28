// 布尔值
let ft: boolean = false;
// 数字
let num: number = 999;
// 字符串
let str: string = "哇哈哈";
// 数组
let arr = ["哇哈", 2221, 1, 1];
let arr1: number[] = [1, 1, 11, 1];
let arr2: Array<number> = [121212, 212];
// 元组    多类型数组
let tu: [string, number] = ["3123", 313123];
// 枚举
enum peo {
  a,
  b,
  c,
}
let c: peo = peo.a;
// Any   任意类型
let a: any = "das";

let create = () => {
  document.body.innerHTML = "hello typescript";
};

export default "类型";
