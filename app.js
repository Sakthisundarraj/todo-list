// var te=document.getElementById("result")

//  function add()
//  {
//     var listitem = document.createElement("h1")
//     listitem.textContent="Hello"
//     te.append(listitem)
//  }

function addorder() {

    var result = document.getElementById("menu").value

    if (result == '') {
        alert("Enter a Item ")
    }
    else {

        var print = document.getElementById("print")
        var list = document.createElement("li")
        list.textContent = result

        // var btn = document.createElement("button")
        // btn.textContent = "clear"

        print.appendChild(list)
        document.querySelector("#menu").value = ""

    }

    // print.appendChild(btn)
    // var btn=document.getElementById("btn")
    // btn.appendChild(btn)
    // btn.addEventListener("click",function ex(){

    //     // document.getElementById("print").textContent=""
    //     var a = document.getElementById("print")
    //     a.removeChild(a.firstElementChild)
    // }
    // )

}

function remove() {
    var a = document.getElementById("print")
    a.removeChild(a.lastElementChild)
}

// function re() {
//     // document.querySelector("#menu").value=""
//     document.getElementById("print").textContent = ""
// }



