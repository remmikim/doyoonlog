import React, { useCallback, useEffect, useState } from "react";
import { cusdis, link } from "site.config";
import { ReactCusdis } from "react-cusdis";

type Props = {
  id: string;
  slug: string;
  title: string;
};

const Cusdis: React.FC<Props> = ({ id, slug, title }) => {
  const [value, setValue] = useState(0);

  const onDocumentElementChange = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  useEffect(() => {
    const changesObserver = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.forEach((mutation: MutationRecord) => {
        onDocumentElementChange();
      });
    });

    changesObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
    });

    return () => {
      changesObserver.disconnect();
    };
  }, [onDocumentElementChange]);

  const isDarkMode = document.documentElement.classList.contains("dark");

  const cusdisTheme = isDarkMode ? "dark" : "light";

  const cusdisStyles = `
    .cusdis-thread {
      background-color: ${isDarkMode ? "#3F4045" : "#FFFFFF"};
      /* Add other custom styles for dark mode here */
    }
  `;

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerText = cusdisStyles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [cusdisStyles]);

  return (
    <>
      <div id="comments" className="mt-10">
        <ReactCusdis
          key={value}
          attrs={{
            host: cusdis.config.host,
            appId: cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${link}/${slug}`,
            theme: cusdisTheme,
          }}
        />
      </div>
    </>
  );
};

export default Cusdis;
