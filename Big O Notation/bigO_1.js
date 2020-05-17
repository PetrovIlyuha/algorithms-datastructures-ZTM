const nemo = ["nemo"];
const largeArray = new Array(100).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}
