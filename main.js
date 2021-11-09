noline="";
img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(640,540);
    canvas.position(500,150);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    noline=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img,0,0,640,540);
    strokeWeight(10);
    fill('#910fdb');
    textSize(50);
    text("dog",75,150);
    noFill();
    stroke('#3859ff');
    rect(60,60,325,460);
    fill('#38ff7e');
    text("Cat",460,135);
    noFill();
    stroke('#38ff7e');
    rect(315,85,250,425);
}