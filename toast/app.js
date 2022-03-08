

/*
This funciton creates a toast with given params
*/
function Toast( message, time, toastType = null) {
    let div = document.createElement("div")
    let msg = document.createElement("p")


// userPreferance
let toastBG,toastContent
switch (toastType) {
    case "warning":
        toastBG = "yellow"
        toastContent = "black"
        break;
    case "danger":
        toastBG = "red"
        toastContent = "white"
        break; 
    default:
        toastBG = "rgb(46, 150, 46)"
        toastContent = "white"
        break;
}
    // Toast style
    div.style.width = "inherit"
    div.style.borderRadius = "5px 0 0 5px"
    div.style.position = "absolute"
    div.style.top = "10vh"
    div.style.right = "0"
    div.style.padding = "8px 14px 8px 14px"
    div.style.backgroundColor = toastBG
    div.style.color = toastContent
    div.style.boxShadow = "-1px 3px 8px -3px #0000006e"


    div.appendChild(msg)
    msg.innerText = message
    document.body.appendChild(div)



    setInterval(() => {
        div.remove()
    }, time);
}





Toast()