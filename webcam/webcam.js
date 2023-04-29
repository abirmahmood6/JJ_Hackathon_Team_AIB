//Tensorflow
const classifier = knnClassifier.create()
const webcamElement = document.getElementById("webcam")

let net

async function app() {

  net = await mobilenet.load()

  console.log("Loaded model")

  const webcam = await tf.data.webcam(webcamElement)
    //function adds examples to ML classifier that will be trained using the MobileNet model.


  const addExample = async (classId) => { 
    //function captures an image from the webcam. Object is assigned as "img"

    const img = await webcam.capture()

    const activation = net.infer(img, true) //create a directory and iterate over lots of images

    classifier.addExample(activation, classId)

    img.dispose()
  }

  document.getElementById("Recycle").addEventListener("click", () => addExample(0))
  document.getElementById("Garbage").addEventListener("click", () => addExample(1))
  document.getElementById("Composte").addEventListener("click", () => addExample(2))


  
  // Start the webcam and classify images
  while (true) {
    if (classifier.getNumClasses() > 0) {
      const img = await webcam.capture()

      const activation = net.infer(img, "conv_preds")

      const result = await classifier.predictClass(activation)

      const classes = ["Recycle", "Garbage", "Composte"]

      document.getElementById("console").innerText = `
                prediction: ${classes[result.label]}\n
                probabilty: ${result.confidences[result.label]}
            `

      img.dispose()
    }

    await tf.nextFrame()
  }
}

app()