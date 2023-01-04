// for selection: id, class, tag, query

let element = document.getElementById("txtName");//returning a single element

let elements = document.getElementsByClassName("mb-3");//returning a collection of elements

let li = document.getElementsByTagName("li");//returning a collection of elements

let p = document.querySelectorAll(".container");//returning a collecton of elements

// create a button, when the user click on it hide all the inputs. (use a function)

function hide(){
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].style.display="none";
    }
}