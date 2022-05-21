import { RefreshIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../typings'
import { getTweets } from '../utils/fetchTweets'
import TweetBox from './TweetBox'
import TweetPost from './TweetPost'

interface Props {
  tweets: Tweet[]
}

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  const [userReload, setUserReload] = useState(false)
  console.log('tweets', tweets)

  const handleRefresh = async () => {
    if (userReload) return
    setUserReload(true)
    const refreshToast = toast.loading('Reloading...')
    const tweets = await getTweets()
    setTweets(tweets)
    toast.success('Reloaded Tweets', {
      id: refreshToast,
    })
    setUserReload(false)
  }

  return (
    <div className="col-span-7 overflow-scroll md:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* TweetBox */}
      <div className="">
        <TweetBox />
      </div>
      {/* tweet posts */}
      {tweets.map((tweet) => (
        <TweetPost key={tweet._id} tweet={tweet} />
      ))}
    </div>
  )
}

export default Feed
