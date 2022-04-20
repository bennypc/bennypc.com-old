if(window.screen.width > 1500){

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    function openNav() {
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("sidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px"; 
    }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    function closeNav() {
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";

    }
 }
 else{
    /* Open the sidenav */
    function openNav() {
        document.getElementById("sidenav").style.width = "100%";

    }
  
    /* Close/hide the sidenav */
    function closeNav() {
        document.getElementById("sidenav").style.width = "0";

    }
 }