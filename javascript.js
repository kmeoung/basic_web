const body = document.querySelector('body'),
    btnDay = document.querySelector('#jsBtnDay'),
    btnNight = document.querySelector('#jsBtnNight');

function main(){
    btnNight.addEventListener('click',() => {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    });

    btnDay.addEventListener('click', () => {
        body.style.backgroundColor = 'antiquewhite';
        body.style.color = 'black';
    });
}

main();