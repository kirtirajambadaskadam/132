function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modalloaded);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}

img="";
status="";

function preload(){
    img= loadImage("1i.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("bed",45, 75);
    noFill();
    stroke("#FF0000");
    rect(40,60,450,320);

    fill("#FF0000");
    text("potted plant",250,120);
    noFill();
    stroke("#FF0000");
    rect(250, 103, 100, 100);
}

function modalloaded(){
    console.log("Modal Loaded!");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error();
    }
    console.log(results)
}