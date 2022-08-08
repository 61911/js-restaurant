user = {
  email: "admin@testing.com",
  password: "testing@321",
};
localStorage.setItem("user", JSON.stringify(user));

function login(email, password) {
  var localUser = localStorage.getItem("user");
  var localUserObject = JSON.parse(localUser);
  if (
    email == localUserObject["email"] &&
    password == localUserObject["password"]
  ) {
    console.log("login sucess");
    location.replace("http://127.0.0.1:5500/admin.html");
  } else {
    alert("Pleae enter correct email and password");
  }
}
