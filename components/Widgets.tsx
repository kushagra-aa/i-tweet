import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

interface Props {
  isDark: boolean
}

const Widget = ({ isDark }: Props) => {
  const [input, setInput] = useState<string>('a_kushagraa')
  return (
    <div className="col-span-2 mt-2 hidden w-full px-2 md:inline">
      {/* Search Box */}
      <div className="my-5 mt-2 flex items-center rounded-full bg-gray-800 p-3">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
          type="text"
          placeholder="Search on Twitter"
          className="flex-1 !bg-gray-800 outline-none"
        />
        <div className="flex h-5 w-5 items-center justify-center text-gray-100">
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>
      <TwitterTimelineEmbed
        key={input}
        sourceType="profile"
        theme={isDark ? 'dark' : 'light'}
        screenName={`${input ? input : 'a_kushagraa'}`}
        options={{ height: '90vh' }}
      />
    </div>
  )
}

export default Widget
