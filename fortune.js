let userName = 'Jane'

userName === 'Jane' ? console.log('Hello, ' + userName) : console.log('Hello');

let userQuestion = 'Will I be rich?'

console.log('Hi, ' + userName + ' you just asked ' + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'My sources say not';
        break;
    case 5:
        eightBall = 'Outlook not so good';
        break;
    case 6:
        eightBall = 'Signs point to yes';
        break;
    case 7:
        eightBall = 'Do not count on it'
        break;
}

console.log(eightBall)