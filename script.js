const swiperWrapper = document.querySelector('.swiper-wrapper');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;

swiperWrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPos = e.clientX;
  swiperWrapper.style.transition = 'none';
  currentTranslate = -swiperWrapper.style.transform.replace('translateX(', '').replace('px)', '') || 0;
});

swiperWrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const moveX = e.clientX - startPos;
  swiperWrapper.style.transform = `translateX(${currentTranslate + moveX}px)`;
});

swiperWrapper.addEventListener('mouseup', () => {
  isDragging = false;
  swiperWrapper.style.transition = 'transform 0.3s ease-in-out';
});

swiperWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  swiperWrapper.style.transition = 'transform 0.3s ease-in-out';
});
