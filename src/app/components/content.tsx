import Image from 'next/image';

const Content = () => {
  return (
    <div className="flex w-full py-8 px-20 h-[350px] gap-x-4 mx-auto">
      <article className="flex w-[550px] h-[250px] bg-blue-400">
        <div className="container mx-auto px-4">
          <span className="text-black font-bold">지금 예약하고 첫 렌탈 20% 할인 받으세요!</span>
          <Image
            alt="자동차 이미지" 
            src="/images/Volkswagen.png"
            width={300}
            height={100}
          />
        </div>
      </article>
      <article className="flex w-[550px] h-[250px] bg-blue-600">
        <div className="container mx-auto px-4">
          <span className="text-black font-bold">지금 예약하고 첫 렌탈 20% 할인 받으세요!</span>
          <Image
            alt="자동차 이미지" 
            src="/images/Volkswagen.png"
            width={300}
            height={100}
          />
        </div>
      </article>
    </div>
  )
}

export default Content