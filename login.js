var loginmoney = localStorage.money
var usernametext = $("#username").val()

$("#username").keydown(function(e) {
  if (e.which == 13) {
    usernametext = $("#username").val()
  console.log(usernametext)
  }	
})



save.onclick=function(){
  console.log("saved")
  console.log(username)
storeValue(usernametext, loginmoney)
}

load.onclick=function(){

}


