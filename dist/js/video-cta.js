var triggerCTA = function()
{
    //Give the viewer a little time to digest the video before showing call to action
    setTimeout(function () {
    //Get video element so we can find it's cordinates
    var sisterVideo = document.getElementById('cta-video-form').parentNode.getElementsByTagName('video')[0];
    var rectangle = sisterVideo.getBoundingClientRect();
    
    var ctaForm = document.querySelector('#cta-video-form');
    ctaForm.style.position = 'absolute'
    ctaForm.style.top = rectangle.top+"px";
    ctaForm.style.left =rectangle.left+"px";

    //Offset 40px. 20 for the padding in cta-container, and 20 for margin-bottom in the ckin player
    ctaForm.style.height = (rectangle.height-40)+"px";
    ctaForm.style.width = (rectangle.width-40)+"px";
    
    styleCTAButton();
    unfade(ctaForm);
   
    var titleBlock = document.querySelector(".default__title");
    titleBlock.style.display = 'none';
    }, 1500);
}

var removeCTA = function()
{
    var ctaForm = document.querySelector('#cta-video-form');
    fade(ctaForm);
}

function styleCTAButton()
{
    var ctaForm = document.querySelector('#cta-video-form');
    var sisterVideo = document.getElementById('cta-video-form').parentNode.getElementsByTagName('video')[0];

    var userColor = sisterVideo.dataset.color;
    var ctaButton = document.querySelector('.cta-btn');
    ctaButton.style.borderColor = userColor;
    ctaButton.style.color = userColor;
    ctaButton.style.outlineColor = userColor;

    var replayButton = document.querySelector('.replay-btn');
    replayButton.style.borderColor = userColor;
    replayButton.style.color = userColor;
    replayButton.style.outlineColor = userColor;
}


function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}