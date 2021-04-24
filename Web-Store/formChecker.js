let form = document.querySelector("form");
let submission = (event) => {

  // apples input
  let appleQuantity = document.getElementById("apples").value;
  let errorParagraphLength = document.querySelectorAll(".appleDiv .error").length;
  if (appleQuantity == "" || appleQuantity < 0 || isNaN(appleQuantity)) {
    event.preventDefault();
    if (errorParagraphLength == 0) {
      document.querySelector(".appleDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  } else if (errorParagraphLength > 0) {
      document.querySelector(".appleDiv .error").innerHTML = "";
  }


  // bananas input
  let bananaQuantity = document.getElementById("bananas").value;
  errorParagraphLength = document.querySelectorAll(".bananaDiv .error").length;
  if (bananaQuantity == "" || bananaQuantity < 0 || isNaN(bananaQuantity)) {
    event.preventDefault();
    if (errorParagraphLength == 0) {
      document.querySelector(".bananaDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  } else if (errorParagraphLength > 0) {
    document.querySelector(".bananaDiv .error").innerHTML = "";
  }

  // pear input
  let pearQuantity = document.getElementById("pears").value;
  errorParagraphLength = document.querySelectorAll(".pearDiv .error").length;
  if (pearQuantity == "" || pearQuantity < 0 || isNaN(pearQuantity)) {
    event.preventDefault();
    if (errorParagraphLength == 0) {
      document.querySelector(".pearDiv").innerHTML += "<p class='error'>Please give a positive numerical quantity</p>";
    }
  } else if (errorParagraphLength > 0) {
    document.querySelector(".pearDiv .error").innerHTML = "";
  }

  // username validation
  let username = document.getElementById("username").value;
  errorParagraphLength = document.querySelectorAll(".userDiv .error").length;
    // regular expression from Stack Overflow Post : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(username))) {
      event.preventDefault();
      if (errorParagraphLength == 0) {
        document.querySelector(".userDiv").innerHTML += "<p class='error'>Please specify a valid email address</p>";
      }
    } else if (errorParagraphLength > 0) {
      document.querySelector(".userDiv .error").innerHTML = "";
    }

    // password validation
    let password = document.getElementById("password").value;
    errorParagraphLength = document.querySelectorAll(".passDiv .error").length;
    if (password == "") {
      event.preventDefault();
      if (errorParagraphLength == 0) {
        document.querySelector(".passDiv").innerHTML += "<p class='error'>The Password field cannot be left blank.</p>";
      }
    } else if (errorParagraphLength > 0) {
      document.querySelector(".passDiv .error").innerHTML = "";
    }

    // shipping validation
    let shippingOptions = document.querySelectorAll("input[name='shipping']");
    errorParagraphLength = document.querySelectorAll(".shippingOptions .error").length;
    let isChecked = 0;

    for (let i = 0; i < shippingOptions.length; i++) {
      if (shippingOptions[i].checked) {
        isChecked++;
      }
    }
    if (isChecked == 0) {
      event.preventDefault();
      if (errorParagraphLength == 0) {
        document.querySelector(".shippingOptions").innerHTML += "<p class='error'>Please specify a shipping preference.</p>";
      }
    } else if (errorParagraphLength > 0) {
      document.querySelector(".shippingOptions .error").innerHTML = "";
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
