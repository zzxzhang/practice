/**
 * --- 问题描述 ---
 *
 * 算出两个数组的补集，数组只包含字符串和数字
 *
 * --- 说明 ---
 *
 * - 补集：如果 b 是 a 的子集，返回存在于 a 不存在于 b 的元素集合，反之返回空集合
 */

const calc = (a, b) => {
  const lenB = b.length;
  const lenA = a.length;
  const strB = b.join("");

  for (let i = 0; i < a.length; i++) {
    if (lenA - i < lenB) return [];

    if (strB === a.slice(i, i + lenB).join("")) {
      a.splice(i, lenB);
      return a;
    }
  }
};

function findComplementarySet(a, b) {
  // TODO
  let sa = new Set(a);
  let sb = new Set(b);
  let res = [...a.filter((x) => !sb.has(x)), ...b.filter((x) => !sa.has(x))];
  if (res.length === a.length + b.length) {
    return [];
  } else {
    return res.sort();
  }
}

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = [2, 3, 4, 6, 9];
// const r = calc(a, b);
// const r = findComplementarySet(a, b);
// console.log(r);

const generator = (fun, arr) => {
  return function () {
    const args = [];
    arr.forEach((v, i) => {
      args[v] = arguments[i];
    });
    return fun.apply(null, args);
  };
};

function fun(...args) {
  console.log(args);
}

const f = generator(fun, [0, 3, 2, 1]);

// f(1,2,3,4);

/**
 * --- 问题描述 ---
 *
 * 给出一组异步任务方法，和允许同时执行的个数，实现一个方法，用于并发执行异步任务
 *
 * --- 说明 ---
 *
 * - 当有任务执行完毕后，自动补充任务，始终保持正在执行的任务有 `concurrency` 个
 * - 返回 { resolved: [], rejected: [] }
 *
 */

async function parallel(tasks, concurrency) {
  const cache = tasks;
  const resolved = [];
  const rejected = [];
  let counter = 1;

  async function run() {
    for (let i = 0; i < cache.length; i++) {
      if (counter > concurrency) break;
      counter++;

      const task = cache.shift();
      try {
        const r = await task();
        resolved.push(1);
      } catch (e) {
        rejected.push(0);
        // console.error(e);
      } finally {
        counter--;
        await run();
      }
    }
  }

  await run();
  return {
    resolved,
    rejected,
  };
}

/*******测试部分*******/
async function doTest() {
  try {
    const child_process = require("child_process");
    const fs = require("fs");
    const path = require("path");
    const util = require("util");
    const readFile = util.promisify(fs.readFile);
    const exec = util.promisify(child_process.exec);

    const tasks = [
      () => readFile(__filename, "utf-8"),
      () => Promise.resolve("foo"),
      () => exec("npm -v"),
      () => readFile(path.join(__dirname, "../package.json"), "utf-8"),
      () => process.cpuUsage(),
      () => exec("node -v"),
      () => Promise.reject(new Error("bar")),
      () => exec("ls -al"),
      () => new Promise((resolve) => process.nextTick(resolve)),
      () => exec("whoami"),
    ];
    const { resolved, rejected } = await parallel(tasks, 3);
    assert.equal(resolved.length, 9);
    assert.equal(rejected.length, 1);
    return "通过";
  } catch (err) {
    return "不通过";
  }
}

// (async () => {
//   const ret = await doTest();
//   console.log(ret);
// })();


/**
 * --- 问题描述 ---
 *
 * 重新排列一个字符串，使得每个相邻字符都不同，列出所有情况
 *
 * --- 说明 ---
 *
 * - 字符串只包含小写字母或者数字
 */



var length = 10;
function fn() {
    var length = 20;
    console.log(this.length);
}
 
fn();
console.log(length)