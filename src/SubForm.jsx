export default function SubForm() {
  return (
    <div className=" font-fredoka flex flex-col items-center text-center p-4 gap-4">
      <h5 className="font-extrabold text-[30px] tracking-wide">
        Want First Dibs?
      </h5>
      <p>
        Sign up for a welcome discount and get first dibs on new shoes that you
        feel good in, and feel <br />
        good about.
      </p>
      <div className="flex flex-col sm:flex-row items-center w-full max-w-175 p-4 gap-5">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="border border-[#4a5759] py-3 px-4 w-full placeholder:font-medium focus:border-[#023047] outline-none"
        />
        <button className="font-extrabold text-lg tracking-wider border py-3 px-2 text-white bg-black border-black transition cursor-pointer">
          SUBSCRIBE
        </button>
      </div>
      <p className="font-light">
        Note: You can opt-out at any time. See our Privacy Policy and Terms.
      </p>
    </div>
  );
}
