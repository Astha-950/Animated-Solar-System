const buttons= document.querySelectorAll(".btn-grp button");
const cards= document.querySelectorAll(".infocard");
const cd= document.querySelectorAll(".cards");
const orbit=document.querySelectorAll(".orbit");
      



   
         
        function opencards(){ 
        buttons.forEach((button,index)=>{
            button.addEventListener("click",(e)=>{
              cards.forEach(card=>{
                card.style.display="none";

              }) 
              buttons.forEach(butt=>{
                butt.disabled=false;
                
              })
              
              orbit.forEach(orbits=>{
                orbits.style.borderColor="#ddd9";
                    orbits.style.borderWidth="2px";
              })

              button.disabled=true;
              cards[index].style.display="block";
              
              cd[0].style.display="block";
              orbit[index].style.borderColor="white";
              orbit[index].style.borderWidth="3px";
              window.scrollTo({
                top:0,
                left:0,
                behavior: 'smooth'
              });

  
            })

             

            
    
        })}

        function closecards(){
         
            const crossdiv=document.querySelectorAll(".cross");
             
            
            crossdiv.forEach(cros=>{
                cros.addEventListener("click",()=>{
                  cards.forEach(card=>{
                        card.style.display="none"
                    })
                    cd[0].style.display="none";
               buttons.forEach(button=>{
                button.disabled=false;
                orbit.forEach(orbits=>{
                    orbits.style.borderColor="#ddd9";
                    orbits.style.borderWidth="2px";
                })
               })
        })
            })
             
        
      }

      function increaseSpeed(planet) {

        
        const orbitElement = document.getElementById(planet);
        const orbitElementName = document.querySelector(`#${planet}-orbit p`);
        // Get the current animation duration from the inline style or computed style
        let duration = parseFloat(getComputedStyle(orbitElement).animationDuration);

      console.log(duration);
        // Decrease duration to increase speed
        duration = duration * 0.6; // Reduce by 10%
    
        // Update the animation with the new duration
        orbitElement.style.animationDuration = `${duration}s`;
        orbitElementName.style.animationDuration = `${duration}s`;

        if(planet=='saturn'||planet=='uranus'){
          const ring = document.querySelector(`.${planet}-ring`);

          ring.style.animationDuration = `${duration}s`;

        }

    }
    
    function decreaseSpeed(planet) {
      const orbitElement = document.getElementById(planet);
      const orbitElementName = document.querySelector(`#${planet}-orbit p`);
      
      // Get the current animation duration from the inline style or computed style
      let duration = parseFloat(getComputedStyle(orbitElement).animationDuration);
  
      console.log(duration);
      // Increase duration to decrease speed
      duration = duration / 0.6; // Increase by approximately 67% (reversing the decrease in the increaseSpeed function)
      
      // Update the animation with the new duration
      orbitElement.style.animationDuration = `${duration}s`;
      orbitElementName.style.animationDuration = `${duration}s`;
  
      if (planet === 'saturn' || planet === 'uranus') {
          const ring = document.querySelector(`.${planet}-ring`);
          ring.style.animationDuration = `${duration}s`;
      }
  }
   
function trans() {
  var element = document.getElementById("trans-form");
  var rotateLabel = document.getElementById("rotate");
  var checkbox = document.querySelector("input[type='checkbox']");
var btngrp=document.querySelector(".btn-grp");
var btndime=document.querySelector(".btn-dime");
 let header=document.querySelector("#header span");
 console.log(header);
  if (checkbox.checked) {
      element.style.transform = "rotateX(0deg)";
      rotateLabel.innerHTML = "2D";
      element.style.top = "18%";
      btngrp.style.transform = "translateY(-81px)";
      btndime.style.transform = "translateY(-81px)";
      header.innerHTML="2D";

  } else {
      element.style.transform = "rotateX(70deg)";
      rotateLabel.innerHTML = "3D";
      element.style.top = "18%";
   
  btngrp.style.transform = "translateY(-200px)";
  btndime.style.transform = "translateY(-150px)";
  header.innerHTML="3D";

   
  }
}




    

     function openMer(){
        closecard();
        document.getElementById("mercury-orbit").style.borderColor="white";
        document.getElementById("mercury-orbit").style.borderWidth="2px";
         
        document.getElementById("mercury-card").style.display="block";
        const cd=document.getElementsByClassName("cards");
        cd[0].style.display="block";
     }
function openV(){
    closecard();
    document.getElementById("venus-orbit").style.borderColor="white";
    document.getElementById("venus-orbit").style.borderWidth="2px";

    document.getElementById("venus-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}

function openE(){
    closecard();
    document.getElementById("earth-orbit").style.borderColor="white";
    document.getElementById("earth-orbit").style.borderWidth="2px";

    document.getElementById("earth-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
function openMars(){
    closecard();
    document.getElementById("mars-orbit").style.borderColor="white";
    document.getElementById("mars-orbit").style.borderWidth="2px";

    document.getElementById("mars-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
function openJup(){
    closecard();
    document.getElementById("jupiter-orbit").style.borderColor="white";
    document.getElementById("jupiter-orbit").style.borderWidth="2px";

    document.getElementById("jupiter-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
function openSat(){
    closecard();
    document.getElementById("saturn-orbit").style.borderColor="white";
    document.getElementById("saturn-orbit").style.borderWidth="2px";

    document.getElementById("saturn-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
function openU(){
    closecard();
    document.getElementById("uranus-orbit").style.borderColor="white";
    document.getElementById("uranus-orbit").style.borderWidth="2px";

    document.getElementById("uranus-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
function openNep(){
    closecard();
    document.getElementById("neptune-orbit").style.borderColor="white";
    document.getElementById("neptune-orbit").style.borderWidth="2px";

    document.getElementById("neptune-card").style.display="block";
    const cd= document.getElementsByClassName("cards");
    cd[0].style.display="block";
}
     function closecard(){
        document.getElementById("mercury-orbit").style.borderColor="#ddd9";
        document.getElementById("mercury-orbit").style.borderWidth="1px";
        document.getElementById("venus-orbit").style.borderColor="#ddd9";
        document.getElementById("venus-orbit").style.borderWidth="1px";
        document.getElementById("earth-orbit").style.borderColor="#ddd9";
        document.getElementById("earth-orbit").style.borderWidth="1px";
        document.getElementById("mars-orbit").style.borderColor="#ddd9";
        document.getElementById("mars-orbit").style.borderWidth="1px";
        document.getElementById("jupiter-orbit").style.borderColor="#ddd9";
        document.getElementById("jupiter-orbit").style.borderWidth="1px";
        document.getElementById("saturn-orbit").style.borderColor="#ddd9";
        document.getElementById("saturn-orbit").style.borderWidth="1px";
        document.getElementById("uranus-orbit").style.borderColor="#ddd9";
        document.getElementById("uranus-orbit").style.borderWidth="1px";
        document.getElementById("neptune-orbit").style.borderColor="#ddd9";
        document.getElementById("neptune-orbit").style.borderWidth="1px";

        document.getElementById("mercury-card").style.display="none";
        document.getElementById("venus-card").style.display="none";
        document.getElementById("earth-card").style.display="none";
        document.getElementById("mars-card").style.display="none";
        document.getElementById("jupiter-card").style.display="none";
        document.getElementById("saturn-card").style.display="none";
        document.getElementById("uranus-card").style.display="none";
        document.getElementById("neptune-card").style.display="none";
        const cd= document.getElementsByClassName("cards");
    cd[0].style.display="none";

     }
     

    //  $(document).click(function (e) {
    //     var cards = $(".cards");
    //     if (!cards.
    //         is(e.target) &&
    //         cards.
    //         has(e.target).
    //         length === 0) {
    //         cards.hide();
    //     }
    //     console.log(e);
    // }); 




