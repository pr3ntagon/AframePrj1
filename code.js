window.addEventListener("keypress", function(e){
  let jumping = false;
  if (e.key == " " && !jumping) {
    jumping = true;
    obj1.object3D.position.y += 0.1;
    obj1.setAttribute("velocity", { y: 40 })
  }
})