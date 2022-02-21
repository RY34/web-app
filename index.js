let divNames = ["home", "contents", "about", "settings", "exit"];   //to be changed, fetch from DB later
function appendDiv(parent, arrayOfDivs) {                           //function that will add contents to divs
        
        let iterator = arrayOfDivs.length-1;

        if(parent.hasChildNodes() == 0){                            //check if parent div is empty

            for(let i=0; i<=iterator; i++) {

            let newDiv = document.createElement("div");             //create div
            newDiv.setAttribute("id", arrayOfDivs[i]);              //add id to div from array
            parent.append(newDiv);                                  //appned div to parent on site
            newDiv.innerHTML = arrayOfDivs[i];                      //write divs name
        }
        }
        
    }

document.addEventListener("DOMContentLoaded", function(){           

    //variables from DOM elements

    let flexbox = document.querySelector(".flexbox");

    //triggers

    appendDiv(flexbox, divNames);

    
});