const pageGreeting = document.querySelector(".section");
const swohLetter = document.querySelector(".envelope_top");
const clickEnvelope = document.querySelector(".envelope");
const showPaperGreeting = document.querySelector(".paper_greeting");
const btnBackPage = document.querySelector(".back_page")
const pageFirework = document.querySelector('.start-page');
const btnNextPage = document.querySelector('.next_page');
const audioPause = document.querySelector('audio');

function readEnvelope(){
  swohLetter.classList.toggle("paper_greeting-close");
  clickEnvelope.classList.toggle("rotate_envelope");
  showPaperGreeting.classList.toggle("show_paper_greeting");
}

clickEnvelope.addEventListener("click", () => {
  readEnvelope();
});

btnNextPage.addEventListener("click", () => {
  pageFirework.classList.add("hide_pageFireWork");
  pageGreeting.classList.add("show_page_section");
  audioPause.pause();
});

btnBackPage.addEventListener("click", () => {
  pageFirework.classList.remove("hide_pageFireWork");
  pageGreeting.classList.remove("show_page_section");
  audioPause.play();
});

