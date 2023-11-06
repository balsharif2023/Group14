var objPeople = [
	{
		username: "test_user",
		password: "password"
	},
	{
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href="index.html"
			return
		}
	}
	console.log("incorrect username or password")
}