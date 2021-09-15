function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

function hoverShadow(element_id) {
    let elem = document.getElementById(element_id);
    elem.addEventListener("mouseenter", function(event){
        event.target.style.boxShadow = "0 1px 6px rgba(32,33,36,0.28)"
    },false)

    elem.addEventListener("mouseleave", function(event){
        event.target.style.boxShadow = "none"
    },false)
}

hoverShadow('querybox');