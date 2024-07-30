import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Content = () => {
  return (
    <div className="flex justify-between w-full py-8 px-20 h-[350px] mx-auto">
      <article className="flex relative w-[45%] h-[250px] bg-blue-400 px-4 py-5 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="relative">
            <span className="text-white text-xl font-bold">지금 예약하고 첫 렌탈 20% 할인 받으세요!</span>
            <br />
            <span className="text-white font-apple text-sm">
              첫 렌탈 고객만을 위한 특별 혜택! 지금 예약하시면 20% 할인을 제공해드립니다. 편리하고 빠른 예약 시스템을 이용해보세요.
            </span>
            <Button className="absolute left-0 bottom-[-50px]">렌트카</Button>
          </div>
          <Image
            alt="자동차 이미지" 
            src="/images/Volkswagen.png"
            width={250}
            height={100}
            className="absolute bottom-2 right-5"
          />
        </div>
      </article>
      <article className="flex relative w-[45%] h-[250px] bg-blue-400 px-4 py-5 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="relative">
            <span className="text-white text-xl font-bold">특정 모델 차량들 렌탈 할인 이벤트가 진행중입니다.</span>
            <br />
            <span className="text-white font-apple text-sm">
              특정 차량 모델 렌탈시 10~30%의 할인율이 적용중입니다. 지금 바로 이용해보세요.
            </span>
            <Button className="absolute left-0 bottom-[-50px]">렌트카</Button>
          </div>
          <Image
            alt="자동차 이미지" 
            src="/images/2018_Jeep_Wrangler_JK_Unlimited_2016_Jeep_Wrangler_Car_Chrysler.png"
            width={300}
            height={100}
            className="absolute bottom-0 right-5 "
          />
        </div>
      </article>
    </div>
  )
}

export default Content