import Image from "next/image"
import { IoMenu, IoHeart, IoNotificationsSharp, IoSettingsSharp, IoPersonCircleOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="items-center w-full h-[100px] border-b-[1px] bg-white justify-center">
      <div className="flex justify-between py-8 px-20">
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
          <div className="flex w-8 h-8 rounded-full bg-white items-center justify-center border-[1px] border-neutral-200">
            <IoHeart size={18} />
          </div>
          <div className="flex w-8 h-8 rounded-full border-[1px] border-neutral-200 items-center justify-center">
            <IoNotificationsSharp size={18} />
          </div>
          <div className="flex w-8 h-8 rounded-full border-[1px] border-neutral-200 items-center justify-center">
            <IoSettingsSharp size={18} />
          </div>
          <div className="flex w-8 h-8 rounded-full border-[1px] border-neutral-200 items-center justify-center">
            <IoPersonCircleOutline size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header