System.register(["lodash"], function (_export, _context) {
  "use strict";

  var _;

  async function main() {
    // const a = await System.import("./moduleA.js");
    // const b = await System.import("./moduleB.js");
    // console.log(a.a);
    // console.log(b.a);
    console.log(_);
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      main();

      _export("default", main);
    }
  };
});
//# sourceMappingURL=index.js.map