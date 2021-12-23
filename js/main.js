var slideNum = 1;
var Art_Array = [];
var Cart_Array = [];
var art_count = 0;
var cat_count = 0;

var Word_Home = ['Logos', 'Fliers', 'Banners', 'Arts/Cartoon', 'PriceList', 'Graphics'];
var Word_Count = Word_Home.length;

function Return() {
    $('.sliding h2').removeClass('changing');
}

function TextSlideNext() {
    // if (slideNum >= 6) {
    //     slideNum = 1
    // } else {
    //     slideNum++;
    // }
    // $('*.text-slide').removeClass('active');
    // $('#slide' + slideNum).addClass('active');

    if (slideNum >= (Word_Count - 1)) {
        slideNum = 1;
    } else {
        slideNum++;
    }

    $('.sliding h2').addClass('changing');
    $('.sliding h2').text(Word_Home[slideNum]);
    setTimeout(Return, 100);
}

function CheckArtDetails(WorkId) {
    $('.work_overlay').addClass('active');
    $('.work').addClass('active');
    $('#work_title').html(Art_Array[WorkId].title);
    $('#work_img').attr('src', './' + Art_Array[WorkId].img);
    $('#work_desc').html(Art_Array[WorkId].desc);
    $('#share').attr('href', 'https://wa.me/message/FSFJV4BPLCBEM1');
}

// function CheckCategoryArts(CatId, CatName) {
//     $('#work_of_arts *').remove();
//     $('.categories *').removeClass('active');
//     hate = document.getElementById(CatName);
//     hate.classList.add('active');
//     if (CatId == 99999999999999999999999) {
//         var art_found = 0;
//         for (var l = 0; l < art_count; l++) {
//             $('#work_of_arts').append('<div class="summary_blocks"><div class="block_info"><img src="./' + Art_Array[l].img + '" alt="' + Art_Array[l].title + '" class="summary_img"><h3> ' + Art_Array[l].title + ' </h3><p> ' + Art_Array[l].short + ' </p><button onclick="CheckArtDetails(' + l + ')"> View </button></div></div>');
//             art_found = 1;
//         }
//         if (art_found == 0) {
//             $('#work_of_arts').html('<h3> No Art Available. </h3>');
//         }
//     } else {
//         var CatRealId = Cart_Array[CatId].id;
//         var art_found = 0;
//         for (var l = 0; l < art_count; l++) {
//             if (Art_Array[l].cat == CatRealId) {
//                 $('#work_of_arts').append('<div class="summary_blocks"><div class="block_info"><img src="./' + Art_Array[l].img + '" alt="' + Art_Array[l].title + '" class="summary_img"><h3> ' + Art_Array[l].title + ' </h3><p> ' + Art_Array[l].short + ' </p><button onclick="CheckArtDetails(' + l + ')"> View </button></div></div>');
//                 art_found = 1;
//             }
//         }
//         if (art_found == 0) {
//             $('#work_of_arts').html('<h3> No Art Available In This Category </h3>');
//         }
//     }
// }



$('document').ready(function () {
    setInterval(TextSlideNext, 3000);
    Gallery = 1;
    // $.ajax({
    //     url: './php/gallery.php',
    //     data: { Gallery },
    //     method: 'POST',
    //     success: function (data) {
    //         data = JSON.parse(data);
    //         Art_Array = data.artworks;
    //         Cart_Array = data.categories;
    //         art_count = data.art_count;
    //         cat_count = data.cat_count;
    //         if (data.status == 1) {
    //             for (var i = 0; i < data.cat_count; i++) {
    //                 $('.categories').append('<label onclick="CheckCategoryArts(' + i + ', \'' + data.categories[i].name + '\')" id="' + data.categories[i].name + '"> ' + data.categories[i].name + ' </label>');
    //             }

    //             for (var l = 0; l < data.art_count; l++) {
    //                 $('#work_of_arts').append('<div class="summary_blocks"><div class="block_info"><img src="./' + data.artworks[l].img + '" alt="' + data.artworks[l].title + '" class="summary_img"><h3> ' + data.artworks[l].title + ' </h3><p> ' + data.artworks[l].short + ' </p><button onclick="CheckArtDetails(' + l + ')"> View </button></div></div>');

    //                 // $('#work_preview').append('<div class="testimonial_blocks"><div class="testimonial"><img src="./' + data.artworks[l].img + '" alt="' + data.artworks[l].title + '"><label> ' + data.artworks[l].title + ' </label></div></div>');
    //             }
    //         } else {
    //             alert('error');
    //             location.reload();
    //         }
    //     },
    //     error: function (data) {
    //         console.log(data);
    //     },
    //     fail: function (data) {
    //         console.log(data);
    //     }
    // })

    $('#header-menu-btn').on('click', function () {
        $('aside').addClass('active');
        $('.overlay').addClass('active');
    })

    $('.overlay').on('click', function () {
        $('aside').removeClass('active');
        $('.overlay').removeClass('active');
    })

    $('.work_overlay, .work button').on('click', function () {
        $('.work_overlay').removeClass('active');
        $('.work').removeClass('active');
    })
})