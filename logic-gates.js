// Para treinar portas lógicas
// Oresultado final deve ser true;

// Escreva false para 0 e true para 1;
const inputA = true
const inputB = false
const inputC = true
const inputD = true

// Ligações entre as portas lógicas;
// Cada constante g abaixo é um gate, portão, ou porta;
const g0 = or(inputA, inputB)
const g1 = end(inputC, inputD)
const g2 = end(g0, g1)
const g3 = end(g1, g2)
const g4 = or (g2, g3)
const g5 = not(g4)

// Exibe o resultado 
console.log(g5)


// Funções das portas lógicas;
function end(input1, input2) {
    return (input1 && input2);
}

function not(input){
    return (! input);
}

function or (input1, input2) {
    return (input1 || input2);
}