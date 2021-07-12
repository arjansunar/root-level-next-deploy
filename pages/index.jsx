import Head from 'next/head'
import FAQ from '../components/Home/FAQ'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RootLevel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <FAQ />
    </div>
  )
}
