/*
This funciton creates a toast with given params
*/
function Toast(message, time, toastType = null) {

    if (document.getElementById("toast_container")) {
        let div = document.getElementById("toast_container")
        let ul = document.getElementById("toast_list")
        let li = document.createElement("li")
        li.innerText = message
        ul.appendChild(li)
        div.appendChild(ul)

        applyStylre(div, li)

        setInterval(() => {
            div.remove()
        }, time)
    } else {
        let div = document.createElement("div")
        div.setAttribute("id", "toast_container")
        let ul = document.createElement("ul")
        ul.setAttribute("id", "toast_list")
        let li = document.createElement("li")
        li.innerText = message
        ul.appendChild(li)
        div.appendChild(ul)


        document.body.appendChild(div)


        applyStylre(div, li)
        setInterval(() => {
            div.remove()
        }, time)
    }



    function applyStylre(div, msgElem) {
        // userPreferance
        let toastBG, toastContent
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
        // Toast msg style 
        msgElem.style.backgroundColor = toastBG
        msgElem.style.color = toastContent
        msgElem.style.margin = "4px 0"
        msgElem.style.borderRadius = "5px"
        msgElem.style.width = "inherit"
        msgElem.style.padding = "8px 14px 8px 14px"
        // Toast container style

        div.style.position = "fixed"
        div.style.fontSize = "small"
        div.style.top = "10vh"
        div.style.letterSpacing = "2px"
        div.style.right = "10px"
        div.style.padding = "8px 14px 8px 14px"
        div.style.height = "90vh"
        div.style.overflowX = "scroll"
        div.style.scrollbarWidth = "none"
    }


}