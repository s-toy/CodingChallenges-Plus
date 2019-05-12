var sponge = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    ambientLight(50);
    pointLight(250, 250, 250, windowWidth / 2, windowHeight / 2, 30);
    pointLight(250, 250, 250, -windowWidth / 2, windowHeight / 2, 30);
    pointLight(250, 250, 250, windowWidth / 2, -windowHeight / 2, 30);
    pointLight(250, 250, 250, -windowWidth / 2, -windowHeight / 2, 30);

    var b = new Box(0, 0, 0, windowHeight / 3);
    sponge.push(b);
}

function mousePressed() {
    var next = [];
    for (var i = 0; i < sponge.length; ++i) {
        var newBoxs = sponge[i].generate();
        next = next.concat(newBoxs);
    }
    sponge = next;
}

function draw() {
    background(0);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    for (var i = 0; i < sponge.length; ++i) {
        sponge[i].show();
    }
}