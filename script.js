
var drumPads = document.querySelectorAll(".drum-pad");

for (let i=0; i<drumPads.length; i++) {
  drumPads[i].addEventListener("mouseup", startAudio);
}

document.addEventListener("keyup", startAudio);

function startAudio(e) {
  let idd = e.target.id;
  let keyy = e.keyCode;
  
  if (idd == "") {
    // console.log("keyyyy");
    switchKey(keyy, e);
  }
  
  if (keyy == undefined) {
    // console.log("idddd");
    switchId(idd, e);
    keyActivation(e);
  }
  
}

function switchId(check, e) {
  switch (check) {
    case "audioA":
      let audioA = new Audio("/keyboard0.mp3");
      audioA.play();
      break;
    case "audioZ":
      let audioZ = new Audio("/keyboard1.mp3");
      audioZ.play();
      break;
    case "audioE":
      let audioE = new Audio("/keyboard2.mp3");
      audioE.play();
      break;
    case "audioQ":
      let audioQ = new Audio("/keyboard3.mp3");
      audioQ.play();
      break;
    case "audioS":
      let audioS = new Audio("/keyboard4.mp3");
      audioS.play();
      break;
    case "audioD":
      let audioD = new Audio("/keyboard5.mp3");
      audioD.play();
      break;
    case "audioW":
      let audioW = new Audio("/keyboard6.mp3");
      audioW.play();
      break;
    case "audioX":
      let audioX = new Audio("/keyboard7.mp3");
      audioX.play();
      break;
    case "audioC":
      let audioC = new Audio("/keyboard8.mp3");
      audioC.play();
      break;
      
  }
}

function switchKey(check) {
  switch (check) {
    case 49:
      let audioA = new Audio("/keyboard0.mp3");
      audioA.play();
      keyActivation("", "audioA");
      break;
    case 50:
      let audioZ = new Audio("/keyboard1.mp3");
      audioZ.play();
      keyActivation("", "audioZ");
      break;
    case 69:
      let audioE = new Audio("/keyboard2.mp3");
      audioE.play();
      keyActivation("", "audioE");
      break;
    case 81:
      let audioQ = new Audio("/keyboard3.mp3");
      audioQ.play();
      keyActivation("", "audioQ");
      break;
    case 83:
      let audioS = new Audio("/keyboard4.mp3");
      audioS.play();
      keyActivation("", "audioS");
      break;
    case 68:
      let audioD = new Audio("/keyboard5.mp3");
      audioD.play();
      keyActivation("", "audioD");
      break;
    case 87:
      let audioW = new Audio("/keyboard6.mp3");
      audioW.play();
      keyActivation("", "audioW");
      break;
    case 88:
      let audioX = new Audio("/keyboard7.mp3");
      audioX.play();
      keyActivation("", "audioX");
      break;
    case 67:
      let audioC = new Audio("/keyboard8.mp3");
      audioC.play();
      keyActivation("", "audioC");
      break;
  }
}

function keyActivation(e, elt) {
  var displayy = document.getElementById("display");
  // console.log(e.target.childNodes[1].id);
  if (e) {
    e.target.classList.add("active");
    setTimeout(function() {
      e.target.classList.remove("active");
    }, 100);
    displayy.innerHTML = e.target.childNodes[1].id;
  }
  if (elt) {
    let curr = document.getElementById(elt);
    curr.classList.add("active");
    setTimeout(function() {
      curr.classList.remove("active");
    }, 100);
    displayy.innerHTML = curr.childNodes[1].id;
  }
}

