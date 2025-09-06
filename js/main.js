

$(document).ready(function () {

  // Modal
  $('.open-modal-reg').on('click', function(e) {
    e.preventDefault();
    $('.modal--reg').addClass('modal--open');
  })

  $('.open-modal-success').on('click', function(e) {
    e.preventDefault();
    $('.modal--success').addClass('modal--open');
  })

  $('.modal__close').on('click', function(e) {
    $('.modal').removeClass('modal--open');
  })

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal--open');
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

});


const playBtn = document.getElementById("playBtn");
const player = document.querySelector(".player"); // родительский блок

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#6FCDB2",
  progressColor: "#ffffff",
  cursorColor: "transparent",
  barWidth: 6,
  barRadius: 6,
  barGap: 4,
  responsive: true,
  height: 60,
  normalize: true,
});

wavesurfer.load("audio.mp3");

playBtn.addEventListener("click", () => {
  wavesurfer.playPause();

  if (wavesurfer.isPlaying()) {
    // playBtn.textContent = "⏸";
    player.classList.add("player--active");
  } else {
    // playBtn.textContent = "▶";
    player.classList.remove("player--active");
  }
});

// когда трек полностью закончился
wavesurfer.on("finish", () => {
  // playBtn.textContent = "▶";
  player.classList.remove("player--active");
});