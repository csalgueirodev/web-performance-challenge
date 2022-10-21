
const lazyLoad = () => {
  const images = document.querySelectorAll('img[data-src]');

  const lazyImageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) { return; }
      const image = entry.target;
      if (!image.dataset.src) { return; }
      image.src = image.dataset.src;
      delete image.dataset.src;
      lazyImageObserver.unobserve(image);
    });
  });

  images.forEach((entry) => {
    lazyImageObserver.observe(entry);
  });
};

const initAd = () => {
  const adSpace = document.querySelector('.main__advertising');
  adSpace.innerHTML = '<div style="max-width:100%;"><iframe src="https://imgflip.com/embed/6wy03z"></iframe></div>';
};

const initVideo = (e) => {
  e.preventDefault();
  const videoContainer = document.querySelector('.video__container');
  videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/072wpvM7aS8?autoplay=1" allow="autoplay" width="425" height="270"></iframe>';
};

const initApp = () => {
  lazyLoad();
  initAd();

  const video__link = document.querySelector('.video__link');
  video__link.addEventListener('click', initVideo);
};

initApp();
