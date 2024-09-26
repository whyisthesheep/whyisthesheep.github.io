let inputSequence = '';
const targetSequences = {
    'croli': 'https://femboyporn.pics/n78aey0b.mp4',
    'ansel': 'https://axsl.xyz'
};
document.addEventListener('keydown', (event) => {
    inputSequence += event.key;
    if (targetSequences[inputSequence]) {
        window.location.href = targetSequences[inputSequence];
    }
    const maxLength = Math.max(...Object.keys(targetSequences).map(seq => seq.length));
    if (inputSequence.length > maxLength) {
        inputSequence = inputSequence.substring(1);
    }
});