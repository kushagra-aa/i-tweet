import {
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'

const TweetBox = () => {
  const [input, setInput] = useState<string>('')
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="http://links.papareact.com/gll"
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form action="" className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's Upp?"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 space-x-2 text-twitter">
              {/* icons */}
              <PhotographIcon className="h5 w-5 cursor-pointer transition-transform duration-150 ease-in-out hover:scale-150" />
              <SearchCircleIcon className="h5 w-5" />
              <EmojiHappyIcon className="h5 w-5" />
              <CalendarIcon className="h5 w-5" />
              <LocationMarkerIcon className="h5 w-5" />
            </div>
            <button
              disabled={!input}
              className="rounded-full bg-twitter px-5 py-2 font-bold text-white transition-opacity duration-200 ease-in-out disabled:opacity-40"
            >
              Make Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
