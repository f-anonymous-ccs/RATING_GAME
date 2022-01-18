var girls = ["insiyah","tisha","tisya","laiba"]
var boys = ["murtaza","preet","ayaan","abdaara","adnana"] 

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  //function for first
  function nm1change() {
    var nm
    var l = boys.length;
    var num = randomIntFromInterval(0,(l-1))
    nm = boys[num]
    document.getElementById("nm1").textContent = nm
    }
    //function for second     
function nm2change() {
    var nm
    var l = girls.length
    var num = randomIntFromInterval(0,(l-1))
    nm = girls[num]
    document.getElementById("nm2").textContent = nm
}
