let activeIndex = 0;

const titles = document.getElementsByClassName("title");

setInterval( function () {
    
    const nextIndex = activeIndex + 1 <= titles.length - 1 ? activeIndex + 1 : 0;
    
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
          nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentGroup.dataset.status = "after";
    
    nextGroup.dataset.status = "before";
    
    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })
} , 2500);

$(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100 - 5);
    
    $('.gradientGrid').css('-webkit-mask-image', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, black 10%, transparent 30%)');
    $('.gradientGrid').css('mask-image', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, black 10%, transparent 30%)');
});


//made with the assistance of chatGPT and modified to my needs

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var layers = document.querySelectorAll('.featureItem');

  Array.prototype.forEach.call(layers, function(layer, index) {
    var speed = layer.getAttribute('data-speed');
    var yPos = -(scrollTop * speed / 100);
    layer.style.transform = 'translate3d(-50%, calc(-50% + ' + yPos + 'px), 0px)';
  });
});