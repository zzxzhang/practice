/**
 * demo for proxy
 */

const origin = {
  a: 1,
  b: 2,
};

const handler = {
  get(target, property, receiver) {
    console.log("get property", property);
    return target[property];
  },
  set(target, property, value) {
    console.log("set property", property, value);
    target[property] = value;
  },
};

const p = new Proxy(origin, handler);

p.a = "a";
p.c = "c";
console.log(origin.a);
console.log(origin.c);
console.log(p.a);
console.log(p.c);
delete p.c;

/**
 * demo for defineProperty
 * defineProperty 针对对象的单一属性进行操作，并且只有setter/getter
 * setter实现是需要注意不能直接修改对象值否则会无限循环
 * 无法监听新增/删除等属性变化。
 */

const origin1 = {
  a: 1,
  b: 2,
};

Object.entries(origin1).forEach(([k]) => {
  let v = origin1[k];
  Object.defineProperty(origin1, k, {
    configurable: true,
    enumerable: true,
    get() {
      console.log("get property", k);
      return v;
    },
    set(nv) {
      console.log("set property", k, "value:", nv);
      v = nv;
    },
  });
});

origin1.a = "66";
origin1.b = "99";
origin.c = "c";
console.log("origin", origin1);
console.log(origin1.a);
console.log(origin1.b);
