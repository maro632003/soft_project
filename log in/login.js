let user = document.getElementById("user");
let pass = document.getElementById("pass");
document.getElementById("button").onclick = function () {
  user = user.value;
  pass = pass.value;
  let add = ["kerolos"];
  let add_pass = ["kero1234"];
  if (add.includes(`${user}`) && add_pass.includes(`${pass}`)) {
    window.location.href = "admin_jobs.html";
  } else {
    window.alert("pass is invlaid");
    window.location.href = "login.html";
  }
};
