const button = window.document.getElementById("pressMe");

button.addEventListener('click', function () {
    
    let typedText = window.document.getElementById("input").value;

    const showAnagrams = result => {
        const show = window.document.getElementById('showUs');
        const div = window.document.createElement('div');
        div.innerHTML = `<p class="resultado"><strong>Anagramas para "${typedText}":</strong><span id="espaço">&nbsp</span><span>${result}.</span></p>`;
        div.classList = 'title';
        const span = window.document.createElement('span');
        span.innerText = ` `;
        span.classList = 'array';
        div.appendChild(span);
        show.appendChild(div);
    };

    const alphabetize = a => {
        return a.toLowerCase().split('').sort().join('').trim();
    };

    //mas que vontade de transformar este array palavras num objeto....
    const getAnagramsOf = typedText => {
        if (typedText.includes(' ')) {
            return '(Não podem frases... Apenas UMA palavra conforme o placeholder. Para frases aguarde Anagramas 2, ok?)';
        }
        let results = [];
        let anagramingTyped = alphabetize(typedText);
        for (let count = 0; count < palavras.length; count++) {
            let anagramingCount = alphabetize(palavras[count]);
            if (anagramingCount === anagramingTyped) { //typedText !== palavras[count] && 
                results.push(' ' + palavras[count]);
            }
        }
        if (results.length === 0) {
            return '(Não há anagramas disponíveis!)';
        }
        return results;
    };
    showAnagrams(getAnagramsOf(typedText));
});
