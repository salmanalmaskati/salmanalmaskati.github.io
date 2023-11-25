function submit(){
    let workTime = document.getElementById("workT").value
    let breakTime = document.getElementById("breakT").value
    console.log(workTime)
    console.log(breakTime)
}
document.getElementById("submit").addEventListener("click", submit);


function startTimer() {
    console.log("I'm alive");
    document.body.style.backgroundColor="#FA5252"
    document.getElementById("header").innerHTML= 'WORK'
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    console.log('Hours:', hours);
    console.log('Minutes:', minutes);
    console.log('Seconds:', seconds);
}

document.getElementById("start").addEventListener("click", startTimer);

function stop(){
    document.getElementById("header").innerHTML= 'TIMER'
    document.body.style.backgroundColor="#274261"

}
document.getElementById("stop").addEventListener("click", stop);
