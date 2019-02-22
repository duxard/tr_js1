/*

const defer = (f, ms) => {
    let args = ms;
    return () => {
        return setTimeout(() => f.call(obj, args), ms);
    }
};

function defer(f, ms) {
    return function() {
        setTimeout(() => f.call(this, arguments), ms)
    }
}

let fd = defer(obj.getUser.bind(obj), 1000);
fd();
    */


//function f() {
//    cl(this.name);
//}
//
//f = f
//    .bind( {name: "Вася"} )
//    .bind( {name: "Петя" } );
//
//f();

window.onload = function(){
    document.getElementById("box").addEventListener('click', e => {
        cl(`e.target: ${e.target}`);
        cl(e.currentTarget);
    });

    let inputState = false;
    const ul = document.getElementById("list"),
          search = document.forms[0].querySelector('input[type="text"]');

    ul.addEventListener('click', e => {
        if(e.target.tagName === "SPAN" && e.target.classList.contains("delete")){
            ul.removeChild(e.target.parentNode);
        }
    });

    const textField = document.forms[1].querySelector('input[type="text"');

    document.forms[1].querySelector('input[type="submit"').addEventListener('click', e => {
        e.preventDefault();

        let li = null,
            span = null,
            text = null;

        if(textField.value.trim() !== ""){
            li = document.createElement("li");
            span = document.createElement("span");
            span.setAttribute("class", "delete");
            span.innerText = "Delete";
            text = document.createTextNode(textField.value);
            li.appendChild(text);
            li.appendChild(span);
            ul.appendChild(li);
        }

        textField.value = "";
    });

    search.addEventListener('keyup', e => {
        if(search.value){
            cl(inputState = true);
        }else{
            cl(inputState = false)
        }

        

    });


};


