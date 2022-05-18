import type { NextPage } from 'next'
import Head from 'next/head'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>I Tweet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* SideBar */}
        <SideBar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  )
}

export default Home
