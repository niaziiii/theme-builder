export default function SubscribeForm() {
  return (
    <form className="flex flex-col px-5 pt-6 w-full text-lg leading-5 text-lime-400 bg-sky-50">
      <div className="self-center text-xl leading-6 text-center text-neutral-500">
        Get the best of the Stay Calm blog sent to your inbox
      </div>
      <div className="shrink-0 self-center mt-5 h-0.5 border-t-2 border-sky-600 border-solid w-[189px]" />
      <label
        htmlFor="nameInput"
        className="mt-6 text-base leading-3 text-zinc-600"
      >
        Name*
      </label>
      <input
        id="nameInput"
        type="text"
        placeholder="Type your name"
        className="justify-center py-2.5 mt-1.5 text-base bg-blue-100 text-neutral-500"
        aria-label="Type your name"
      />
      <label
        htmlFor="emailInput"
        className="mt-1.5 text-base leading-3 text-zinc-600"
      >
        Email*
      </label>
      <input
        id="emailInput"
        type="email"
        placeholder="Type your email"
        className="justify-center py-2.5 mt-1.5 text-base bg-blue-100 text-neutral-500"
        aria-label="Type your email"
      />
      <button
        type="submit"
        className="w-fit ml-0 justify-center px-8 py-4 mt-5 text-sm tracking-widest leading-5 text-center text-white uppercase bg-sky-600 hover:bg-lime-500 hover:transition-transform hover:duration-150 hover:ease-in-out rounded-[50px]"
      >
        Subscribe
      </button>
    </form>
  );
}
