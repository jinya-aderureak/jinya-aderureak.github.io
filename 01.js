function showPopup(event) {
    target = document.getElementById("popup");

    if (!event) var event = window.event;
    if (!event.pageX) px = event.clientX + document.body.scrollLeft; else px = event.pageX;
    if (!event.pageY) py = event.clientY + document.body.scrollTop; else py = event.pageY;

      target.style.left = px+10 + "px";
      target.style.top = py+5 + "px";
      target.style.visibility = "visible";
  }

  function hidePopup() {
    target = document.getElementById("popup");
    target.style.visibility = "hidden";
  }