import './App.css'
export default function DasherCrds(){
    return(
        <div className="flex flex-wrap justify-center p-4">
  {[ "dasher", "newarr", "breezer",  ].map((item) => (
    <div key={item} className=" md:w-1/4 max-w-100 p-2">
     <a href=""> <img
        src={`/Images/${item}.webp`}
        className="w-full h-auto object-cover cursor-pointer"
        alt={item}
      />
      </a>
    </div>
  ))}
</div>
    )
}