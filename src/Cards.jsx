import './App.css'
export default function Cards(){
    return(
   <div className="flex flex-wrap justify-center p-4">
  {[ "new", "women", "men", "bestseller" ].map((item) => (
    <div key={item} className="w-1/2 md:w-1/4 max-w-100 p-2">
     <a href="NewArrivals.jsx"> <img
        src={`/Images/${item}.png`}
        className="w-full h-auto object-cover cursor-pointer"
        alt={item}
      />
      </a>
    </div>
  ))}
</div>
    )
}