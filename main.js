$(document).ready(function () {
    $('body').hide(1000)
    $('body').show(3000)
    })
let name = prompt("Enter your name:")
let main = document.getElementById("main");
let p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    main.innerHTML = "Hacking Device of " + name + "........" + "<br><br>";
  }, 4000);
  resolve(true);
});
p.then(function () {
  setTimeout(() => {
    let div = document.createElement("div");
    div.innerHTML = "Traced Device  +91 xxxxxxxxxx" + "<br><br>";
    main.append(div);
  }, 5500);
})
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Social Media Detected....." + "<br><br>";
      main.append(div);
    }, 5900);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Downloading Data of Social Media....." + "<br><br>";
      main.append(div);
    }, 6500);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Fetching Details From Server....." + "<br><br>";
      main.append(div);
    }, 8500);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Device's File Access Permision Granted" + "<br><br>";
      main.append(div);
    }, 9700);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Transfering Data Of Device To Server...." + "<br><br>";
      main.append(div);
    }, 10000);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Virus Exported in Device..." + "<br><br>";
      main.append(div);
    },11500);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Virus Activated..." + "<br><br>";
      main.append(div);
    }, 12900);
  })
  .then(function () {
    setTimeout(() => {
      let div = document.createElement("div");
      div.innerHTML = "Congratulations! Your Device is Under SPY" + "<br><br>";
      main.append(div);
    }, 14000);
  })
  .then(function () {
    setTimeout(() => {
      $("body")
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250)
        .fadeOut(250)
        .fadeIn(250);
    }, 16000);
  });
