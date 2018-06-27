var screenWidth;
var mobileWidth = 623;

var initialVideoWidth;
var initialVideoHeight;

var initialVideo2Width;
var initialVideo2Height;

var initialVideo3Width;
var initialVideo3Height;

var initialVideo4Width;
var initialVideo4Height;

$(document).ready(function(){
    screenWidth = $(window).width();
    $('.in-2014').find('img').css('opacity', 0); 
    $('.in-2014').find('h4').css('opacity', 0); 
    $('.liberia-sierra').find('img').css('opacity', 0); 
    $('.liberia-sierra').find('h4').css('opacity', 0); 
    $('.assistance').find('img').css('opacity', 0); 
    $('.assistance').find('h4').css('opacity', 0); 
    $('.humanitarian').find('img').css('opacity', 0); 
    $('.humanitarian').find('h4').css('opacity', 0); 
    $('.million').find('.block-4').find('img').css('opacity', 0); 
    $('.million').find('.block-4').find('h4').css('opacity', 0); 
    
    initialVideoWidth = $('.video-block').find('iframe').width(); 
    initialVideoHeight = $('.video-block').find('iframe').height();
    
    initialVideo2Width = $('.video-block2').find('iframe').width(); 
    initialVideo2Height = $('.video-block2').find('iframe').height();
    
    initialVideo3Width = $('.video-block3').find('iframe').width(); 
    initialVideo3Height = $('.video-block3').find('iframe').height();
    
    initialVideo4Width = $('.video-block4').find('iframe').width(); 
    initialVideo4Height = $('.video-block4').find('iframe').height();
    
    resizeVideo();
    resizeVideo2();
    resizeVideo3();
    resizeVideo4();
});

$(window).scroll(function(){
    scrollTop = $(window).scrollTop();   
    
    //animation start
    if(scrollTop > $('.in-2014').position().top-Math.round($(window).height()*0.75)){
        $('.in-2014').find('img').animate({opacity: 1}, 1500, function(){
             $('.in-2014').find('h4').animate({opacity: 1}, 1500);
        });
    }
    
    if(scrollTop > $('.liberia-sierra').position().top-Math.round($(window).height()*0.75)){
        $('.liberia-sierra').find('img').animate({opacity: 1}, 1500, function(){
             $('.liberia-sierra').find('h4').animate({opacity: 1}, 1500);
        });
    }
    
    if(scrollTop > $('.assistance').position().top-Math.round($(window).height()*0.75)){
        $('.assistance').find('h4').animate({opacity: 1}, 1500, function(){
             $('.assistance').find('img').animate({opacity: 1}, 1500);
        });
    }
    
    if(scrollTop > $('.humanitarian').position().top-Math.round($(window).height()*0.75)){
        $('.humanitarian').find('img').animate({opacity: 1}, 1500, function(){
             $('.humanitarian').find('h4').animate({opacity: 1}, 1500);
        });
    }
    
    if(scrollTop > $('.million').position().top-Math.round($(window).height()*0.75)){
        $('.million').find('.block-4').find('img').animate({opacity: 1}, 1500, function(){
             $('.million').find('.block-4').find('h4').animate({opacity: 1}, 1500);
        });
    }
   
});

$(window).resize(function(){
    resizeVideo();
    resizeVideo2();
    resizeVideo3();
    resizeVideo4();
});

function resizeVideo(){
    screenWidth = $(window).width();
    if(screenWidth > mobileWidth){
        var videoWidth = Math.round($('.scaping-syria-bg').width()/2) - 60; 
    }else{
        var videoWidth = Math.round($('.scaping-syria-bg').width()) - 60;
    }
    $('.video-block').find('iframe').width(videoWidth);
        
    var videoHeight = Math.round(initialVideoHeight * videoWidth / initialVideoWidth);
    $('.video-block').find('iframe').height(videoHeight);
}

function resizeVideo2(){
    screenWidth = $(window).width();
    if(screenWidth > mobileWidth){
        var videoWidth = Math.round($('.scaping-syria-bg').width()/3)*2 - 20; 
    }else{
        var videoWidth = Math.round($('.scaping-syria-bg').width());
    }
    $('.video-block2').find('iframe').width(videoWidth);
    
    var videoHeight = Math.round(initialVideo2Height * videoWidth / initialVideo2Width);
    $('.video-block2').find('iframe').height(videoHeight);
}

function resizeVideo3(){
    screenWidth = $(window).width();
    
    var videoWidth = $('.scaping-syria-bg').width(); 

    $('.video-block3').find('iframe').width(videoWidth);
        
    var videoHeight = Math.round(initialVideo3Height * videoWidth / initialVideo3Width);
    $('.video-block3').find('iframe').height(videoHeight);
}

function resizeVideo4(){
    screenWidth = $(window).width();
    if(screenWidth > mobileWidth){
        var videoWidth = $('.large-7').width(); 
    }else{
        var videoWidth = $('.scaping-syria-bg').width();
    }
    $('.video-block4').find('iframe').width(videoWidth);
        
    var videoHeight = Math.round(initialVideo4Height * videoWidth / initialVideo4Width);
    $('.video-block4').find('iframe').height(videoHeight);
}