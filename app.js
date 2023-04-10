//console.log("Linked javascript")

$(() => { //creating the DOM query

//Class Tracker carousel
let currentImgIndex = 0;
let numOfImages = $('.carousel-images').children().length - 1;

$('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

    if (currentImgIndex < numOfImages) {
        currentImgIndex++;
    } else {
        currentImgIndex = 0;
    }

    $('.carousel-images')
        .children()
        .eq(currentImgIndex)
        .css('display', 'block');

});
$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
    if (currentImgIndex > 0) {
        currentImgIndex--;
    } else {
        currentImgIndex = numOfImages;
    }

    $('.carousel-images')
        .children()
        .eq(currentImgIndex)
        .css('display', 'block');

});

//LOTR carousel
let currentImgIndex2 = 0;
let numOfImages2 = $('.carousel-images2').children().length - 1;

$('.next2').on('click', () => {
    $('.carousel-images2').children().eq(currentImgIndex2).css('display', 'none');

    if (currentImgIndex2 < numOfImages2) {
        currentImgIndex2++;
    } else {
        currentImgIndex2 = 0;
    }

    $('.carousel-images2')
        .children()
        .eq(currentImgIndex2)
        .css('display', 'block');

});
$('.previous2').on('click', () => {
    $('.carousel-images2').children().eq(currentImgIndex2).css('display', 'none');
    if (currentImgIndex2 > 0) {
        currentImgIndex2--;
    } else {
        currentImgIndex2 = numOfImages2;
    }

    $('.carousel-images2')
        .children()
        .eq(currentImgIndex2)
        .css('display', 'block');

});

//footer slide toggle

$(document).ready(function(){
$(".footerButton").click(function(){
$("#links").slideToggle('slow');
$("#links2").slideToggle('slow');
});
});

});