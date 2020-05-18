$(".support3_question_no").click(function () {
   $(".support3_to_contact_us").toggle();
});

$(".authorized").click(function () {
   $(".modal_overlay").toggleClass("active");
});

$(".modal_overlay").click(function () {
   $(this).removeClass("active");
});

$(".authorized_menu").click(function () {
   $(".modal_overlay").addClass("active");
});

$(".modal_overlay").removeClass("default");
$(window).scroll(function () {
   if ($(this).scrollTop() > 61) {
      $(".modal_overlay").addClass("default");
   } else {
      $(".modal_overlay").removeClass("default");
   }
});

$(".tabs_menu a").click(function (e) {
   e.preventDefault();
   $(".tabs_menu .active").removeClass("active");
   $(this).addClass("active");
   var tab = $(this).attr("href");
   $(".tab").not(tab).css({
      display: "none"
   });
   $(tab).fadeIn(1000);
});

$(".offer_reg_btn").click(function () {
   $(".offer_reg_company_wrap").addClass("active");
   $(".offer_reg").css("display", "none");
});

$(".offer_reg_company_btn").click(function () {
   $(".offer_reg_company_btn_popup").toggleClass("active");
});

$(".my_offer_company_small").click(function () {
   $(".my_offer_company_small_commit").toggleClass("active");
});

$(document).ready(function () {
   $('input[type="tel"]').mask("+7 (999) 999-99-99");
});