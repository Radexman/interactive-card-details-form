import cardFrontImage from './assets/images/bg-card-front.png';

const CardFront = () => {
  return (
    <div className="xl::left-36 absolute left-6 top-36 z-20">
      <div className="relative w-96 text-white">
        <img src={cardFrontImage} className="" alt="" />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-neutral-white"></div>
            <div className="h-4 w-4 rounded-full border-2"></div>
          </div>
          <div className="mt-16 text-2xl tracking-widest ">
            <p>0000 0000 0000 0000</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest">Jane Appleseed</p>
            <p className="text-xs uppercase tracking-widest">08/23</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
