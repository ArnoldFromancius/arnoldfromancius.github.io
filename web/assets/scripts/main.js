

 // if (screen.width<300){
  // document.write("<style>body{zoom: 150%;}</style>");
// $("#BANNER").hide();
 //}

// Check if the user is accessing the page on a mobile device
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // User is accessing the page on a mobile device
  console.log("Mobile device detected");
  document.getElementById('BANNER').style.display = 'none';

  document.getElementByID('headerID').style.width = '100%';
  document.getElementById('headerID').style.marginLeft = '0%';

  document.getElementById('navbar').style.width = '100%';
  document.getElementById('navbar').style.marginLeft = '0%';
} else {
  // User is accessing the page on a desktop device
  console.log("Desktop device detected");
  document.getElementById('BANNER').style.display = 'none';

  document.getElementById('headerID').style.width = '100%';
  document.getElementById('headerID').style.marginLeft='0%';

  document.getElementById('navbar').style.width = '100%';
  document.getElementById('navbar').style.marginLeft = '0%';
}