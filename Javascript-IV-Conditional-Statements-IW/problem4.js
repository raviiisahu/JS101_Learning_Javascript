// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.


let user$name = "Ravisahu";
let user$pass = 01010;

let curr$name = "Ravisahu";
let curr$pass = 01069;

if(user$name == curr$name){
  if(user$pass == curr$pass){
    console.log("You can login")
  }
  else{
    console.log("Password is worng")
  }
}
else{
  console.log("user name wrong");
}