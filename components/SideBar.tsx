import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'

const SideBar = () => {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
        alt=""
      />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow Icon={UserIcon} title="Sign In" />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default SideBar
