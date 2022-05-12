const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const start = $("#header_start");
const navUser = $(".header_navbar .header_navbar-user");
const headerUser = $("#header_start .header_navbar-user");
const wrap = $(".wrapper");
const selectNav = navUser.querySelector(".header_user-select");
const selectHeader = headerUser.querySelector(".header_user-select");
const optionWhere = $(".options_where");
const whereInput = $(".options_where-decriptions.options_where-input");
const before = window.getComputedStyle(optionWhere, "::before");
const optionOrder = $$(".options_order");
const convertArr = Array.from(optionOrder);

function webActive() {
  handleScroll();
  handleSelectOptions();
}
//  Xử lí khi scroll thì header hiện
function handleScroll() {
  document.onscroll = function () {
    const scrollTop = window.scrollY;
    if (scrollTop >= 100) {
      start.style.opacity = "1";
      $(".header_navbar").style.opacity = "0";
      $(".header_option").style.opacity = "0";
    } else {
      $(".header_navbar").style.opacity = "1";
      $(".header_option").style.opacity = "1";
      // $(".header_navbar").style.display = "block";
      // $(".header_navbar").style.display = "flex";
      // $(".header_option").style.display = "block";
      // $(".header_option").style.display = "flex";
      start.style.opacity = "0";
    }
  };
}
// xử lí các sự kiên ở select và  options
function handleSelectOptions() {
  // xử lí user
  wrap.addEventListener("click", function (e) {
    var navAll = navUser.childNodes;
    var headAll = headerUser.childNodes;
    var all = Array.from(navAll).concat(Array.from(headAll));

    all.forEach(function (element) {
      element.onclick = function () {
        selectNav.classList.toggle("block");
        selectHeader.classList.toggle("block");
      };
    });
    if (e.target === navUser || e.target === headerUser) {
      selectNav.classList.toggle("block");
      selectHeader.classList.toggle("block");
    } else {
      selectNav.classList.remove("block");
      selectHeader.classList.remove("block");
      $(".options_order:nth-child(3)").classList.remove("active");
      $(".options_order:nth-child(4)").classList.remove("active");
    }
  });
}
webActive();
// Xử lí thao tác trên thanh options
// $(".options_where").addEventListener("click", function () {
//   Object.assign($(".options_where").style, {
//     borderBottomRightRadius: "26px",
//     borderTopRightRadius: "26px",
//     width: "25%",
//     boxShadow: "1px 2px 5px 5px rgba(0, 0, 0, 0.2)",
//   });
//   $(".options_anywhere").style.display = "block";
// });

// xử lí blur input
//   whereInput.addEventListener("blur", function () {
//     $(".options_where").removeAttribute("style");
//   });
// }

// .options_where:hover .options_anywhere {
//   display: block;
// }
// .options_dayexp:hover .options_calendar-flex3 {
//   display: block;
// }
// .options_order:hover .options_calendar-flex2 {
//   display: block;
// }
// .options_order:hover .options_calendar-flex {
//   display: block;
// }
// .options_custom-search-btn:hover ~ .custom_add-oject {
//   display: none;
// }
// .options_custom:hover .custom_add-oject {
//   display: block;
// }
// .options_custom:hover .options_tittle-search {
//   display: block;
// }
// .options_custom-search-btn:hover .options_tittle-search {
//   display: block;
//   transition: 2s;
// }
// .options_where:hover
//   ~ .options_custom
//   > .options_custom-search
//   .options_tittle-search {
//   display: block;
// .options_where:hover .options_where .options_where::before {
//   display: none;
// }
// .options_where:hover {
// width: 24%;
// transition: 0.2s linear;
// // .options_order:hover
//   ~ .options_custom
//   > .options_custom-search
//   .options_tittle-search {
//   display: block;
// }
