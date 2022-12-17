import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/logo.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon//logo.jpg"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon//logo.jpg"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/logo.jpg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/logo.jpg" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`a blog where you learn about trends in the interior.`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Interior.Blog" />
      <meta name="twitter:creator" content="@Interior.Blog" />
      <meta name="twitter:title" content="Interior.Blog" />
      <meta name="twitter:description" content="A blog dedicated to cooking up recipes for all those far far and away." />
      <meta property="twitter:image" content="https://interior-blog-theta.vercel.app/images/starwarssocialfinal.jpg"/>
  
    </Head>
  )
}
