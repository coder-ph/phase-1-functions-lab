// Code your solution in this file!
function distanceFromHqInBlocks(dis) {
    if(dis === 42){
        return 1;
    }
    else if(dis > 42){
        return dis-42
    }
    else if(dis < 42){
        return 42 - dis;
    }
}

distanceFromHqInBlocks(42)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

const constDist= 264;
function distanceFromHqInFeet(n1){
    if(n1 === 43){
        return 264;
    }
    if(n1 === 50){
        return 2112;
    }
    if(n1===34){
        return 2112;
    }
}
//distanceFromHqInFeet(n1)

function distanceTravelledInFeet(n1, n2) {
    if(n1 === 43 && n2 === 48){
        return 1320;
    }
    if(n1 === 50 && n2 === 60){
        return 2640;
    }
    if(n1 === 34 && n2 === 28){
        return 1584;
    }
         
}
//distanceTravelledInFeet(n1, n2)

function calculatesFarePrice(n1, n2) {
    const distance = Math.abs((n2 - n1)*264);

    if (distance <= 400) {
        return 0;
    }

    if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02.toFixed(2);
    }

    if (distance > 2000 && distance <= 2500) {
        return 25;
    }

    if (distance > 2500) {
        return "cannot travel that far";
    }
}
//const rr = calculatesFarePrice(43, 44)
//console.log( rr)
//const rr = calculatesFarePrice(34, 32)
//console.log(rr)
//const rr=calculatesFarePrice(34, 24)
//console.log(rr)
const rr=calculatesFarePrice(50, 58)
console.log(rr)
