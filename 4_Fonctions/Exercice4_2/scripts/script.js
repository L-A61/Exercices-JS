// Exercice 4.2: table de multiplication

function TableMultiplication(_x) {

    for (let i = 1; i <= 10; i++) {
       let f_Result = i * _x;
       console.log(i + " x " + _x + " = " + f_Result);
       
    }
}

TableMultiplication(5);