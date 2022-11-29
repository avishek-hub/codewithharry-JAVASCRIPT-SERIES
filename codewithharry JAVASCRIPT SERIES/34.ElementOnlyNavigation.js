const changeBgRed = () => {     //CSS manupulation
    document.body.firstElementChild.style.background = "red"
}




let b = document.body
console.log("First child of b is", b.firstChild)        //You will get exactly what comes first. It can be the text node, comment node, element node.

//ELEMENT ONLY NAVIGATION//
console.log("First Element child of b is", b.firstElementChild)     //You will get first element Child. This is called element only navigations.