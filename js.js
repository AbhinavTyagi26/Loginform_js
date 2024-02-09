let x = JSON.parse(localStorage.getItem("data"));
let data = [];
let newData = {};
let a = document.getElementById("linkid");
let loginPage = document.getElementById("loginPage");
let signUpPage = document.getElementById("signUpPage");
let submitbtn = document.getElementById("btn");
let signUpInputs = document.querySelectorAll("#signUpPage input");
let loginInputs = document.querySelectorAll("#loginPage input");
let forgetpas = document.getElementById("forgetpas");
let wrapper = document.getElementById("wrapper");
let forgetPasDiv = document.getElementById("forgetPasDiv");
let cancelbtn = document.getElementById("cancelbtn");
let okbtn = document.getElementById("okbtn");
let resetPass = document.getElementsByClassName("resetPass");

forgetpas.addEventListener("click", () => {

  wrapper.classList.toggle("hide");
  forgetPasDiv.classList.toggle("hide");
})
cancelbtn.addEventListener("click", () => {
  wrapper.classList.toggle("hide");
  forgetPasDiv.classList.toggle("hide");
})

a.addEventListener("click", (e) => {
  e.preventDefault();
  loginPage.classList.toggle("hide");
  signUpPage.classList.toggle("hide");
})

submitbtn.addEventListener("click", () => {
  if (x == null) {
    x = data;
  }
  if (!signUpPage.classList.contains("hide")) {
    for (let i = 0; i < signUpInputs.length; i++) {
      if (signUpInputs[i].value === "") {
        return alert("Please fill all details");
      }
    }
    for (let i = 0; i < x.length; i++) {
      if (x[i].uniqueId == signUpInputs[1].value) {
        return alert("Please fill different Email or PhoneNo")
      }
    }
    newData = {
      username: signUpInputs[0].value,
      uniqueId: signUpInputs[1].value,
      password: signUpInputs[2].value
    }
    x.push(newData);
    let userData = JSON.stringify(x);
    console.log(userData);
    localStorage.setItem("data", userData);
    alert("SignUp Successful");
    for (let i = 0; i < 3; i++) {
      signUpInputs[i].value = "";
    }
  } else {
    for (let i = 0; i < x.length; i++) {
      if (loginInputs[0].value == x[i].uniqueId && x[i].password == loginInputs[1].value) {
        for(let i=0;i<2;i++){
          loginInputs[i].value = "";
        }
        return alert("Login Successful")
      }
    }
    alert("please check your login details");
  }
});
okbtn.addEventListener("click", () => {
  for (let i = 0; i < resetPass.length; i++) {
    if (resetPass[i].value == "") {
      return alert('Please fill all details');
    }
    if (resetPass[1].value !== resetPass[2].value) {
      return alert("Please recheck both Passwords")
    }
  }
  for (let i = 0; i < x.length; i++) {
    if (resetPass[0].value == x[i].uniqueId) {
      x[i].password = resetPass[1].value;
      x = JSON.stringify(x);
      localStorage.setItem("data", x);
    }
  }
  for(let i=0;i<3;i++){
    resetPass[i].value = "";
  }
  alert("Password changed successfully. Please refresh page")
  wrapper.classList.toggle("hide");
  forgetPasDiv.classList.toggle("hide");
});
