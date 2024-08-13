heading = document.querySelector("h1");

btn= document.querySelector("button");

div= document.querySelector(".colorbox");


btn.addEventListener("click", colorchange
);




function colorchange(){

   let red = Math.floor(Math.random()*255)+1;
   let  green = Math.floor(Math.random()*255)+1;
   let blue = Math.floor(Math.random()*255)+1;

   div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

   heading.innerText = `rgb(${red}, ${green}, ${blue})`;

}
function startAutoClick(interval) {
    setInterval(function() {
        btn.click();
    }, interval);
}

// Start auto-clicking every second (1000 milliseconds)
startAutoClick(1000);

