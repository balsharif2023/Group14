import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  ActionCodeSettings,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

/*
const firebaseAdminServiceAccount = require("./serviceAccountKey.json");
const firebaseAdmin = require('firebase-admin');
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseAdminServiceAccount)
});

const actionCodeSettings = {
  url: 'https://financial-insights.glitch.me/signin.html',
};
const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({ authorizationToken: "pk_prod_C9G32R67HG4D3JKFEPNWWR3PW8KM" });
*/

const firebaseConfig = {
  apiKey: "AIzaSyCSTmzYfSzvHu-yavkMfaHzV0R35JVtlzA",
  authDomain: "financial-insight-975c5.firebaseapp.com",
  projectId: "financial-insight-975c5",
  storageBucket: "financial-insight-975c5.appspot.com",
  messagingSenderId: "657911226160",
  appId: "1:657911226160:web:5af2bb58f42608247c72f5",
  measurementId: "G-DSPHXPQ336",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
const resetpasswordbutton = document.getElementById("reset");
const reset = document.getElementById("reset-password");

const resetpassword = document.getElementById("email-reset");
const resetbutton = document.getElementById("reset-bttn");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");
const returnBtn2 = document.getElementById("return-btn2");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword,
  resetPasswordEmail,
  companyName;

//on createacct page
createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
      });
  }
});

//reset password
resetbutton.addEventListener("click", function () {
  const firebaseAdmin = require("firebase-admin");
  const firebaseAdminServiceAccount = require("src/login/serviceAccountKey.json");

  const { CourierClient } = require("@trycourier/courier");
  const courier = CourierClient({ authorizationToken: "pk_prod_C9G32R67HG4D3JKFEPNWWR3PW8KM" });

  resetPasswordEmail = resetpassword.value;
  companyName = "Financial Insights";

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseAdminServiceAccount),
  });

  firebaseAdmin
    .auth()
    .generatePasswordResetLink(email)
    .then(async (link) => {
      return await sendResetEmail(
        email,
        name,
        JSON.stringify(link),
        companyName
      );
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

  const sendResetEmail = async (email, name, link, companyName) => {
    return await courier.send({
      message: {
        template: "AECHDSTFTVMCXSKKGYNT4F65ED5Q",
        to: {
          email: resetPasswordEmail,
        },
        routing: {
          method: "single",
          channels: ["email"],
        },
        data: {
          passwordResetLink: link,
          companyName: companyName,
        },
      },
    });
  };
});
/*
const sendResetEmail = async (email, name, link, companyName) => {
  return await courier.send({
    message: {
          template: "AECHDSTFTVMCXSKKGYNT4F65ED5Q",
              to: {
                email: email
          },
          routing: {
                method: "single",
                channels: ["email"]
          },
          data: {
              userName: name,
                passwordResetLink: link,
              companyName:companyName
          }
    },
  });
}

resetbutton.addEventListener("click", function () {
  resetPasswordEmail = resetpassword.value;
  app.sendPasswordResetEmail(resetPasswordEmail)
    .then(() => {
      console.log("email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    }); 
// Admin SDK API to generate the email verification link.
// Admin SDK API to generate the password reset link.
  firebaseAdmin.auth().generatePasswordResetLink(email)
    .then(async (link) => {
          return await sendResetEmail(email, name, JSON.stringify(link), companyName)
    })
    .catch((error) => {
          console.log('Error fetching user data:', error);
    });

});
*/
//submit button on main

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
  reset.style.display = "none";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
  reset.style.display = "none";
});

//reset button on main
resetpasswordbutton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "none";
  reset.style.display = "block";
});

returnBtn2.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
  reset.style.display = "none";
});
