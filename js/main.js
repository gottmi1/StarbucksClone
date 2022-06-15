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
new Swiper(".notice-line .swiper", {
  direction: "vertical", //방향
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  direction: "horizontal", // 기본값이라 안 써도 됨
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 첫 슬라이드가 센터를 차지하게
  loop: true,
  autoplay: {
    delay: 5000, // 기본값 3000
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.style.height = 0;
  } else {
    promotionEl.style.height = "693px";
  }
});

const random = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const floationgObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
};

floationgObject(".floating1", 1, 15);
floationgObject(".floating2", 1.5, 20);
floationgObject(".floating3", 2, 20);

// 스크롤매직, 새로운 섹션에 들어가면 애니메이션 실행되게?
const spyEls = document.querySelectorAll("section.scroll-spy"); //scroll-spy라는 클래스가 붙은 section들 중
spyEls.forEach((el) => {
  new ScrollMagic.Scene({
    triggerElement: el, // 보여질지 감시할 요소를 지정
    triggerHook: 0.7, // triggerEl이 걸렸을 때 애니메이션 실행될 시기지정  뷰포트기준으로 맨위가 0, 맨 아래가 1
  })
    .setClassToggle(el, "show") // toggle할 요소 , "클래스명" == replace
    .addTo(new ScrollMagic.Controller());
});
