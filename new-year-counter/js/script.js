// Отримуємо всі елементи з атрибутом data-timer
var timers = document.querySelectorAll('[data-timer]');

timers.forEach(function (timer) {
  // Встановлюємо дату та час, коли таймер повинен зупинитися
  var countDownDate = new Date(timer.getAttribute('data-end')).getTime();

  // Функція для оновлення таймера
  function updateTimer() {
    // Отримуємо поточний час
    var now = new Date().getTime();

    // Знаходимо різницю між зараз і часом зупинки
    var distance = countDownDate - now;

    // Розраховуємо час для днів, годин, хвилин та секунд
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Виводимо результат в елемент з id="demo"
    timer.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // Якщо таймер досягнув кінця, виводимо текст
    if (distance < 0) {
      timer.innerHTML = "EXPIRED";
    } else {
      // Якщо таймер ще не досяг кінця, оновлюємо його
      requestAnimationFrame(updateTimer);
    }
  }

  // Запускаємо таймер
  requestAnimationFrame(updateTimer);
});
// ================================================
var audio = document.getElementById('myAudio');
var button = document.getElementById('play-btn');

button.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
audio.volume = 0.3; // Встановлюємо гучність на 50%
