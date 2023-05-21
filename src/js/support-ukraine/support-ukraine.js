import { fundArray } from './funds-array';
import Swiper from 'swiper';

const supportListEl = document.querySelector('.support__list');
const btnSwiperEl = document.querySelector('.swiper-button-next');

const renderSupportList = items => {
  const listItems = items
    .map((item, index) => {
      const { title, url, img, img2 } = item;
      const number = (index + 1).toString().padStart(2, '0');
      return `
          <li class="support__list-item swiper-slide">
            <a
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="company icon"
              class="support__link"
              href="${url}"
            >
              <img
                src="${img}"
                alt="${title}"
                class="support__logo"
                srcset="${img} 1x, ${img2} 2x" 
                width="149"
                height="32"
                loading="lazy"
              />
            </a>
            <span class="support__number">${number}</span>
          </li>
              `;
    })
    .join('');
  supportListEl.innerHTML = `${listItems}`;
};

renderSupportList(fundArray);

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 19,
  slidesPerView: 'auto',
  rewind: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.swiper-button-next',
  },

  plugins: {
    scrollContainer: true,
  },
});

swiper.update();

btnSwiperEl.addEventListener('click', () => {
  swiper.slideNext();
});
