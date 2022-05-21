import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'
import Logo from './../../assets/logo.png'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ isDark, setIsDark }: Props) => {
  const { data: session } = useSession()
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img className="m-3 ml-7 h-14 w-10" src={Logo.src} alt="" />
      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notifications" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow
        Icon={UserIcon}
        title={session ? 'Sign Out' : 'Sign In'}
        onClick={session ? signOut : signIn}
      />
      {isDark ? (
        <SideBarRow
          onClick={() => {
            setIsDark(!isDark)
          }}
          Icon={SunIcon}
          title="Light Mode"
        />
      ) : (
        <SideBarRow
          onClick={() => {
            setIsDark(!isDark)
          }}
          Icon={MoonIcon}
          title="Dark Mode"
        />
      )}
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default SideBar
