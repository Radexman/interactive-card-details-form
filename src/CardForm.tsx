const CardForm = ({ handleChangeName }) => {
  return (
    <div className="xl:mr-22 z-20 mx-auto flex items-center justify-center">
      <form className="max-w-2xl space-y-4 p-6">
        <div className="flex w-80 flex-col">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-widest text-neutral-veryDarkViolet"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            className="rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
            placeholder="e.g. Jane Appleseed"
            onChange={(name) => handleChangeName(name)}
          />
        </div>
        <div className="flex w-80 flex-col">
          <label
            htmlFor="card-number"
            className="text-xs uppercase tracking-widest text-neutral-veryDarkViolet"
          >
            Card Number
          </label>
          <input
            type="text"
            className="rounded-md border-2 border-neutral-darkGrayishVioler bg-neutral-white p-2 px-4 text-sm font-bold text-neutral-veryDarkViolet placeholder:text-neutral-lightGrayishViolet"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
      </form>
    </div>
  );
};

export default CardForm;
