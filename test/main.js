import videoJs from "video.js";
import Player from "xgplayer";
import "@hetao/xgplayer-mp4";
import "./.xgplayer/skin/index.js";

window.onerror = (message, source, lineno, colno, error) => {
  console.log("发现错误");
  // console.log(message);
  console.log(error);
};

// window.addEventListener("error", function (event) {
//   console.log("发现错误");
//   console.log(event);
// });

try {
  const player = new Player({
    id: "mse",
    // url: "https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
    url: "https://cdn.console.pipacoding.com/einstein/material/1e506533-75f7-4ba2-815c-484a75ee743130000557.mp4",
    // url: "https://lsiekfjfj.lllls.com/sss",
    // url: "https://vd4.bdstatic.com/mda-kafyehht8b7qwg46/sc/mda-kafyehht8b7qwg46.mp4?v_from_s=hkapp-haokan-tucheng&auth_key=1633681043-0-0-3d7eb492aebeceeaf0418e8ec3953559&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=",
  });

  player.on("error", function (err) {
    console.log("player error", JSON.stringify(err));
  });

  player.on("DATA_REPORT", function (err) {
    console.log("DATA_REPORT", JSON.stringify(err));
    if (err && err.type && err.type === "httperror") {
      console.log("httperror", "status:", err.responseStatus, "msg:", err.msg);
    }
  });

  window.addEventListener("offline", () => {
    console.log("断线了");
  });
} catch (e) {
  console.error(e);
}

// const video = document.querySelector("#vss");

// video.addEventListener("error", (event) => {
//   console.log("视频发现错误");
//   console.log(event);
//   console.log(video.error.code, video.error.message);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // const player = videoJs("vss");
//   // player.src({
//   //   src: "https://www.qq.com/v/oceans1.mp4",
//   //   type: "video/mp4",
//   // });
//   // // player.load();
//   // console.log(player.src);
// });
