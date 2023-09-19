import cardBackImage from '../assets/images/bg-card-back.png';

const CardBack = ({ cardData }) => {
  return (
    <div className="absolute right-6 top-6 z-10 xl:left-60 xl:top-96">
      <div className="relative w-96 text-white">
        <img src={cardBackImage} className="" alt="" />
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col p-4">
          <p className="absolute right-12 top-24">
            {!cardData.cardCvc ? '123' : cardData.cardCvc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
