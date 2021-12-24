function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modalloaded);
    document.getElementById("status").innerHTML="Status = Detecting Object";
}

img="";
status="";


function preload(){
    img= loadImage("4i.jpg");
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("banana",60, 95);
    noFill();
    stroke("#FF0000");
    rect(55,84,301,300);

    fill("#FF0000");
    text("apple",360, 400);
    noFill();
    stroke("#FF0000");
    rect(352,113,200,300);

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