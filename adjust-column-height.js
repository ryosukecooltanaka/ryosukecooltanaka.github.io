// Get the list of all the "gallery-panel" elements
var panel = document.getElementsByClassName("gallery-panel");
var ii;


function adjustPanelHeight(){
  // do the adjustment only in the 2 column mode
  if (document.documentElement.clientWidth > 959){
    // go through even numbered columns
    for (ii=1; ii<panel.length; ii+=2){
      // make the height same
      var leftHeight = panel[ii-1].clientHeight;
      var rightHeight = panel[ii].clientHeight;
      panel[ii-1].style.height = Math.max(leftHeight, rightHeight);
      panel[ii].style.height = Math.max(leftHeight, rightHeight);
      //panel[ii].style.backgroundColor = 'green';
    }
  } else { // in the 1 column setting, just make them minimum
    for (ii=0; ii<panel.length; ii++){
      panel[ii].style.height = 'auto';
    }
  }
  console.log('adjusted height')
}

// run this function once when the page is loaded
// if I just call this function here, correct element height is never
// assigned to gallery-panel, and thus they become too short somehow
window.addEventListener("textFillFinishedEvent", adjustPanelHeight);
// run this function every time window size is adjusted
window.addEventListener("resize", adjustPanelHeight);
