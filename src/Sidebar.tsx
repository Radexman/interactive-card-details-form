import CardFront from './CardFront';
import CardBack from './CardBack';

const Sidebar = () => {
  return (
    <div>
      <div className="realtive">
        <img
          src="src\assets\images\bg-main-desktop.png"
          className="hidden max-h-screen xl:block"
          alt=""
        />
        <img
          src="src\assets\images\bg-main-mobile.png"
          className="block h-72 w-full xl:hidden"
          alt=""
        />
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
};
export default Sidebar;
