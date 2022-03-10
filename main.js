Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

function Take_Snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="captured_image" src= "' + data_uri+'"/>'
    })
}

console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aNqFsYYXd/model.json', modelLoaded);

function modelLoaded(){
    console.log("model_loaded")
}

function identify(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    } else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
     document.getElementById("object_accuracy").innerHTML =      parseInt(results[0].confidence.toFixed(3));
        console.log(typeof(results[0].confidence.toFixed(3)));
   
    }
}

//value_of_accuracy =Number(document.getElementById("object_accuracy").value);


//percent = (value_of_accuracy/100)+"%";

//document.getElementById("object_accuracy").innerHTML=percent;