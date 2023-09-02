import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@styles/globals.css'
import '@styles/notion.css'
import useThemeEffect from '@hooks/useThemeEffect'
import useGtagEffect from '@hooks/useGtagEffect'
import Scripts from '@components/Scripts'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import Scripts from 'next/script'

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  useThemeEffect()
  useGtagEffect()

  return (
    <>
      <Scripts
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5580310153725477"
     crossorigin="anonymous"></script>/>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
