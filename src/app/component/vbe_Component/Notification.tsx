import React from "react";
import Marquee from "react-fast-marquee";
import Link from 'next/link';

interface Item {
  imageUrl: string;
  text: string;
  link: string;
}

const items: Item[] = [
  { imageUrl: '/vbe/new.gif', text: 'New Issue for Viksit Bharat to submit paper or To read guidelines Click Here.', link: '/NewIssue' },
//   { imageUrl: '/vbe/new.gif', text: '4th Edition of RASE Conferences is going to held at IIT Ropar on October 4-6, 2024. Stay tuned for more updates.', link: 'https://sm24.rase.co.in' },
//   { imageUrl: '/vbe/new.gif', text: 'To view the photos of RASE conferences 2024 Day-1, Click Here.', link: 'https://drive.google.com/drive/folders/1PpyJY91vF-ldoS9d2sdPWcBVvscXRq_0' },
//   { imageUrl: '/vbe/new.gif', text: 'To view the photos of RASE conferences 2024 Day-2, Click Here.', link: 'https://drive.google.com/drive/folders/1SgwPcXC3xRR7V3hAtKJSzeggBB9Xpwnk' },
  

];

const Notification: React.FC = () => {
    return (
      <div className="bg-[#f5f0e7] flex">
        <div className="bg-[#232323] p-2 text-base font-bold text-white">Annoucement</div>
  <Marquee pauseOnHover={true}  pauseOnClick={true}>
  <div className="flex flex-wrap pt-2 ">
    
      {items.map((item, index) => (
        <div key={index} className="flex items-center mb-4 ms-4">
        <img src={item.imageUrl} alt="Item Image" className=" mt-1 me-1 object-cover" />
          <Link href={item.link}>
      
          <p className="mr-2 font-semibold text-base  text-primary ">{item.text}</p>
         
          </Link>
        </div>
      ))}
    </div>
  </Marquee>
      </div>
     
    );
  };
  
  export default Notification;