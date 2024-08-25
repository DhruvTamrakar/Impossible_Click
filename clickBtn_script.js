const getStart = document.getElementById("getStart");
       
getStart.addEventListener("mouseover", function()
{
    let randomNumberLeft = Math.floor(Math.random(10,80) * 100) + "vh";
    let randomNumbertop = Math.floor(Math.random(10,45) * 100) + "vh";
    getStart.style.left = randomNumberLeft;
    getStart.style.top = randomNumbertop;
    getStart.style.right = randomNumber;
    getStart.style.bottom = randomNumbertop;
    console.log(randomNumber)
})