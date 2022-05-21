import { RefreshIcon } from '@heroicons/react/outline'
import { signIn, useSession } from 'next-auth/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../typings'
import { getTweets } from '../utils/fetchTweets'
import TweetBox from './Tweet/TweetBox'
import TweetPost from './Tweet/TweetPost'

interface Props {
  tweets: Tweet[]
}

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  const [userReload, setUserReload] = useState(false)
  const [input, setInput] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const { data: session } = useSession()

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

  const retweet = (tweet: any) => {
    setInput(`Retweeted from ${tweet.username} ${tweet.text}`)
    setImage(tweet.image)
  }

  return (
    <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide md:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-accent transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* TweetBox */}
      {session ? (
        <div className="">
          <TweetBox
            input={input}
            setInput={setInput}
            image={image}
            setImage={setImage}
            setTweets={setTweets}
          />
        </div>
      ) : (
        <p className="text-bold my-5 text-center text-lg capitalize text-gray-600">
          <span
            className="text-twitter cursor-pointer underline"
            onClick={() => signIn()}
          >
            sign in
          </span>{' '}
          to post
        </p>
      )}
      {/* tweet posts */}
      {tweets.map((tweet) => (
        <TweetPost key={tweet._id} retweet={retweet} tweet={tweet} />
      ))}
    </div>
  )
}

export default Feed
