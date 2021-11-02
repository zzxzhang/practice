let pro = null;

const p = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("5s");
    }, 5000);
  });
};

const init = async () => {
  pro =  p();
  // console.log('pro', pro);
};

const test = async () => {
  const s = await pro;
  console.log("pro", pro);

  console.log(s);
};

init();
test();
