import { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: any
}

const SideBarRow = ({ Icon, title, onClick }: Props) => {
  return (
    <div onClick={() => onClick?.()} className="sidebar-row">
      <Icon className="h-6 w-6 transition-all duration-300 ease-in-out " />
      <p className="hidden text-base font-light transition-all duration-300 ease-in-out md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SideBarRow
