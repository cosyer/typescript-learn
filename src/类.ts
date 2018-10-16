export default "类";

//基本类

class wahah {
  name: String;
  constructor(name: string) {
    this.name = name;
  }
  print() {
    console.log(`名字是${this.name}`);
  }
}

let niubi = new wahah("亲爱的");
niubi.print();

// 继承 重构

class people {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`我名字是${this.name} 我年龄是${this.age}`);
  }
}

class tea extends people {
  gonghao: number;
  constructor(name: string, age: number, gonghao: number) {
    super(name, age);
    this.gonghao = gonghao;
  }
  print() {
    super.print();
    console.log(`我的教师工号是${this.gonghao}`);
  }
}

class stu extends people {
  jiaoshi: string;
  constructor(name: string, age: number, jiaoshi: string) {
    super(name, age);
    this.jiaoshi = jiaoshi;
  }
  print() {
    super.print();
    console.log(`我来自${this.jiaoshi}`);
  }
}

let mm = new tea("赵艳芳", 20, 11000);
let xiaoming = new stu("小明", 19, "99班");
mm.print();
xiaoming.print();

// 默认公共， 私有， 保护 readonly修饰符

class k {
  name: string;
  private age: number;
  readonly habby: string;
  constructor(name: string, age: number, habby: string) {
    this.name = name;
    this.age = age;
    this.habby = habby;
  }
}
// new k('曹', 19).age 报错
// new k('曹', 19, '哈哈').habby = 'aaa' 报错

// 参数赋值

class niubidlail {
  constructor(public name: string) {}
}

console.log(new niubidlail("大爷").name);

// 存取器
class getSet {
  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    if (name === "123456") {
      this._name = name;
    } else {
      console.error("密码错误");
    }
  }
}

let name = new getSet();
name.name = "123456";
console.log(name.name);
new getSet().name = "niub";

// 静态属性

class staticClass {
  static mmp = "好一个静态属性";
}
console.log(staticClass.mmp);

// 抽象类   只定义属性和方法类型，具体实现在派生类

abstract class wo {
  constructor(public name: string) {}
  abstract print(): void; // 只声明不实现
}

class woSon extends wo {
  constructor() {
    super("哇哈哈哈");
  }
  print() {
    console.log(this.name);
  }
}
console.log(new woSon().print());
