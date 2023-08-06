import React, { useState, useEffect } from 'react';
import { getIntersectionObserver } from 'src/libs/observer';

const Toc = () => {
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    setHeadingEls(headingElements);

    headingElements.forEach((header) => {
      observer.observe(header);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 여기서 실제 목차를 렌더링하는 JSX를 작성하세요.

  return (
    <div>
      {/* 목차 렌더링 JSX */}
    </div>
  );
};

export default Toc;
