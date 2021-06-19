const canvas = document.getElementById("canvas")
const audio = document.getElementById('audio')
const video = document.getElementById('video')
const context = canvas.getContext('2d')

let model;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
  }

handTrack.startVideo(video).then(status => {
    if (status) {
        navigator.getUserMedia({
            video:{}
        } , stream =>{
            video.srcObject = stream
            setInterval(runDetection,100);
             
        },
        err => console.log(err)
        )
    }   
})

function runDetection(){

    
    model.detect(video)
    .then(pred =>{
        console.log(pred)
        model.renderPredictions(pred , canvas , context , video)
    
        if(pred.length > 0)
        {
                // audio.play()
        }
    })
     
}

handTrack.load(modelParams).then(lmodel => {
    model = lmodel
})