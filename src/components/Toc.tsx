import { useState } from 'react';

const Toc = () => {
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);
  return useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    setHeadingEls(headingElements);

    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);
}

export default Toc.
