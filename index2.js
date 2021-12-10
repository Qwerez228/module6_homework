

function Matfrut(){
    let numbercount = prompt('Введите число');
    let n = 1000;
    nextPrime:
    for (let i = 0; i < n; i++){
        if(n[i] > 1000){
            n = alert('Данные не верны');
        }
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
            alert('не простое число')
        }

        alert( i );
    }
}

Matfrut();