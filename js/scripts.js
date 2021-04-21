$(document).ready(function() {
  $("form#info").submit(function(event){
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $("#not-triangle").show().siblings().hide();
    } else if(side1 === side2 && side1 === side3 && side2 === side3) {
      $("#equilateral").show().siblings().hide();
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $("#isosceles").show().siblings().hide();
    } else {
      $("#scalene").show().siblings().hide();
    }
    
    event.preventDefault();
  });
});