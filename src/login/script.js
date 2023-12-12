import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseAdmin = require("firebase-admin");
const firebaseAdminServiceAccount = {
  type: "service_account",
  project_id: "financial-insight-975c5",
  private_key_id: "33b4f41b61bc95abb23ac48e0d61d1430d766ff9",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2r4kqZkmk1Kkh\na48B5zKWhAEgnlNqPvfmXob3f3W9ohHorI2REnZPKcwnAMNlfqRjdtPFOPb8n8Kn\nrENS/zPzMJtiQuj5xduij7XB7yODUmEkyUBSJwREe2UVW6XR1qfttYNAsLj5RuD3\n13yeHFQInDggQA/MoYPt2iNbwd8o2W8xg2DxRfEkBH2eslslThFoVQCMACIMdKq1\n4+khhJknVc0TnxciS25RYMgUaQjRV1Gjho1vr+3ShnoYz6uXQ7Apssd+sWNNSEge\nnOPMgPYFU8gVA3/u1G+IIxkL+zkkJIYlMG4cn4stNmKI/0Y/wYDGvUncqML+SVfg\nJM9md9BlAgMBAAECggEAKmFLdUoYcIQjHk0o9lyPqEpERrBkEoQ8FzW7osPvaQgl\nlnAdQVfimVfNdAjhy3RXJ3nkA99EsPNRAXvdfG4Wu6Z9jYyPJo6Hds1W8YAMIYVl\nYtbLNKO3gjmMCCnkLGtbNrKCmenFZ5LRUr2rO7S/q+WtwZGK+MJJbE7MIBe4MO3n\naqVWalRUevthu9FxFZnGT8y25ZHt3VecSM+gd2FzECUuq/Y3MXhAkCatK14kZrsN\nR+KyxVjnRNsZBJdU80r37XSf0wp4a40wutz2rWEKbmtDgdWa6URQy9fYADqtRk31\nnEeU9R4s6Gxl9gZAGVm2WLJkYgQfQGBW/fhNV5s5KwKBgQDt0AvjMKgyWRs07i7r\n43wM6qILMF3/hYtnRKu45VGO6BNeS4iMERc5n87GAM2mRmIrfix9rohj+I9dkVpC\nCnascmPMhNfbzUJkpyS41s3SQsISJh2Mr9yW+Gds7r8EdET3TrCSpRkLo54+D/HJ\nxjU2vzj+S2LhnODhvhbuQQZ+iwKBgQDEqDMrSMy11n1n/QgjaJnn1up80zrTNLlm\nDffR0rWUT4EXQzG51zbIEmUApywFUfG0lN8qQ/njWcUJY6nA1DAYaVi96MvKOshH\n+SEBCQSZCfoRHEz2WtK7wcpxK7aLPF4U80ohhNvo4DJS2uVkb8BXW7zR3MAP/0X4\ndtAaaiQ6zwKBgHuSLXsiH2P6FT8NvOfpzt3PVeBGg7FwrR09+5UZ46VERjwrN4rA\nnrbcqU8Nv850qDI9X9T2yfxYffZ6vtGuKjg1QFJXfOrD34n5qAU76Lsm4T0Y/SXL\ng+4WqXdbH3qrB+MRyoKIs1ju7h0Fn/fevGv0NSM9/OWK5PeoFLY8p6k9AoGAfvBP\nby4jrXBRLJGA8lIvnh306DP0saZD0iNMBu1q9dvH6PsfmuTXYJe3CI/f82MskLLT\nxlVwdJdafzAMwAJ3NRqzBIrDGLuO0h52dlOa2yo8d1T8PLztb/KsORbNUtzZoc5U\n2IQI6y3kbeUL0yPrVLhLjm9erjTJtpMCyzoePrMCgYBVHSt5C7xIyM9nHshfNlip\nG9RwiBCVS0qDlX2MHwUUsTteWcx4wrQ2rNIHfQSdVeyDDZyVsAjVYtZuFWXkzUCJ\ntoGjc5VrnP0+9p/eUcfC/qOr0iwvUk3b1ItF3ouP5z7Atrvus4nvLYVkjPx7dgjY\n8TxaR1LHJe68EM9WYcIZ7A==\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-ujhcw@financial-insight-975c5.iam.gserviceaccount.com",
  client_id: "102230301158438699253",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ujhcw%40financial-insight-975c5.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const { CourierClient } = require("@trycourier/courier");
const courier = CourierClient({
  authorizationToken: "pk_prod_C9G32R67HG4D3JKFEPNWWR3PW8KM",
});

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
  resetPasswordEmail = resetpassword.value;

  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseAdminServiceAccount),
  });

  firebaseAdmin
    .auth()
    .generatePasswordResetLink(resetPasswordEmail)
    .then(async (link) => {
      return await sendResetEmail(resetPasswordEmail, JSON.stringify(link));
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });

  const sendResetEmail = async (resetPasswordEmail, link) => {
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
      window.location.href = "https://65777176294e9440bad967c4--musical-nasturtium-e6f447.netlify.app/";
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
