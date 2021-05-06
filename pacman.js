// Pacman script

var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,1,1,2,1,1,1,2],
    [2,1,1,1,2,2,2,2,1,1,1,2],
    [2,1,1,2,2,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2],
];

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'coin'
}

function drawWorld(){
    output = '';

    for(var row = 0; row < world.length; row++){
        output += '<div class = "row"></div>'
        for(var x = 0; x < world[row].length; x++){
            output += `<div class = ${worldDict[world[row][x]]}></div`
        }
        output += '</div>'
    }
    document.getElementById('world').innerHTML = output;
}


var score = 0
document.write(`Score >> ${score}`)