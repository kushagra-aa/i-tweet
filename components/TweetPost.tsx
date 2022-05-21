import { Comment, CommentBody, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

interface Props {
  tweet: Tweet
}
const TweetPost = ({ tweet }: Props) => {
  const [comments, setComments] = useState<Comment[]>([])
  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const commentToast = toast.loading('Posting Comment...')

    // Comment logic
    const comment: CommentBody = {
      comment: input,
      tweetId: tweet._id,
      username: session?.user?.name || 'Unknown User',
      profileImg: session?.user?.image || 'https://links.papareact.com/gll',
    }

    const result = await fetch(`/api/addComment`, {
      body: JSON.stringify(comment),
      method: 'POST',
    })

    toast.success('Commented', {
      id: commentToast,
    })

    setInput('')
    setCommentBoxVisible(false)
    refreshComments()
  }

  useEffect(() => {
    refreshComments()
  }, [])

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        <img
          src={tweet.profileImg}
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="">
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username?.replace(/\s+/g, '').toLocaleLowerCase()} ·
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div
          onClick={() => {
            setCommentBoxVisible(!commentBoxVisible)
          }}
          className="post-icon"
        >
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
        <div className="post-icon">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>
        <div className="post-icon">
          <HeartIcon className="h-5 w-5" />
        </div>
        <div className="post-icon">
          <UploadIcon className="h-5 w-5" />
        </div>
      </div>
      {commentBoxVisible && session && (
        <form onSubmit={handleSubmit} className="mt-3 flex space-x-3">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            className="flex-1 rounded-lg bg-gray-100 p-2 outline-none"
            type="text"
            placeholder="Share your Comment"
          />
          <button
            disabled={!input}
            type="submit"
            className="rounded-md bg-dark/80 px-3 text-accent disabled:bg-transparent disabled:text-gray-400"
          >
            Comment
          </button>
        </form>
      )}
      {comments?.length > 0 && (
        <div className="mmt-5 my-2 max-h-44 space-y-5 overflow-scroll border-t border-gray-100 p-5 scrollbar-hide">
          {comments.map((comment) => (
            <div className="relative flex space-x-2" key={comment._id}>
              <hr className="absolute left-5 top-10 h-8 border-x border-accent/30" />
              <img
                src={comment.profileImg}
                alt=""
                className="h-7 w-7 rounded-full object-cover"
              />
              <div className="">
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold ">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    {' '}
                    @{comment.username
                      .replace(/\s+/g, '')
                      .toLocaleLowerCase()}{' '}
                    ·
                  </p>
                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p className="">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TweetPost
