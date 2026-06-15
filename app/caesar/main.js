document.addEventListener('DOMContentLoaded', () => {
    const keyInput = document.getElementById('cypherKey');
    const textInput = document.getElementById('plainText');
    const button = document.querySelector('.cypher-button');
    const resultText = document.querySelector('.result-text');

    const caesarCipher = (text, shift) => {
        const shiftAmount = parseInt(shift) % 26;
        
        return text.replace(/[a-zA-Z]/g, (char) => {
            const baseCode = char <= 'Z' ? 65 : 97;
            
            const newCharCode = ((char.charCodeAt(0) - baseCode + shiftAmount) % 26) + baseCode;
            
            return String.fromCharCode(newCharCode);
        });
    };

    button.addEventListener('click', () => {
        const textToEncode = textInput.value;
        const shiftKey = keyInput.value;
        
        resultText.textContent = caesarCipher(textToEncode, shiftKey);
    });
});