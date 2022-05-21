import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import SideBar from '../components/SideBar'
import { getTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
  const [isDark, setIsDark] = useState<boolean>(true)
  return (
    <div className={`min-w-screen z-0 ${isDark && 'dark'}`}>
      <Head>
        <title>I Tweet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Toaster />

      <main className="z-10 mx-auto grid max-h-screen grid-cols-9 overflow-hidden lg:max-w-6xl">
        {/* SideBar */}
        <SideBar setIsDark={setIsDark} isDark={isDark} />
        {/* Feed */}
        <Feed tweets={tweets} />
        {/* Widgets */}
        <Widgets isDark={isDark} />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets: Tweet[] = await getTweets()
  return {
    props: {
      tweets,
    },
  }
}
