const args = process.argv.slice(2)
switch (args[0]) {
    case 'B-INCOMESSF':
        console.log('10.0548');
        break;
    case 'BM70SSF':
        console.log('9.9774');
        break;
    case 'BEQSSF':
        console.log('11.247');
        break;
    case 'B-FUTURESSF':
        console.log('11.443');
        break;
    default:
        console.log('Invalid FUNDCODE arguments!')
}