import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CardForm from './components/CardForm';

const App = () => {
  const [cardData, setCardData] = useState({
    cardholderName: '',
    cardNumber: '',
    expieryDateMonth: '',
    expieryDateYear: '',
    cardCvc: '',
  });

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  console.log(cardData);

  return (
    <main className="flex flex-col justify-center gap-20 bg-neutral-white xl:flex-row xl:justify-between">
      <Sidebar cardData={cardData} />
      <CardForm cardData={cardData} handleChange={handleChange} />
    </main>
  );
};

export default App;
