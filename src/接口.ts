// 基本情况

interface objInterface {
  name: string;
  age: number;
}

function foo(obj: objInterface) {
  console.log(obj.age, obj.name);
}

foo({ name: "我是你大爷", age: 99 });

// 可选属性   就是参数属性多了一个 ？
interface selectInterface {
  color?: string;
  opa?: number;
}

function canSelect(
  obj: selectInterface,
  width: number = 200
): { color: string; opa: number; area: number } {
  return {
    color: obj.color,
    opa: obj.opa,
    area: width * width,
  };
}

console.log(canSelect({ color: "红色", opa: 0.5 }));

// 只读属性

let readObj: { readonly name: string; readonly age: number } = {
  name: "曹",
  age: 20,
};

console.log(readObj);
// readObj.name = '吼吼' 报错

// 额外属性检查

interface other {
  name: string;
  age: number;
  [propname: string]: any;
}
let mmp: other = { name: "mmp", age: 18, ha: 1 };
console.log(mmp);

// 函数类型

interface funInterface {
  (name: string): boolean;
}
let fun: funInterface;
fun = function (name) {
  if (name) {
    return true;
  }
  return false;
};
console.log(fun("有"));
// fun() 没有参数报错

// 接口继承，混合类型

interface type {
  type: string;
}

interface area {
  area: string;
}

interface ower extends type, area {
  name: string;
  print(): void;
}

function getOwerMesage(type: string, area: string, name: string): ower {
  return {
    type,
    area,
    name,
    print() {
      console.log(`类型为${this.type},地址在${this.area}, 姓名为${this.name}`);
    },
  };
}

let getOwer = getOwerMesage("医疗", "恒生", "打野");
getOwer.print();

export default "接口";
