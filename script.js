const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// using screen capture api
// 1- prompt user to select media stream
// 2- pass that to video element
// 3- then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // navigator.mediaDevices.getDisplayMedia(); is used to capture live content
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false; 
});

selectMediaStream();
