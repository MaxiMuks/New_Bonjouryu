let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    // Element.classList.toggle
    // toggle, 전등 스위치를 껐다 켰다 하는 행위 처럼, 0과 1이 반복되는 행위를 의미합니다.
    // 즉, 기존 값이 0이었다면 1로 바뀌고 기존 값이 1이었다면, 0으로 바뀌게 됩니다.
    // 그래서 toggle 메서드는 클래스가 존재한다면 클래스를 제거하고, 클래스가 존재하지 않는다면 클래스를 추가하는 메서드입니다.
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


// 검색 부분
window.onscroll = () => {
    // ele.classList.remove(String)
    // 클래스의 속성값을 체크하여 제거한다. 없는 경우 무시
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle('active');
}

document.querySelector("#search-close").onclick = () => {
    document.querySelector("#search-form").classList.remove('active');
}

// 슬라이드 배너 부분
var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 루프(Loop)는 코드 블록을 여러 번 실행 할 수 있게 해준다.
    loop:true,
  });