var heading1 = document.createElement("h1")
var content = document.createTextNode("Heading 1")
var body = document.body;
heading1.appendChild(content)
body.appendChild(heading1)

heading1.className = "My-Heading MyHeading2";
heading1.id = "myId";

body.style.backgroundColor = "red";
heading1.style.color = "yellow";





console.dir(heading1)




// var ele = {
//     style:{
//         backgroundImage : ""
//     }
// }


// console.log(ele.style.backgroundImage="red")
// console.log(ele)






