document.getElementById("btn1").onclick = function (){

    alert ("WELCOME TO USER")
}
 
document.getElementById("btn2").onclick = function (){

    let marks = prompt ("Enter your Marks")
    if (marks>=90){
        alert ("Your Grade A+")
    }
     else  if (marks >= 70) {
        alert ("your grade B")

    }

    else if  (marks >= 50) 
    {

        alert ("you are pass")
    }
    else if (!marks)  {
        alert ("enter marks plase")
    }
    else {
        alert ("Your grade F")
    }
}
 