// A new version of collapse publication comments gimmick
// Only un-collapse one publication at any moment?

// Get the list of all the "pub" elements
var pubList = document.getElementsByClassName("pub");
var ii;

// Loop through the all papers
for (ii=0; ii<pubList.length; ii++){
  // Add on-click functions to each paper
  pubList[ii].addEventListener("click", function(){

    if (!this.classList.contains("active")){ // if clicked inactive one
      // make all items inactive and collapsed
      for (var jj=0; jj<pubList.length; jj++){
        pubList[jj].classList.remove("active")
        pubList[jj].nextElementSibling.style.maxHeight = null;
      }
      // uncollapse the clicked one
      this.classList.add("active")
      this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";

    } else { // if clicked active one
      // just collapse
      this.classList.remove("active")
      this.nextElementSibling.style.maxHeight = null;
    }
  })
}
