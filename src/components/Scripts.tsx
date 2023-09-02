import Script from "next/script"
import CONFIG from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?idG-6LY9VYBWVB`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6LY9VYBWVB', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5580310153725477"
      async
      crossorigin="anonymous"
    />
  </>
)

export default Scripts
