//document.getElementById("click").onclick = changeColor();


document.addEventListener('DOMContentLoaded', function () { // DOMContentLoaded Will load after DOM loaded
    var el = document.getElementById("myBtn");
    el.addEventListener('click', changeColor)
    // var el = document.getElementById("btnAdd");
    // el.addEventListener('click', addToDoList)
})

function changeColor() {
    var bodyColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = bodyColor === 'red' ? 'green' : 'red';
    var btn = document.getElementById('myBtn');
    btn.className = 'buttonColor'
    // loadcss('test');
}

// function loadcss(url) {
//     var head = document.getElementsByTagName('head')[0];
//     var link = document.createElement('link');
//     link.type = 'text/css';
//     link.rel = 'stylesheet';
//     link.href = url;
//     head.appendChild(link);
// }


// if (el.addEventListener)
//     el.addEventListener("click", changeColor, false );
// else if (el.attachEvent) // Used for old browsers
//     el.attachEvent('onclick', changeColor);

// function changeColor() {
//     if ( document.body.style.backgroundColor == "red"){
//         document.body.style.backgroundColor = "green";        

//     }else{
//         document.body.style.backgroundColor = "Red";      
//     }         
// };

// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("myBtn").backgroundColor = "Red";
// });