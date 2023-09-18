import { useState } from 'react';
import Sidebar from './Sidebar';
import CardForm from './CardForm';

const App = () => {
  const [name, setName] = useState('');

  const handleChangeName = (name) => {
    setName(name);
  };
  return (
    <main className="flex flex-col justify-center gap-20 bg-neutral-white xl:flex-row xl:justify-between">
      <Sidebar handleChangeName={handleChangeName} />
      <CardForm />
    </main>
  );
};

export default App;
