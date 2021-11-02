/**
 * 实现Object.create
 */

const create = (prototype) => {
  function creater() {}

  creater.prototype = prototype;

  return new creater();
};

const p = {
  ss: "ddd",
};

const b = create(p);

// console.log(b.ss);

/**
 * 手写 instanceof 方法;
 * @param {*} left
 * @param {*} right
 * @returns
 */

const instance = (left, right) => {
  let ret = false;
  const prototype = right.prototype;
  function getProto() {
    pro = Object.getPrototypeOf(left);

    return pro;
  }

  while (true) {
    const pro = getProto();
    console.log("pro", pro);

    if (pro === prototype) {
      ret = true;
      break;
    }

    if (!pro || pro === Object) break;
  }

  return ret;
};

console.log(instance(3, Number));

/**
 * 手写 new
 */

function newOp(constructor, ...args) {
  if (typeof constructor !== "function") {
    console.error("构造函数非法");
    return;
  }

  // 1. 继承原型
  // 2. 判断函数返回值， 如果函数返回值为对象 数组 函数，则new的结果为返回值，否则使用传入的对象
  const target = Object.create(fun.prototype);
  ret = fun.apply(target, args);
  if (typeof ret === "object" || typeof ret === "function") return ret;
  return target;
}

function test() {
  this.a = "a";
  this.b = "b";
  return {};
}

// const obj = newOp(test);
// console.log(obj);

/**
 * 手写 Promise
 */

function promiseOp(executor) {
  this.resolve = () => {};
  this.reject = () => {};

  const getResolve = () => {
    return this.resolve();
  };

  const getreject = () => {
    return this.reject();
  };
  this.name = "pop";
  executor(getResolve, getreject);
}

promiseOp.prototype.then = function (resolve) {
  this.resolve = () => {
    resolve();
    if (this.finally) {
      this.finally();
    }
  };
  console.log(this);
  return this;
};

promiseOp.prototype.catch = function (reject) {
  this.reject = () => {
    reject();
    if (this.finally) {
      this.finally();
    }
  };

  return this;
};

promiseOp.prototype.finally = function (final) {
  this.finally = final;
  return this;
};

const myPromise = new promiseOp((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 5000);
  console.log("in");
});

myPromise
  .then((r) => {
    console.log("resolved", r);
  })
  .catch((e) => {
    console.log("rejected", e);
  })
  .finally(() => {
    console.log("finally");
  });
