import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import SideBar from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>I Tweet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto grid max-h-screen grid-cols-9 overflow-hidden lg:max-w-6xl">
        {/* SideBar */}
        <SideBar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
    </>
  )
}

export default Home
