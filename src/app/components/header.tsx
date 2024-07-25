import Image from "next/image"
import { IoMenu, IoHeart, IoNotificationsSharp, IoSettingsSharp, IoPersonCircleOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-[80px] border-b border-black">
      <div className="flex">
        <Image 
          alt="logo"
          src="/images/logo.png"
          width={200}
          height={60}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
      </div>
      <div className="flex text-black gap-x-4">
        <div className="flex w-8 h-8 rounded-full border-black bg-slate-400 items-center justify-center">
          <IoHeart size={20} />
        </div>
        <div className="flex w-8 h-8 rounded-full border-black bg-slate-400 items-center justify-center">
          <IoNotificationsSharp size={25} />
        </div>
        <div className="flex w-8 h-8 rounded-full border-black bg-slate-400 items-center justify-center">
          <IoSettingsSharp size={25} />
        </div>
        <div className="flex w-8 h-8 rounded-full border-black bg-slate-400 items-center justify-center">
          <IoPersonCircleOutline size={25} />
        </div>
      </div>
    </div>
  )
}

export default Header