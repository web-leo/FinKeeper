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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoXCIuc3VwcG9ydDNfcXVlc3Rpb25fbm9cIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAkKFwiLnN1cHBvcnQzX3RvX2NvbnRhY3RfdXNcIikudG9nZ2xlKCk7XHJcbn0pO1xyXG5cclxuJChcIi5hdXRob3JpemVkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgJChcIi5tb2RhbF9vdmVybGF5XCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbiQoXCIubW9kYWxfb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuJChcIi5hdXRob3JpemVkX21lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAkKFwiLm1vZGFsX292ZXJsYXlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuJChcIi5tb2RhbF9vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwiZGVmYXVsdFwiKTtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gNjEpIHtcclxuICAgICAgJChcIi5tb2RhbF9vdmVybGF5XCIpLmFkZENsYXNzKFwiZGVmYXVsdFwiKTtcclxuICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5tb2RhbF9vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwiZGVmYXVsdFwiKTtcclxuICAgfVxyXG59KTtcclxuXHJcbiQoXCIudGFic19tZW51IGFcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAkKFwiLnRhYnNfbWVudSAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICB2YXIgdGFiID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgJChcIi50YWJcIikubm90KHRhYikuY3NzKHtcclxuICAgICAgZGlzcGxheTogXCJub25lXCJcclxuICAgfSk7XHJcbiAgICQodGFiKS5mYWRlSW4oMTAwMCk7XHJcbn0pO1xyXG5cclxuJChcIi5vZmZlcl9yZWdfYnRuXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgJChcIi5vZmZlcl9yZWdfY29tcGFueV93cmFwXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAkKFwiLm9mZmVyX3JlZ1wiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxufSk7XHJcblxyXG4kKFwiLm9mZmVyX3JlZ19jb21wYW55X2J0blwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICQoXCIub2ZmZXJfcmVnX2NvbXBhbnlfYnRuX3BvcHVwXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG59KTtcclxuXHJcbiQoXCIubXlfb2ZmZXJfY29tcGFueV9zbWFsbFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICQoXCIubXlfb2ZmZXJfY29tcGFueV9zbWFsbF9jb21taXRcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAkKCdpbnB1dFt0eXBlPVwidGVsXCJdJykubWFzayhcIis3ICg5OTkpIDk5OS05OS05OVwiKTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
