import { useState, useEffect } from 'react';

const Toc = () => {
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    setHeadingEls(headingElements);

    headingElements.map((header) => {
      observer.observe(header);
    });
  }, []);

  // TODO: Render the TOC based on headingEls and currentId
  
  return (
    <div>
      {/* Render your Table of Contents here */}
    </div>
  );
}

export default Toc;
