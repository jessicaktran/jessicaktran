

var originalImage = "https://media1.popsugar-assets.com/files/thumbor/EfLe5N2fcUUggq5Dj70GM7kzQis=/fit-in/610x525/top/filters:format_auto():upscale()/2013/01/05/1/192/1922664/1f9e403e5c93d467_Corduroy.jpg";
var hoverImage = "https://food.fnr.sndimg.com/content/dam/images/food/products/2019/11/22/rx_if-you-give-a-mouse-a-cookie-book.jpeg.rend.hgtvcom.616.770.suffix/1574458449236.jpeg" ; 


function changeImage(onHover) {
    var image = document.getElementById("hoverImage");
    image.src = onHover ? hoverImage : originalImage;
}

function changeText() {
    var titleHeading = document.getElementById("titleHeading");
    titleHeading.innerHTML = "Meet the ultimate lover of acai bowls";
    titleHeading.style.color = "red";
  }

  
  var hoverCount = 0; 

  function countHover() {
    hoverCount++;
    document.getElementById("hoverCount").textContent = hoverCount;
  }