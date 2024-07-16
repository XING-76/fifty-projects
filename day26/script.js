const SLIDER_CONTAINER = document.querySelector('.slider-container');
const SLIDE_RIGHT = document.querySelector('.right-slide');
const SLIDE_LEFT = document.querySelector('.left-slide');
const UP_BUTTON = document.querySelector('.up-button');
const DOWN_BUTTON = document.querySelector('.down-button');
const SLIDES_LENGTH = SLIDE_RIGHT.querySelectorAll('div').length;

let ACTIVE_SLIDE_INDEX = 0;

SLIDE_LEFT.style.top = `-${(SLIDES_LENGTH - 1) * 100}vh`;

UP_BUTTON.addEventListener('click', () => handleOnSlide(1));
DOWN_BUTTON.addEventListener('click', () => handleOnSlide(-1));

/**
 * 相關邏輯說明
 * + SLIDES_LENGTH:
 * 這一步是為了確保索引始終為正數。即使索引變成負數，加上 SLIDES_LENGTH 後也會變成正數
 * 例如，如果 ACTIVE_SLIDE_INDEX 是 0，向下滑動（direction 為 -1），計算結果為 -1 + SLIDES_LENGTH。這樣可以確保結果是正數
 *
 * % SLIDES_LENGTH:
 * 最後取模 SLIDES_LENGTH，確保索引在 [0, SLIDES_LENGTH - 1] 範圍內循環
 * 例如，當索引為 SLIDES_LENGTH 時，取模 SLIDES_LENGTH 結果為 0
 */
const handleOnSlide = (direction) => {
    const SLIDER_HEIGHT = SLIDER_CONTAINER.clientHeight;
    ACTIVE_SLIDE_INDEX = (ACTIVE_SLIDE_INDEX + direction + SLIDES_LENGTH) % SLIDES_LENGTH;

    SLIDE_RIGHT.style.transform = `translateY(-${ACTIVE_SLIDE_INDEX * SLIDER_HEIGHT}px)`;
    SLIDE_LEFT.style.transform = `translateY(${ACTIVE_SLIDE_INDEX * SLIDER_HEIGHT}px)`;
};
