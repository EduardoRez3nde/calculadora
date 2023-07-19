function Calculadora() {

    this.display = document.querySelector('.display');
    // Metodo iniciar a calculadora
    this.inicia = () => {
        this.capturaCliques();
        this.pressEnter();
        this.display.focus();
    }
    // Metodo adiciona os numeros clicados na tela
    this.addNumDisplay = (element) => {
        this.display.value += element.innerText;
        this.display.focus()
    }

    // Função limpa o display
    this.clearDisplay = () => this.display.value = '';

    //Metodo limpa um unico elemento;
    this.clearOneDisplay = () => this.display.value = this.display.value.slice(0, -1);

    // Metodo verifica o resultado
    this.resultDisplay = () => {
        let calculo = this.display.value;
        try{
            calculo = eval(calculo);
            if(!calculo) {alert('Calculo Invalido!');return;}
            this.display.value = calculo;
        }
        
        catch(e) {alert('Conta Invalido!'); return;}
    }
    // Metodo captura os botoes clicados
    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const element = event.target; // referencia o botao que esta sendo clicado
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clearDisplay();
            if(element.classList.contains('btn-del')) this.clearOneDisplay();
            if(element.classList.contains('btn-eq')) this.resultDisplay();
        });
    }
    //Metodo usando o teclado para inserir os numeros
    this.pressEnter = () => {
        this.display.addEventListener('keypress', (event) => {
            console.log(event)
            if (event.key === 'Enter') { 
                this.resultDisplay();
            }
            
        });
    }

}
    

const calculadora = new Calculadora();
calculadora.inicia();