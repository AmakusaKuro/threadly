// import "./App.css";
// export default function Footer() {
//   return (
//     <footer className="w-full font-['Fredoka'] text-[#ebebeb] bg-[#212529] ">
//       <div className="flex justify-center gap-16 py-10 px-6">
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-10">
//       <div>
//         <h6 className="font-bold tracking-widest mb-4">HELP</h6>
//         <ul className="flex flex-col gap-2 text-base font-normal list-none p-0">
//           <li>help@allbirds.com.au</li>
//           <li>Returns/Exchanges</li>
//           <li>Warranty Policy</li>
//           <li>Shipping Policy</li>
//           <li>FAQ/Contact Us</li>
//         </ul>
//       </div>
//       <div>
//         <h6 className="font-bold tracking-widest mb-4">SHOP</h6>
//         <ul className="flex flex-col gap-2 text-base font-normal list-none p-0">
//           <li>Men's Shoes</li>
//           <li>Women's Shoes</li>
//           <li>Men's Apparel</li>
//           <li>Women's Apparel</li>
//           <li>Socks</li>
//           <li>Gift Cards</li>
//           <li>Sale Terms & Conditions</li>
//         </ul>
//       </div>
//       <div>
//         <h6 className="font-bold tracking-widest mb-4">COMPANY</h6>
//         <ul className="flex flex-col gap-2 text-base font-normal list-none p-0">
//           <li>Our Stores</li>
//           <li>Our Story</li>
//           <li>Our Materials</li>
//           <li>Sustainability</li>
//           <li>Shoe Care</li>
//           <li>Ambassadors</li>
//           <li>Press</li>
//           <li>Our Blog - The Perch</li>
//         </ul>
//       </div>
//       </div>
//       <div className="flex flex-col items-center text-center gap-3">
//         <h6 className="font-bold tracking-widest">FOLLOW THE FLOCK</h6>
//         <p>
//           Exclusive offers, a heads up on new things, andsightings of
//           <br />
//           Allbirds in the wild. Oh, we have cute sheep, too.#allbirds
//         </p>
//       </div>
//       </div>
//     </footer>
//   );
// }

import "./App.css";
const helpLinks = [
  "help@allbirds.com.au",
  "Returns/Exchanges",
  "Warranty Policy",
  "Shipping Policy",
  "FAQ/Contact Us",
];
const shopLinks = [
  "Men's Shoes",
  "Women's Shoes",
  "Men's Apparel",
  "Women's Apparel",
  "Socks",
  "Gift Cards",
  "Sale Terms & Conditions",
];
const companyLinks = [
  "Our Stores",
  "Our Story",
  "Our Materials",
  "Sustainability",
  "Shoe Care",
  "Ambassadors",
  "Press",
  "Our Blog - The Perch",
];
export default function Footer() {
  return (
    <footer className="w-full font-['Fredoka'] text-[#ebebeb] bg-[#212529]">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-20 px-6 py-12">
        <div className="flex flex-col">
          <h6 className="font-bold tracking-widest mb-4">HELP</h6>
          <ul className="flex flex-col gap-2 text-base list-none p-0">
            {helpLinks.map((link) => (
              <li key={link} className="hover:opacity-80 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col ">
          <h6 className="font-bold tracking-widest mb-4">SHOP</h6>
          <ul className="flex flex-col gap-2 text-base list-none p-0">
            {shopLinks.map((link) => (
              <li key={link} className="hover:opacity-80 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col ">
          <h6 className="font-bold tracking-widest mb-4">COMPANY</h6>
          <ul className="flex flex-col gap-2 text-base list-none p-0">
            {companyLinks.map((link) => (
              <li key={link} className="hover:opacity-80 cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#ffffff20] max-w-7xl mx-auto" />

      {/* BOTTOM SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-10 gap-10 text-center md:text-left">
        {/* LEFT */}
        <div className="flex flex-col gap-3 max-w-sm items-center md:items-start">
          <h6 className="font-bold tracking-widest">FOLLOW THE FLOCK</h6>
          <p className="text-base leading-relaxed">
            Exclusive offers, a heads up on new things, and sightings of
            Allbirds in the wild.
          </p>
          <div className="flex gap-4 mt-2 opacity-80">
            <img src="/Images/insta.png" className="w-5 cursor-pointer" />
            <img src="/Images/twitter.png" className="w-5 cursor-pointer" />
            <img src="/Images/fb.png" className="w-5 cursor-pointer" />
            <img src="/Images/tik.png" className="w-5 cursor-pointer" />
          </div>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <img src="/Images/icon-b-corp.webp" className="w-20" />
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap gap-2 max-w-sm justify-center md:justify-end opacity-80">
          <span className="border px-2 py-1 rounded">Mastercard</span>
          <span className="border px-2 py-1 rounded">PayPal</span>
          <span className="border px-2 py-1 rounded">Amex</span>
          <span className="border px-2 py-1 rounded">UPI</span>
          <span className="border px-2 py-1 rounded">Razorpay</span>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#ffffff20] max-w-7xl mx-auto" />

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 px-6 py-4 text-sm text-center">
        <span>&#9400; 2026 Chandan Das. All Rights Reserved.</span>
        <span className="hover:opacity-80 cursor-pointer">Terms</span>
        <span className="hover:opacity-80 cursor-pointer">Privacy</span>
        <span className="hover:opacity-80 cursor-pointer">Accessibility</span>
      </div>
    </footer>
  );
}
