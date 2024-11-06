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
      title: "Journal Overview",
      subMenu: [
        { path: "/vbe.rase.co.in", title: "About this Journal" },
        { path: "/vbe.rase/EditorialBoard", title: "Editorial Board" },
        { path: "/", title: "Peer Review Process" },
        { path: "", title: "Publication Ethics" },
        { path: "/vbe.rase/Indexing", title: "Abstracting and Indexing" },
        { path: "/", title: "Article Processing Charges" },
        { path: "/", title: "Journal Reports" },
      ],
    },
    {
      path: "/",
      title: "For Authors",
      subMenu: [
        { path: "/Guidelines for Viksit India-Revised.docx", title: "Paper Guidelines", isButton: true },
        { path: "/SubmitManuscript", title: "Submit Manuscript" },
        { path: "/ManuscriptDetails", title: "Previous Manuscript" },
      ],
    },
    {
      path: "/",
      title: "For Reviewers",
    },
    {
      path: "/vbe.rase/ReadArticlePage",
      title: "Read Articles",
    },
    { path: "/vbe.rase/table", title: "Table of Contents" },
    {
      path: "/",
      title: "Special Issues",
      subMenu: [
        { path: "/", title: "Shiksha MahaKumbh" },
        { path: "/", title: "Shiksha Kumbh" },
      ],
    },
    {
      path: "/vbe.rase/ContactUs",
      title: "Contact Us",
    },
  ];

  const [state, setState] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <header className="pt-1 w-full bg-orange-600">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between px-6">
        <nav className="w-full text-white text-xl">
          <div className="items-center px-4 md:flex md:px-0">
            <div className="flex items-center justify-between py-0 md:block">
              <div className={`md:hidden order-1`}>
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
                className={`flex ${state ? "flex-col items-start" : "space-x-8 items-center"} justify-center space-y-0 md:flex md:space-x-8 md:space-y-0`}
              >
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className={`py-2 px-4 md:text-white text-white-100 cursor-pointer md:w-auto text-black md:bg-primary hover:text-primary md:hover:bg-orange-100 relative`}
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
                                  className="block px-4 py-2 text-sm transition-all hover:text-primary hover:underline"
                                  download
                                >
                                  <button className="text-sm">{subItem.title}</button>
                                </a>
                              ) : (
                                <Link
                                  href={subItem.path}
                                  className="block px-4 py-2 text-sm transition-all hover:text-primary hover:underline"
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
