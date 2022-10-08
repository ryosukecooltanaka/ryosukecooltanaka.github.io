// Get the list of all the "gallery-panel" elements
var panel = document.getElementsByClassName("gallery-panel");
var ii;

function adjustPanelHeight(){
  // do the adjustment only in the 2 column mode
  if (window.innerWidth > 959){
    // go through even numbered columns
    for (ii=1; ii<panel.length; ii+=2){
      // make the height same
      panel[ii].style.height = panel[ii-1].clientHeight;
    }
  } else { // in the 1 column setting, just make them minimum
    for (ii=0; ii<panel.length; ii++){
      panel[ii].style.height = panel[ii].style.minHeight;
    }
  }
}

// run this function once when the page is loaded
adjustPanelHeight();
// run this function every time window size is adjusted
window.addEventListener("resize", adjustPanelHeight);
