function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.getElementById("icon1").style.padding="5px 7px";
  document.getElementById("body").style.fontFamily="Hind Siliguri";
  var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
 document.getElementById("demo").innerHTML = dd+"/"+mm+"/"+yyyy ;


 setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("min").innerHTML = d.toLocaleTimeString();
}
