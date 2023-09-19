const CardForm = ({ cardData, handleChange }) => {
  return (
    <div className="xl:mr-22 z-20 mx-auto flex items-center justify-center">
      <form className="max-w-2xl space-y-4 p-6">
        <div className="flex w-96 flex-col">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-widest text-neutral-veryDarkViolet"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            required={true}
            name="cardholderName"
            onChange={handleChange}
            className="rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
            placeholder="e.g. Jane Appleseed"
          />
          {!cardData.cardholderName && (
            <span className="error">This field can't be empty</span>
          )}
        </div>
        <div className="flex w-96 flex-col">
          <label
            htmlFor="card-number"
            className="text-xs uppercase tracking-widest text-neutral-veryDarkViolet"
          >
            Card Number
          </label>
          <input
            type="number"
            required={true}
            name="cardNumber"
            onChange={handleChange}
            maxLength={16}
            className="rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {!cardData.cardNumber && (
            <span className="error">This field can't be empty</span>
          )}
        </div>
        <div className="flex w-96 items-center justify-evenly">
          <div className="flex flex-col items-start">
            <label
              htmlFor="card-exp"
              className="text-xs uppercase tracking-widest
            text-neutral-veryDarkViolet"
            >
              exp.date(mm/yy)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                required={true}
                name="expieryDateMonth"
                onChange={handleChange}
                max={12}
                className="w-24 rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
                placeholder="MM"
              />
              <input
                type="number"
                required={true}
                name="expieryDateYear"
                onChange={handleChange}
                max={2050}
                className="w-24 rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
                placeholder="YY"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="card-cvc"
              className="text-xs uppercase tracking-widest
            text-neutral-veryDarkViolet"
            >
              cvc
            </label>
            <input
              type="number"
              required={true}
              name="cardCvc"
              onChange={handleChange}
              maxLength={3}
              className="w-42 rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
              placeholder="e.g.123"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
