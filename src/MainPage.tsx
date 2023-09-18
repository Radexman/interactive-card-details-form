import Sidebar from './Sidebar';

const MainPage = () => {
  return (
    <main className="min-h-screen flex-col items-center justify-start bg-neutral-white lg:flex-row">
      <Sidebar />
    </main>
  );
};

export default MainPage;
