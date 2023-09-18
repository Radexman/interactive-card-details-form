import CardFront from './CardFront';

const Sidebar = () => {
  return (
    <div className="realtive">
      <img
        src="src\assets\images\bg-main-desktop.png"
        className="hidden lg:block"
        alt=""
      />
      <img
        src="src\assets\images\bg-main-mobile.png"
        className="block h-72 w-full lg:hidden"
        alt=""
      />
      <CardFront />
    </div>
  );
};
export default Sidebar;
