import React, { useState } from "react";
import Link from "next/link";

type Menu = {
  path: string;
  title: string;
  subMenu?: Menu[];
  isButton?: boolean;
};

const NavBar: React.FC = () => {
  const menus: Menu[] = [
    {
      path: "/",
      title: "जर्नल ओवरव्यू",
      subMenu: [
        { path: "/", title: "इस जर्नल के बारे में" },
        { path: "/vih.rase/EditorialBoard", title: "संपादकीय बोर्ड" },
        { path: "/", title: "पीयर रिव्यू प्रक्रिया" },
        { path: "", title: "प्रकाशन नैतिकता" },
        { path: "/vih.rase/Indexing", title: "एबस्ट्रैक्टिंग और इंडेक्सिंग" },
        { path: "/", title: "लेख प्रसंस्करण शुल्क" },
        { path: "/", title: "जर्नल रिपोर्ट्स" },
      ],
    },
    {
      path: "/",
      title: "लेखकों के लिए",
      subMenu: [
        { path: "/Guidelines for Viksit India-Revised.docx", title: "पेपर गाइडलाइंस डाउनलोड करें", isButton: true },
        { path: "/vih.rase/SubmitManuscript", title: "मैन्यूस्क्रिप्ट जमा करें" },
        { path: "/vih.rase/ManuscriptDetails", title: "पिछला मैन्यूस्क्रिप्ट " }
      ],
    },
    {
      path: "/",
      title: "समीक्षकों के लिए",
    },
    {
      path: "/",
      title: "समीक्षकों के लिए",
    },
    // {
    //   path: "/proceedings",
    //   title: "प्रोसीडिंग पढ़ें",
    // },
    {
      path: "/vih.rase/ReadArticlePage",
      title: "लेख पढ़ें",
    },
    { path: "/vih.rase/table", title: "सामग्री की तालिका" },
    {
      path: "/",
      title: "विशेष मुद्दे",
      subMenu: [
        { path: "/", title: "शिक्षा महाकुंभ" },
        { path: "/", title: "शिक्षा कुंभ" },
      ],
    },
    {
      path: "/vih.rase/ContactUs",
      title: "हमसे संपर्क करें",
    },
  ];

  const [state, setState] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <header className="pt-1 w-full bg-orange-500 text-white">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center justify-between">
        <nav className="w-full text-white text-xl">
          <div className="items-center px-4 md:flex md:px-0">
            <div className="flex items-center justify-between py-0 md:block">
              <div className="md:hidden order-1">
                <button
                  className="text-black outline-none p-2 rounded-md focus:border-black focus:border"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <Link href="/">
                <h1 className="text-xl font-bold text-white cursor-pointer">
                  {/* Your site title here */}
                </h1>
              </Link>
            </div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}
            >
              <ul
                className={`flex ${state ? "flex-col items-start" : "space-x-4 items-center"} justify-center space-y-0 md:flex md:space-x-1 md:space-y-0`}
              >
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 px-2 cursor-pointer md:w-1/6 text-white hover:text-orange-300 relative`}
                    onClick={() => handleMenuClick(idx)}
                  >
                    {item.subMenu ? (
                      <>
                        <span className="text-sm">{item.title}</span>
                        <ul
                          className={`absolute left-0 mt-2 p-2 space-y-2 text-black bg-orange-100 z-10 w-auto md:w-48 transition-all duration-300 ease-in-out ${
                            openSubMenuIndex === idx ? "block" : "hidden"
                          }`}
                        >
                          {item.subMenu.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              {subItem.isButton ? (
                                <a
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm transition-all hover:text-orange-500 hover:underline"
                                  download
                                >
                                  <button className="text-sm">{subItem.title}</button>
                                </a>
                              ) : (
                                <Link
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm transition-all hover:text-orange-500 hover:underline"
                                >
                                  {subItem.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={item.path} className="text-sm">
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
