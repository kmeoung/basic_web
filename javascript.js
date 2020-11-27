const body = document.querySelector('body'),
    jsBtn = document.querySelector('#jsBtn');

function main(){
    jsBtn.addEventListener('click',() => {
        if(jsBtn.value === "Day"){
            jsBtn.value = "Night";
            body.style.backgroundColor = 'antiquewhite';
            body.style.color = 'black';
        }else if(jsBtn.value === "Night"){
            jsBtn.value = "Day";
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }
    });
}

main();