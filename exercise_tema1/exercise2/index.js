// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended

const output = checkSpeed(71);
console.log(output);

function checkSpeed(speed) {
    const kmPerPoint = 5;
    const limiteVelocidad = 70;

    if (speed < limiteVelocidad + kmPerPoint) {
        console.log('ok');
        return;
    }

    const points = Math.floor((speed - limiteVelocidad) / kmPerPoint);
    if (points > 12)
        console.log("carnet suspendido");
    else
        console.log('Points', points);

}


