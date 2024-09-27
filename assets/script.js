let inputSequence = '';
const targetSequences = {
    'croli': 'https://airstrike.school/n78aey0b.mp4',
    'ansel': 'https://axsl.xyz'
    'turtle': 'https://nsbits.com/products/mouthpiece/turtle-top/turtle-top0000012300001'
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
