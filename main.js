img = "";
Status = "";
objects = [];
objectDetector= "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(300, 100);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('dog_cat.jpg');

}
function draw() {
    image(img, 0, 0, 640, 420);
    if (Status != "") {
        for (i = 0; i < objects.length; i++) {
            fill();
            document.getElementById("status").innerHTML = "Status : Objects Detected ";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("model Loaded");
    Status = true;
    objectDetector.detect(img, gotResult);

}


function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}


