const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgesEl = document.querySelector("header .badges");
// lodash의 메서드 throttle = 스크롤이벤트가 발생하는 주기에 제한을 검
window.addEventListener(
  "scroll",
  _.throttle(() => {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
      // badgesEl.style.display = "none";
      // gsap.to(요소, 시간, 옵션)
      gsap.to(badgesEl, 0.3, {
        opacity: 0,
        display: "none",
      });
    } else {
      // badgesEl.style.display = "block";
      gsap.to(badgesEl, 0.3, {
        opacity: 1,
        display: "block",
      });
    }
  }, 200)
);

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((el, i) => {
  gsap.to(el, 1, {
    delay: (i + 1) * 0.7,
    opacity: 1,
  });
});

// 사용법 new Swiper("대상" , {옵션})
const swiper = new Swiper(".notice-line .swiper", {
  direction: "vertical", //방향
  // autoplay: true,
  // loop: true,
});

const noticeAdd = document.querySelector(
  ".inner__left .material-symbols-outlined"
);
