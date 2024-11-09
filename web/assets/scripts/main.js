

  if (screen.width<300){
   document.write("<style>body{zoom: 150%;}</style>");
   $("#BANNER").hide();
 }

// Check if the user is accessing the page on a mobile device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // User is accessing the page on a mobile device
  console.log("Mobile device detected");
} else {
  // User is accessing the page on a desktop device
  console.log("Desktop device detected");
}