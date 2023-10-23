function CalcularPropina(){
    //Declaración de Variables
        const TotalCuenta = Number(document.getElementById('TotalCuenta').value);
        const porcentaje = Number(document.getElementById('porcentaje').value);
        const Mostrar = document.getElementById("resultado");
    //Operaciones

        const totalp = (TotalCuenta*porcentaje)/100;
        const total = TotalCuenta+totalp;
    //Mostrar

    Mostrar.textContent = `El total de la cuenta es: $ ${TotalCuenta} -- Propina: $ ${totalp} -- Valor total a pagar: $ ${total}`
}