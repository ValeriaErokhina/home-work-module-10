//первое задание
document.querySelector('.play_btn').addEventListener('click', function(e) {
  e.target.closest('.play_btn').classList.toggle('play_btn--toggle');
})
//второе задание
const button = document.querySelector("#btn");

button.addEventListener('click', () => {
   alert(`Ширина: ${window.screen.width}. Высота: ${window.screen.height}.`);
});
