// let  声明
let a = 1;
// const 声明
const b = 1;

// 解构
let mm: number[] = [1, 2, 3, 4, 5, 6, 8];
let hh: any[] = [0, "wa", 1];
let wo = [...mm, ...hh];
let [who] = mm;

document.body.innerHTML = "hello ts";

export default "变量声明";
