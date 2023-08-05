export const getIntersectionObserver = () => {
  const observer = new IntersectionObserver( // observer 생성
    (entries) => { console.log(entries) }, // callback
    options // options
  );
  return observer;
};
import { Dispatch, SetStateAction } from 'react';

const observerOption = {
  threshold: 0.4,
  rootMargin: '-76px 0px 0px 0px',
};

export const getIntersectionObserver = (setState: Dispatch<SetStateAction<string>>) => {
  let direction = '';
  let prevYposition = 0;

  // scroll 방향 check function
  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = 'down';
    else direction = 'up';

    prevYposition = window.scrollY;
  };

  // observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);

      if ((direction === 'down' && !entry.isIntersecting) ||
        (direction === 'up' && entry.isIntersecting)) {
        setState(entry.target.id);
      }
    });
  }, observerOption);

  return observer;
}
