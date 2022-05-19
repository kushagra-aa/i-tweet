import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const Widget = () => {
  return (
    <div className="col-span-2 mt-2 hidden px-2 md:inline">
      {/* Search Box */}
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search ITweet"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="a_kushagraa"
        options={{ height: '90vh' }}
      />
    </div>
  )
}

export default Widget
