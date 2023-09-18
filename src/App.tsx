import Sidebar from './Sidebar';
import CardForm from './CardForm';

const App = () => {
  return (
    <main className="flex flex-col justify-center gap-20 bg-neutral-white xl:flex-row xl:justify-between">
      <Sidebar />
      <CardForm />
    </main>
  );
};

export default App;
