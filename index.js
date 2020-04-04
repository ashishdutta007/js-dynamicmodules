const button = document.createElement("button");
button.innerHTML = "MIDAS BUTTON";
document.body.append(button);

button.onclick = e => {
  e.preventDefault();
  import("./module").then(module => {
    setTimeout(() => {
      button.innerHTML = "MIDAS BUTTON";
      const print = module.myFunc;
      const def = module.default;
      print();
      def();
    }, 1000);
  });
  button.innerHTML = "Loading Dynamic Module...";
};

// const importWrapper = () => import("./module");
// console.log(typeof importWrapper);
// console.log(importWrapper);
// console.log(typeof importWrapper());
// importWrapper().then(module => {
//   setTimeout(() => console.log("TOP feeling"), 1000);
// });
