import {
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet, TweetBody } from '../typings'
import { getTweets } from '../utils/fetchTweets'

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>
}

const TweetBox = ({ setTweets }: Props) => {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return
    setImage(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setImageUrlBoxIsOpen(false)
  }

  const postTweet = async () => {
    const tweetBody: TweetBody = {
      text: input,
      username: session?.user?.name || 'Anonymous',
      image: image,
      profileImg: session?.user?.image || ' ',
    }

    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetBody),
      method: 'POST',
    })

    const json = await result.json()

    const newTweets = await getTweets()
    setTweets(newTweets)
    toast('Tweet Posted', {
      icon: '👌',
    })
    return json
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    postTweet()
    setInput('')
    setImage('')
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || ' '}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Upp?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-accent">
              {/* icons */}
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className="h5 w-5 cursor-pointer transition-transform duration-150 ease-in-out hover:scale-150"
              />
              <SearchCircleIcon className="h5 w-5" />
              <EmojiHappyIcon className="h5 w-5" />
              <CalendarIcon className="h5 w-5" />
              <LocationMarkerIcon className="h5 w-5" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input}
              className="rounded-full bg-accent px-5 py-2 font-bold text-white transition-opacity duration-200 ease-in-out disabled:opacity-40"
            >
              Make Tweet
            </button>
          </div>
          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-accent/70 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 !bg-transparent p-2 text-white  outline-none placeholder:text-white"
                type="text"
                placeholder="Enter Image URL"
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                add image
              </button>
            </form>
          )}
          {image && (
            <img
              src={image}
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
              alt=""
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
