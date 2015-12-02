var animatePoints = function(){
 
	//return an array with the elements that have the point class
   var points = document.getElementsByClassName('point');
 console.log("hi i'm working");
	//revealFirstPoint is the name of the function
   var revealFirstPoint = function() {
     points[0].style.opacity = 1;
     points[0].style.transform = "scaleX(1) translateY(0)";
     points[0].style.msTransform = "scaleX(1) translateY(0)";
     points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
                 };
 
   var revealSecondPoint = function() {
     points[1].style.opacity = 1;
     points[1].style.transform = "scaleX(1) translateY(0)";
     points[1].style.msTransform = "scaleX(1) translateY(0)";
     points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
                 };
 
  var revealThirdPoint = function() {
     points[2].style.opacity = 1;
     points[2].style.transform = "scaleX(1) translateY(0)";
     points[2].style.msTransform = "scaleX(1) translateY(0)";
     points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
                 };
 
 revealFirstPoint();
 revealSecondPoint();
 revealThirdPoint();
             };
animatePoints();