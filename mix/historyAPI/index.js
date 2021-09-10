window.onpopstate = function(e) {
   alert(2);
}

let stateObj = {
    foo: "bar",
};

const onClick = () => {
  history.pushState(null, "page 2", "bar1.html");
    setTimeout(() => {
      history.pushState(null, "page 2", "bar2.html");
    }, 3 * 1000)
}

setTimeout(() => {
  history.pushState(null, "page 2", "bar3.html");
}, 5 * 1000);


