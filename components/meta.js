import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon//logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon//logo.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/logo.png"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/logo.png" />
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
      <meta name="twitter:description" content="Тренди в дизайні інтер'єру" />
      <meta property="twitter:image" content="https://images.ctfassets.net/hwylvnyoxqeg/4qiRLbAK24KfGj8qN0WU4t/9f957ba33da0313f69be068ca14f4268/______________________________________-______.jpg?w=2048&q=75"/>
  
      <meta property="og:title" content="Stahlwalker Cookbook"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://interior-blog-theta.vercel.app/posts/trendi-v-dizaini-interyeru"/>
      <meta property="og:image" content="https://images.ctfassets.net/hwylvnyoxqeg/4qiRLbAK24KfGj8qN0WU4t/9f957ba33da0313f69be068ca14f4268/______________________________________-______.jpg?w=2048&q=75"/>
      <meta property="fb:app_id" content="511134710437125"/>
      <meta property="og:description" content="A blog dedicated to cooking up recipes for all those far far and away."/>
    </Head>
  )
}
