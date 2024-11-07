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
        { path: "/", title: "About this Journal" },
        { path: "/vie.rase/EditorialBoard", title: "Editorial Board" },
        { path: "/", title: "Peer Review Process" },
        { path: "", title: "Publication Ethics" },
        { path: "/vie.rase/Indexing", title: "Abstracting and Indexing" },
        { path: "/", title: "Article Processing Charges" },
        { path: "/", title: "Journal Reports" },
      ],
    },
    {
      path: "/",
      title: "For Authors",
      subMenu: [
        { path: "/Guidelines for Viksit India-Revised.docx", title: "Download Paper Guidelines", isButton: true },
        { path: "/vie.rase/SubmitManuscript", title: "Submit Manuscript" },
        { path: "/vie.rase/ManuscriptDetails", title: "Previous Manuscript" },
      ],
    },
    {
      path: "/",
      title: "For Reviewers",
    },
    {
      path: "/vie.rase/ReadArticlePage",
      title: "Read Articles",
    },
    { path: "/vie.rase/table", title: "Table of Contents" },
    {
      path: "/",
      title: "Special Issues",
      subMenu: [
        { path: "/", title: "Shiksha MahaKumbh" },
        { path: "/", title: "Shiksha Kumbh" },
      ],
    },
    {
      path: "/vie.rase/ContactUs",
      title: "Contact Us",
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
