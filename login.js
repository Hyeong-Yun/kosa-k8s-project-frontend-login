const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signInBtn');
const container = document.getElementById('container');
const username = document.getElementById("username");
const password = document.getElementById("password");

// signUpButton.addEventListener('click', () => {
// 	container.classList.add("right-panel-active");
// });




function onSignIn() {

     // singIn post Url
    //  const geturl = "http://a876cfdd49d8a48c5b314d85b5c6f2ff-2070479410.ap-northeast-2.elb.amazonaws.com:5000/tweets";

    //  // JSON 데이터를 서버로 전송하는 fetch 요청
    //  fetch(geturl, {
    //    method: "GET",
    //    headers: {
    //      "Content-Type": "application/json"
    //    },
    // //    body: JSON.stringify(user)
    //  })
    //  .then(response => response.text())
    //  .then(result => console.log(result))
    //    .catch(function(error) {
    //      console.error("Error sending user data:", error);
    //    });

    console.log(typeof(username.value))
    console.log(password.value)

    let user = {
        "username": username.value,
        "password": password.value
    }
    
    // singIn post Url
    const url = "http://a876cfdd49d8a48c5b314d85b5c6f2ff-2070479410.ap-northeast-2.elb.amazonaws.com:5000/auth/login";

    // JSON 데이터를 서버로 전송하는 fetch 요청
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(result => {
        console.log(result)
        window.localStorage.setItem("token", result.slice(10, 166))
        console.log(window.localStorage.getItem("token"))
    })
      .catch(function(error) {
        console.error("Error sending user data:", error);
      });

    }

    signInButton.addEventListener('click', onSignIn);