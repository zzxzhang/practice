function test(i) {
  switch (i) {
    case "1":
      console.log("string");
      break;

    case 1:
      console.log("number");
      break;

    default:
      break;
  }

  
}

test(1);
