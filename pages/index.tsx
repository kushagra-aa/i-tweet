import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import SideBar from '../components/SideBar'
import { getTweets } from '../utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {
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
        <Feed tweets={tweets} />
        {/* Widgets */}
        <Widgets />
      </main>
    </>
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
