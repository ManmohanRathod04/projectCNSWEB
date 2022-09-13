// Carousel 

$('#slider-area').owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
// Carousel 



     // modal 

     $(document).ready(function () {

      setTimeout(()=>{
        $('#exampleModal').modal('show');
        setTimeout(() => {
          $('#modal').modal('show');
  
          setTimeout(() => {
            let one = document.getElementById("one");
            one.style.color = "white";
            one.style.backgroundColor = "red";
  
            setTimeout(() => {
              let one = document.getElementById("one");
              let two = document.getElementById("two");
  
              one.style.color = "Black"
              one.style.backgroundColor = "#d9a34d";
  
              two.style.color = "White"
              two.style.backgroundColor = "red";
  
              setTimeout(() => {
                let two = document.getElementById("two");
                let three = document.getElementById("three");
  
                two.style.color = "Black"
                two.style.backgroundColor = "#d9a34d";
  
                three.style.color = "White"
                three.style.backgroundColor = "red";
  
                setTimeout(() => {
                  let three = document.getElementById("three");
                  let four = document.getElementById("four");
  
                  three.style.color = "Black"
                  three.style.backgroundColor = "#d9a34d";
  
                  four.style.color = "White"
                  four.style.backgroundColor = "red";
                  setTimeout(() => {
                    let two = document.getElementById("two");
                    let three = document.getElementById("three");
  
                    four.style.color = "Black"
                    four.style.backgroundColor = "#d9a34d";
  
                  }, 2000)
  
  
                }, 2000)
  
  
              }, 2000)
  
            }, 2000)
  
          }, 500)
  
  
        }, 27000)
      },16000)
       
      });
      // modal 









 
    