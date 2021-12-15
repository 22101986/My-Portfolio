let flashing = document.getElementById("flash")
let ok = true;

function flashingText() {
    if(ok){
    setTimeout( function() {
    if(flashing.style.visibility !== "visible") {
      flashing.style.visibility = "visible";
      flashing.classList.remove("opacity-0");
      flashing.classList.add("opacity-1");
      flashing.classList.add("text-light")                     }                      
        },2000)}
        
        else{
            flashing.style.visibility = "hidden";
            
        }
    }

flashingText();
