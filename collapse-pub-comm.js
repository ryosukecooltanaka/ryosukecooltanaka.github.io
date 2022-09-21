// Get the list of all the "pub" elements
var coll = document.getElementsByClassName("pub");
var ii;
// Loop through the all papers
for (ii=0; ii<coll.length; ii++){
  // Add on-click functions to each paper
  coll[ii].addEventListener("click", function(){
    // On click, enable or disable "active" class (in CSS)
    this.classList.toggle("active")
    // Get the next element (which should be <li> containing the comment to the paper)
    var thisComment = this.nextElementSibling;
    if (thisComment.style.maxHeight){ //  if the max-height is not null
      thisComment.style.maxHeight = null;
    } else {
      thisComment.style.maxHeight = thisComment.scrollHeight + "px";
    }
  });
}
