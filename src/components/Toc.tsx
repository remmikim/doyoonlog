import React, { useState, useEffect } from 'react';
import { getIntersectionObserver } from '../lib/observer';

const Toc = () => {
  const [currentId, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h1, h2, h3'));

    setHeadingEls(headingElements);

    headingElements.forEach((header) => {
      observer.observe(header);
    });

    return () => {
      headingElements.forEach((header) => {
        observer.unobserve(header);
      });
    };
  }, []);

  return (
    <div className="toc">
      <h2>Table of Contents</h2>
      <ul>
        {headingEls.map((header) => (
          <li key={header.id} className={currentId === header.id ? 'active' : ''}>
            <a href={`#${header.id}`}>{header.textContent}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toc;
