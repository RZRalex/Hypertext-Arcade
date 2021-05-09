// Pacman script

var world = [
	[1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,1,2,2,2,2,1],
    [1,2,1,2,2,2,2,1,1,2,1],
    [1,2,1,1,1,1,2,2,1,2,1],
    [1,2,2,2,2,1,2,2,2,2,1],
    [1,2,2,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1],
];

var worldDict = {
    0: 'blank',
    1: 'wall',
    2: 'coin'
}

function drawWorld(){
    output = '';

    for(var row = 0; row < world.length; row++){
        output += '<div class = "row">'
        for(var x = 0; x < world[row].length; x++){
            output += `<div class = "${worldDict[world[row][x]]}"></div>`
        }
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}
drawWorld();

var pacman = {
    x: 1,
    y: 1
}

function drawPacman(){
    document.getElementById('pacman').style.top = pacman.y * 40 + 'px'
    document.getElementById('pacman').style.left = pacman.x * 40 + 'px'
    //document.write(score)
}
drawPacman()


var score = 0
document.write(`Score >> ${score}`)