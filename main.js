leftwristX = 0
leftwristY = 0
rightwristX = 0
rightwristY = 0
score = 0
song = "";


function preload()
{
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function setup(){
    createCapture(VIDEO);
    
}

function draw(){
    image(video, 0, 0, 600, 500);

    fill("#FF0000")

    stroke("FF0000");

    if(scoreLeftWrist> 0.2)
{
    circle(leftWristX, leftWristY,20);
    InNumberleftWristY = Number(leftWristY);

    remove_decimals = floor(InNumberleftWristY)
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume
    song.setVolume(volume);
}
if(rightWristY >0 && rightWristY <= 100)
{
    document.getElementById("speed").innerHTML = "Speed = 0.5x";
    song.rate(0.5);
}
else if(rightWristY > 100 && rightWristY <= 200)
{
    document.getElementById("speed").innerHTML = "Speed = 1x"
    song.rate(1)
}
else if(rightWristY > 200 && rightWristY <= 300)
{
    document.getElementById("speed").innerHTML = "Speed = 1.5x"
    song.rate(1.5)
}
else if(rightWristY > 300 && rightWristY <= 400)
{
    document.getElementById("speed").innerHTML = "Speed = 2x"
    song.rate(2)
}else if(rightWristY > 400 && rightWristY <= 500)
{
    document.getElementById("speed").innerHTML = "Speed = 2x"
    song.rate(2)
}
}

function modelLoaded(){
    console.log("posenet is initialised")
}


function gotPoses() {
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWrist Y = "+ leftWristY);
}
