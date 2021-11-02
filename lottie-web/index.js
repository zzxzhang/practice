(async () => {
  const json = await System.import("./data.json");
  var animation = bodymovin.loadAnimation({
    container: document.querySelector("#lottie"), // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: json, // the path to the animation json
  });
})();
