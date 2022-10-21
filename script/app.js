
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

const initApp = () => {
  lazyLoad();
  initAd();
};

initApp();
