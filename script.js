let rnd = (l, u) => Math.random() * (u - l) + l;
let scene; let doors = []; let pickUp; let obj1; let plate;
let door1; let door2; let door3; let door4; let door5; let door6;
let input;
let doorTP1; let doorTP2; let doorTP3; let doorTP4; let doorTP5; let doorTP6;
let TPF; let button3;
let TPF2; let TPF3; let TPF4; let TPF5; let TPF6; let TPF7; let TPF8;
let TPF9; let TPF10; let TPF11; let TPF12; let TPF13; let TPF14; let TPF15;
let TPF16; let TPF17; let TPF18; let TPF19; let TPF20;
let wallex; let end1; let victory; let soundS;
window.onload = function() {
  scene = document.querySelector("a-scene");
  pickUp = document.querySelector("#pick1");
  button3 = document.querySelector("#button3");
  obj1 = document.querySelector("#cam1");
  soundS = document.querySelector("#soundS");
  wallex = document.querySelector("#wallex");
  victory = document.querySelector("#victory");
  end1 = document.querySelector("#end1");
  plate = document.querySelector("#plate1");
  door1 = document.querySelector("#door1");
  input = document.querySelector("#input1");
  doorTP1 = document.querySelector("#doorTP");
  doorTP2 = document.querySelector("#doorTP2");
  doorTP3 = document.querySelector("#doorTP3");
  doorTP4 = document.querySelector("#doorTP4");
  doorTP5 = document.querySelector("#doorTP5");
  doorTP6 = document.querySelector("#doorTP6");
  TPF = document.querySelector("#doorTPF");
  TPF2 = document.querySelector("#doorTPF2");
  TPF3 = document.querySelector("#doorTPF3");
  TPF4 = document.querySelector("#doorTPF4");
  TPF5 = document.querySelector("#doorTPF5");
  TPF6 = document.querySelector("#doorTPF6");
  TPF7 = document.querySelector("#doorTPF7");
  TPF8 = document.querySelector("#doorTPF8");
  TPF9 = document.querySelector("#doorTPF9");
  TPF10 = document.querySelector("#doorTPF10");
  TPF11 = document.querySelector("#doorTPF11");
  TPF12 = document.querySelector("#doorTPF12");
  TPF13 = document.querySelector("#doorTPF13");
  TPF14 = document.querySelector("#doorTPF14");
  TPF15 = document.querySelector("#doorTPF15");
  TPF16 = document.querySelector("#doorTPF16");
  TPF17 = document.querySelector("#doorTPF17");
  TPF18 = document.querySelector("#doorTPF18");
  TPF19 = document.querySelector("#doorTPF19");
  TPF20 = document.querySelector("#doorTPF20");


  door6 = new door(56, -5, 0);

  door5 = new door(50, 6, 90);

  door4 = new door(30, 6, 90);

  door3 = new door(19, 15, 0);

  door2 = new door(19, 35, 0);
 

  teleport();
  loop();
}

function loop() {

  if (distance(obj1, end1) < 1) {
    victory.setAttribute("opacity", 1);
    victory.setAttribute("position", { x: 0, y: -2, z: -0.5 });
    soundS.components.sound.playSound();
  }
  if ((distance(plate, pickUp) <= 1) && (door2.x < door2.ex)) {
    door3.moving = true;
    door2.moving = true;
  }
  else if (door2.x >= door2.ex) {
    door2.moving = false;
    door3.moving = false;
  }
  else {
    door2.moving = false;
    door3.moving = false;
  }
  door2.move();
  door3.move();


  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let y2 = obj1.object3D.position.y + 3;
  let z1 = obj1.object3D.position.z;


  pickUp.addEventListener("mousedown", () => {
    pickUp.setAttribute("position", { x: x1, y: y1 -= 0.65, z: z1 -= 0.85 });
    setTimeout(100);
  })
  pickUp.addEventListener("mouseup", () => {
    pickUp.setAttribute("position", { x: x1, y: y1 -= 0.65, z: z1 -= 0.85 });
  })

  button3.addEventListener("click", () =>{
    door6.moving = true;
  })
  door6.move();
  door1.addEventListener("click", () => {

    let xloop1 = 21.25;
    for (let xloop = 19; xloop < xloop1; xloop += 0.01) {

      door1.setAttribute("position", { x: xloop, y: 1, z: 45 });
    }

  })


  input.onclick = function() {
    window.addEventListener("keypress", function(e) {
      const event = e;
      const currentval = input.getAttribute('text').value;
      const nextVal = currentval + event.key;
      input.setAttribute('text', 'value', nextVal);
    });

  }

  if ((input.getAttribute('text').value == "4315") && (door4.z < door4.ez)) {
    door4.movingy = true;
    door5.movingy = true;
  }
  else if (door4.z >= door4.ez) {
    door4.movingy = false;
    door5.movingy = false;
  }
  else {
    door4.movingy = false;
    door5.movingy = false;
  }
  door4.move();
  door5.move();


  window.addEventListener("keypress", function(e) {
    let jumping = false;
    if (e.key == " " && !jumping && (obj1.object3D.position.y < 4)) {
      jumping = true;
      obj1.object3D.position.y += 1;
      obj1.setAttribute("velocity", { y: 1.5})

    }

  })

  window.requestAnimationFrame(loop);
}

function teleport() {
  doorTP1.addEventListener("click", () => {
    obj1.object3D.position.x = -5;
    obj1.object3D.position.z = 9;
  })
  doorTP2.addEventListener("click", () => {
    obj1.object3D.position.x = -20;
    obj1.object3D.position.z = 9;
  })
  doorTP3.addEventListener("click", () => {
    obj1.object3D.position.x = -35;
    obj1.object3D.position.z = 9;
  })
  doorTP4.addEventListener("click", () => {
    obj1.object3D.position.x = -50;
    obj1.object3D.position.z = 9;
  })
  doorTP5.addEventListener("click", () => {
    obj1.object3D.position.x = -65;
    obj1.object3D.position.z = 9;
  })
  doorTP6.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
    wallex.setAttribute("position", { x: -50, y: -500, z: -60 });
    doorTP1.setAttribute("opacity", 0);
  })

  TPF.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF2.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF3.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF4.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF5.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF6.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF7.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF8.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF9.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF10.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF11.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF12.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF13.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF14.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF15.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF16.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF17.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF18.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF19.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
  TPF20.addEventListener("click", () => {
    obj1.object3D.position.x = 48;
    obj1.object3D.position.z = -30;
  })
}


class door {
  constructor(x, z, y) {
    this.x = x;
    this.z = z;
    this.y = y
    this.ex = this.x + 2.15;
    this.ez = this.z + 2.15;

    this.dx = 0.01;

    this.moving = false;
    this.movingy = false;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("static-body", "");
    this.obj.setAttribute("src", "#doorT");
    this.obj.setAttribute("depth", 0.25);
    this.obj.setAttribute("height", 2.25);
    this.obj.setAttribute("width", 2.25);
    this.obj.setAttribute("rotation", { x: 0, y: y, z: 0 });
    this.obj.setAttribute("position", { x: this.x, y: 1, z: this.z });
    scene.append(this.obj);
  }



  move() {
    if (this.moving) {

      this.x += this.dx;

      this.obj.setAttribute("position", { x: this.x, y: 1, z: this.z });

    }
    else if (this.movingy) {
      this.z += this.dx;

      this.obj.setAttribute("position", { x: this.x, y: 1, z: this.z });
    }

  }
}

class Block {
  constructor(x, y, z, type = "dynamic-body") {
    this.obj = document.createElement("a-box");
    this.obj.setAttribute(type, "");
    this.obj.setAttribute("color", "green");
    this.obj.setAttribute("position", { x: x, y: y, z: z });
    this.removable = false;
    scene.append(this.obj);
  }
}

function distance(obj1, obj2) {
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
  return d;



}

const clickAndHold = (btnEl) => {
  let timerId;
  const DURATION = 200;


  const onMouseDown = () => {
    timerId = setInterval(() => {
      btnEl && btnEl.click();
    }, DURATION);
  };


  const clearTimer = () => {
    timerId && clearInterval(timerId);
  };

  //handle when mouse is clicked
  btnEl.addEventListener("mousedown", onMouseDown);
  //handle when mouse is raised
  btnEl.addEventListener("mouseup", clearTimer);
  //handle mouse leaving the clicked button
  btnEl.addEventListener("mouseout", clearTimer);

  // a callback function to remove listeners useful in libs like react
  // when component or element is unmounted
  return () => {
    btnEl.removeEventListener("mousedown", onMouseDown);
    btnEl.removeEventListener("mouseup", clearTimer);
    btnEl.removeEventListener("mouseout", clearTimer);
  };
};
const clickUp = () => {
  pickUp.setAttribute("position", { x: x1, y: y1 -= 0.65, z: z1 -= 0.85 });
};
