function tabMaker(tabName, closeFirstSection = false) {
    //prefix for controlling
    var containerName = tabName;

    // All classes included using the pefix
    var allClasses = [];

    // all elements in the webpage
    var allElements = document.querySelectorAll('*');
    
    //Storing all the used classes using the prefix including btns
    for (var i = 0; i < allElements.length; i++) {
        var classes = allElements[i].className.toString().split(/\s+/);
        for (var j = 0; j < classes.length; j++) {
            var cls = classes[j];
            if (cls && allClasses.indexOf(cls) === -1)
                if (!cls.search(containerName)) {
                    allClasses.push(cls);
                }
        }
    }

    var foundClasses = allClasses;


    // Storing only the tab container classes
    var tabContainerClass = [];
    //Storing only the button classes
    var tabBtnClass = [];


    // query and separate classnames container - buttons
    foundClasses.forEach(name => {
        if (name.search(containerName + "-btn")) {
            tabContainerClass.push(name)
        }
        else if (name.search(containerName + name.replace(containerName + "-btn-", ""))) {
            tabBtnClass.push(name)
        }
    });



    for (let i = 0; i < tabContainerClass.length; i++) {

        // if 2nd param is true the hide the first content 
        if (i != 0 || closeFirstSection != false) {
            let singleContainer = document.querySelector("." + tabContainerClass[i]);
            singleContainer.style.display = "none"
        }
    }

    // Each button takes actions
    tabBtnClass.forEach(btn => {

        // Adding event listener fucntion to all buttons
        document.querySelector(`.${btn}`).addEventListener("click", (e) => {
            // Hide all athe container first
            for (let i = 0; i < tabContainerClass.length; i++) {
                let singleContainer = document.querySelector("." + tabContainerClass[i]);
                singleContainer.style.display = "none"
                document.querySelector(`.${btn}`).classList.remove("active")
            }
            // Removing all active class from buttons
            for (let i = 0; i < tabBtnClass.length; i++) {
                document.querySelector("."+tabBtnClass[i]).classList.remove("active")
                console.log(tabBtnClass[i])
            }
            // Then find and select, then display the desired container 
            let targetContainerClass = btn.replace("-btn", "")
            let targetContainer = document.querySelector(`.${targetContainerClass}`); 
            targetContainer.style.display = "block"
            e.target.classList.add("active")
        })
    });




}

tabMaker("tab")
tabMaker("nav")

