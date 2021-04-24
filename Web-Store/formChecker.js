let form = document.querySelector("form");
let submission = (event) => {

  // apples input
  let appleQuantity = document.getElementById("apples").value;
  if (appleQuantity == "" || appleQuantity < 0 || isNaN(appleQuantity)) {
    event.preventDefault();
    let errorParagraphLength = document.querySelectorAll(".appleDiv .error").length;
    if (errorParagraphLength == 0) {
      document.querySelector(".appleDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  }


  // bananas input
  let bananaQuantity = document.getElementById("bananas").value;
  if (bananaQuantity == "" || bananaQuantity < 0 || isNaN(bananaQuantity)) {
    event.preventDefault();
    let errorParagraphLength = document.querySelectorAll(".bananaDiv .error").length;
    if (errorParagraphLength == 0) {
      document.querySelector(".bananaDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  }

  // pear input
  let pearQuantity = document.getElementById("pears").value;
  if (pearQuantity == "" || pearQuantity < 0 || isNaN(pearQuantity)) {
    event.preventDefault();
    let errorParagraphLength = document.querySelectorAll(".pearDiv .error").length;
    if (errorParagraphLength == 0) {
      document.querySelector(".pearDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  }

  // username validation
  let username = document.getElementById("username").value;
    // regular expression from Stack Overflow Post : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(username))) {
      event.preventDefault();
      let errorParagraphLength = document.querySelectorAll(".userDiv .error").length;
      if (errorParagraphLength == 0) {
        document.querySelector(".userDiv").innerHTML += "<p class='error'>Please specify a valid email address</p>";
      }
    }

    // password validation
    let password = document.getElementById("password").value;
    if (password == "") {
      event.preventDefault();
      let errorParagraphLength = document.querySelectorAll(".passDiv .error").length;
      if (errorParagraphLength == 0) {
        document.querySelector(".passDiv").innerHTML += "<p class='error'>The Password field cannot be left blank.</p>";
      }
    }

    // shipping validation
    let shippingOptions = document.querySelectorAll("input[name='shipping']");
    let isChecked = 0;

    for (let i = 0; i < shippingOptions.length; i++) {
      if (shippingOptions[i].checked) {
        isChecked++;
      }
    }
    if (isChecked == 0) {
      event.preventDefault();
      let errorParagraphLength = document.querySelectorAll(".shippingOptions .error").length;
      if (errorParagraphLength == 0) {
        document.querySelector(".shippingOptions").innerHTML += "<p class='error'>Please specify a shipping preference.</p>";
      }
    }

};


form.onsubmit = submission;

// reset button
document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("apples").value = "";
  document.getElementById("bananas").value = "";
  document.getElementById("pears").value = "";

  let shippingOptions = document.querySelectorAll(".shippingOptions input");

  for (let i = 0; i < shippingOptions.length; i++) {
    shippingOptions[i].checked = false;
  }
});
