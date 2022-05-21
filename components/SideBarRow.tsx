import { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: () => {}
}

const SideBarRow = ({ Icon, title, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick?.()}
      className="group flex cursor-pointer select-none items-center space-x-2 rounded-full px-4 py-3 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:text-twitter"
    >
      <Icon className="h-6 w-6 transition-all duration-300 ease-in-out " />
      <p className="hidden text-base font-light transition-all duration-300 ease-in-out md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SideBarRow
