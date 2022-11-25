//FirstChild, LastChild & ChildNodes
console.log(document.body.firstChild)       //First child Element
console.log(document.body.lastChild)        //Last child Element
console.log(document.body.childNodes)       //All child Nodes

/*Following is always true*/
elem.childNodes[0] === elem.firstChild      //elem.childNodes will access all the child nodes and elem.firstChild will access only the first child.
elem.childNodes[elem.ChildNodes.length-1] === elem.lastChild

//Child Nodes looks like an array but its not an array.
//You can do the following method to convert the node list to array
let arr = Array.from(document.body.childNodes)
console.log(arr)