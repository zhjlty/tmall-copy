//左边側栏按下变色
// $(function(){
//   $('.color_type_pink').click(function(){
//     $('.color_type_pink').addClass('active_pink');
//     $('.color_type_blue').removeClass('active_blue');
//
//   });
//
//   $('.color_type_blue').click(function(){
//     $('.color_type_blue').addClass('active_blue');
//     $('.color_type_pink').removeClass('active_pink');
//   });
//
// })




$(function() {

    $('.nav_side_left_body').on('click',e=>{
            $('.mui_left_nav').addClass('color_passive');
            $(e.target).parent('.mui_left_nav').removeClass('color_passive');
    })  
})










// var colorTypeBlue = $('.color_type_blue');
// var colorTypePink = $('.color_type_pink');
// var colorTypeYellow = $('.color_type_yellow');
//
//   colorTypeBlue.click(function(){
//     colorTypeBlue.css('background', 'blue');
//     colorTypeBlue.siblings().css('background', '#555');
//   })
//   colorTypePink.click(function(){
//     colorTypePink.css('background', 'pink');
//     colorTypePink.siblings().css('background', '#555');
//   })
//   colorTypeYellow.click(function(){
//     colorTypeYellow.css('background', 'yellow');
//     colorTypeYellow.siblings().css('background', '#555');
//   })
