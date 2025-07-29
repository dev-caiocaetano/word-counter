function wordCounter() {
    const form = document.querySelector('.form'); //Seleciona o formulário com a classe form.
    const occurrences = document.querySelector('.occurrences'); //Seleciona o elemento que mostrará quantas vezes a palavra aparece.
    const wordCounter = document.querySelector('.word__counter'); //Seleciona o elemento que mostrará a quantidade total de caracteres do texto.

    function receiveText(event) {
        event.preventDefault();
        const text = form.querySelector('.text__input').value; //Pega o valor do texto do textarea com classe 'text__input'
        const word = form.querySelector('.word__input').value; //Pega a palavradentro do input com classe 'word__input'
        const checkWord = new RegExp(word, "gi"); //Expressão regular para buscar a palavra no texto, ignorando maiúsculas/minúsculas.
        const result = text.match(checkWord); //Procura todas as ocorrências da palavra no texto

        if (result) {
            occurrences.innerHTML = `A palavra ${word} aparece ${result.length} vezes no texto.`; //Exibe a quantidade de vezes que a palavra apareceu
        } else {
            occurrences.innerHTML = `Nenhuma palavra encontrada.` //Caso não tenha encontrado nenhuma ocorrência
        }

        wordCounter.innerHTML = `O texto contém ${text.length} caracteres.;`

    }


    form.addEventListener('submit', receiveText);
}

wordCounter();
