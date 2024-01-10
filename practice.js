let firstin = document.getElementById("nameinput");
let but = document.getElementById("lll");
let whole = document.getElementById("rasa");
let second = document.getElementById("sk");
let thirdin = document.getElementById("signin");
let para = document.createElement("p")
let para1 = document.createElement("p")

thirdin.classList.add("oo")

but.onclick = function() {
    if (firstin.value === "" || second.value === "") {
        alert("Please Fill the blanks")

    } else {
        let f = firstin.value
        let s = second.value
        localStorage.setItem("om", f)
        localStorage.setItem("on", s)
        let sk = document.getElementById("okk")
        sk.textContent = firstin.value
        sk.style.color = "black"
        sk.style.marginLeft = "2px"
        sk.style.marginRight = "4px"
        sk.classList.add("llo")
        sk.style.fontSize = "20px"
        sk.style.fontWeight = "bold"
        thirdin.classList.remove("oo")
        para.textContent = ""
        para1.textContent = ""
        firstin.value = ""
        second.value = ""
        console.log(second.value)
    }
}

let abc = localStorage.getItem("om")
let abcd = localStorage.getItem("on")
if (abc === null || abcd === null) {
    para.textContent = ""
    para1.textContent = ""
} else {
    para.textContent = "Previous Name: " + abc
    para.style.textDecoration = "underline"
    para1.textContent = "Previous Password: " + abcd
    para1.style.textDecoration = "underline"
    whole.appendChild(para)
    whole.appendChild(para1)
}