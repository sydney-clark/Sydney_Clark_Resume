//console.log("Linked javascript")

$(() => { //creating the DOM query


//     const $navBtn = $('.navBar')
// $navBtn.on('click', function () {
//     $('.nav').css('display', 'block')
//     $('.nav').on('click', function () {
//         $('.nav').css("display", 'none')
//     })
// })

// $(window).scroll(function () {
//     if (window.scrollY > 30) {
//         $navBtn.css("opacity", "0.6")
//     } else (
//         $navBtn.css("opacity", "1")
//     )
// })


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

});