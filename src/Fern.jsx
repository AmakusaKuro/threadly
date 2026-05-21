import './App.css'
export default function Fern(){
    return (
    <div className="flex flex-col items-center text-center p-4 gap-4">
      <a href="">
        <img
          src="Images/fern.webp"
          alt="fern"
          className="w-full max-w-600 h-auto object-cover cursor-pointer"
        />
      </a>
      <h6 className='font-fredoka font-extrabold text-[30px]'>Sustainability In Every Step</h6>
      <p className='font-fredoka'>From materials to transport, we’re working to reduce our carbon footprint to near zero. <br /> Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
      <button className='rounded-full font-extrabold tracking-widest font-fredoka border text-white bg-black border-black px-6 py-2 hover:bg-white hover:text-black transition cursor-pointer'>OUR STRATEGY</button>
    </div>   
  );
}