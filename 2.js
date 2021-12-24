function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modalloaded);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}

img="";
status="";


function preload(){
    img= loadImage("2i.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("tv",210,165);
    noFill();
    stroke("#FF0000");
    rect(200,150,400,200);

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