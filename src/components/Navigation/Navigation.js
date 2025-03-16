/* eslint-disable @next/next/no-img-element */
"use client";
import { useCallback, useState, useEffect } from "react";
import menuData from "./menuData";
import Link from "next/link";
import MenuDropDown from "./MenuDropDown";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import siteSearchData from "@/constants/site-search.json";

const Navigation = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [siteData, setSiteData] = useState(siteSearchData);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const pathname = usePathname();

  const [windowWidth, setWindowWidth] = useState(1025);

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
  }, []);

  useEffect(() => {
    if (searchKey === "") {
      setSiteData(siteSearchData);
    } else {
      setSiteData(
        siteSearchData.filter(
          (item) =>
            item.title.includes(searchKey) ||
            item.desc.includes(searchKey) ||
            item.path.includes(searchKey)
        )
      );
    }
  }, [searchKey]);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  // const handleStickyNavbar = () => {
  //     if (window.scrollY >= 200) {
  //         setSticky(true);
  //     } else {
  //         setSticky(false);
  //     }
  // };
  // useEffect(() => {
  //     window.addEventListener("scroll", handleStickyNavbar);
  // });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index, path) => {
    let width = windowWidth;

    if (width >= 1024) {
      console.log(width, path);
      redirect(path);
      return;
    }

    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const isActivePage = useCallback(
    (path) => {
      const currentPath = pathname;
      const baseSegment = currentPath.split("/")[1];
      const url = path.split("/")[1];
      return baseSegment === url;
    },
    [pathname]
  );

  const closeSearchBar = () => {
    setSearchBarOpen(false);
    setSearchKey("");
  };

  return (
    <>
      <header
        className={`header bg-white top-0 left-0 flex w-full items-center justify-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white shadow-sticky !transition"
            : "!fixed !z-[9999] lg:absolute lg:z-40"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="w-80 max-w-full ml-3 lg:ml-0">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-5" : "py-5"
                } `}
              >
                <img
                  src="/assets/images/logo.svg"
                  alt=""
                  className="h-[75px] object-contain"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4 relative">
              <div className="lg:mr-6 relative top-[2px]">
                <span
                  className="block cursor-pointer"
                  onClick={() => setSearchBarOpen(true)}
                >
                  <img
                    src="/assets/images/search.svg"
                    className="search-nav-btn"
                    alt="search within site"
                  />
                </span>
              </div>
              {searchBarOpen && (
                <div className="border border-gray-300 rounded-lg fixed lg:absolute h-12 bg-white z-[2] lg:w-full lg:max-w-[700px] flex w-[calc(100vw-48px)] right-6 lg:right-0">
                  <img
                    src="/assets/images/search.svg"
                    className="w-6 h-auto relative right-[-18px] z-0"
                    alt="search within site"
                  />
                  <input
                    type="text"
                    value={searchKey}
                    onBlur={() => {
                      setTimeout(() => {
                        setSearchBarOpen(false);
                      }, 200);
                    }}
                    onChange={(e) => setSearchKey(e.target.value)}
                    placeholder="Enter the keyword to find the link within site"
                    className="-ml-6 flex-1 h-full pl-14 py-2 rounded-lg relative z-[1] bg-transparent outline-none"
                  />
                  <span
                    className="cursor-pointer w-14 flex items-center justify-center"
                    onClick={() => closeSearchBar()}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M11 1C10.8437 0.843775 10.6318 0.756012 10.4108 0.756012C10.1898 0.756012 9.97791 0.843775 9.82164 1L5.99997 4.82167L2.1783 1C2.02203 0.843775 1.81011 0.756012 1.58914 0.756012C1.36817 0.756012 1.15624 0.843775 0.99997 1C0.843744 1.15627 0.755981 1.3682 0.755981 1.58917C0.755981 1.81014 0.843744 2.02206 0.99997 2.17833L4.82164 6L0.99997 9.82167C0.843744 9.97794 0.755981 10.1899 0.755981 10.4108C0.755981 10.6318 0.843744 10.8437 0.99997 11C1.15624 11.1562 1.36817 11.244 1.58914 11.244C1.81011 11.244 2.02203 11.1562 2.1783 11L5.99997 7.17833L9.82164 11C9.97791 11.1562 10.1898 11.244 10.4108 11.244C10.6318 11.244 10.8437 11.1562 11 11C11.1562 10.8437 11.244 10.6318 11.244 10.4108C11.244 10.1899 11.1562 9.97794 11 9.82167L7.1783 6L11 2.17833C11.1562 2.02206 11.244 1.81014 11.244 1.58917C11.244 1.3682 11.1562 1.15627 11 1Z"
                        fill="#999"
                      />
                    </svg>
                  </span>
                  <div className="p-2 bg-[#fcfcfe] absolute top-full left-0 z-10 rounded-lg w-full border border-slate-300 mt-1 max-h-[calc(100vh-115px)] lg:max-h-[60vh] overflow-y-auto">
                    {siteData.map((item, i) => (
                      <div
                        key={item.path}
                        onClick={() => redirect(item.path)}
                        className="w-full mb-2 bg-white/0 hover:bg-white relative hover:translate-x-2 transition-all duration-300 border-b border-gray-200 cursor-pointer rounded-lg p-3 "
                      >
                        <p className="ff-lato text-[#272b99]">{item.title}</p>
                        <p className="text-xs text-gray-500 truncate">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                    {!siteData?.length && (
                      <div className="w-full flex justify-center items-center p-4">
                        <p>No link found.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                {!searchBarOpen && (
                  <nav
                    id="navbarCollapse"
                    className={`navbar fixed right-0 z-30 w-screen overflow-y-auto lg:overflow-visible lg:h-auto border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                      navbarOpen
                        ? "visibility top-[115px] opacity-100 pb-4"
                        : "invisible top-[120%] opacity-0"
                    }`}
                  >
                    <ul className="block lg:flex lg:space-x-4 lg:mr-6">
                      {menuData.map((menuItem, index) => (
                        <li key={menuItem.id} className="group relative">
                          {!menuItem.submenu ? (
                            <Link
                              href={menuItem.path}
                              className={`flex py-2 text-lg lg:text-sm ff-lato text-blackone lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {menuItem.title}
                            </Link>
                          ) : (
                            <>
                              <Link
                                href={menuItem.path}
                                className={`flex cursor-pointer items-center justify-start lg:justify-between py-2 text-lg lg:text-sm ${
                                  !isActivePage(menuItem.path)
                                    ? "text-textDark"
                                    : "text-red"
                                } group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                              >
                                {menuItem.title}
                                <span className="p-2 scale-[2] hidden lg:flex lg:scale-100 group-hover:rotate-180 origin-center transition-all duration-300 ease-in relative top-[1px]">
                                  <svg
                                    width="7"
                                    height="5"
                                    viewBox="0 0 7 5"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M0.522661 0.787191C0.688211 0.621667 0.956616 0.621667 1.12217 0.787191L3.64851 3.31355L6.17484 0.787191C6.34039 0.621667 6.60881 0.621667 6.77437 0.787191C6.93989 0.952744 6.93989 1.22117 6.77437 1.38672L3.94827 4.21281C3.78272 4.37834 3.5143 4.37834 3.34874 4.21281L0.522661 1.38672C0.357111 1.22117 0.357111 0.952744 0.522661 0.787191Z"
                                      fill="#757677"
                                    />
                                  </svg>
                                </span>
                              </Link>

                              <span
                                className={`block lg:hidden menudropdownbtn`}
                                onClick={() =>
                                  handleSubmenu(index, menuItem.path)
                                }
                              >
                                <svg
                                  width="7"
                                  height="5"
                                  viewBox="0 0 7 5"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`${
                                    openIndex == index ? "rotate-180" : ""
                                  }`}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.522661 0.787191C0.688211 0.621667 0.956616 0.621667 1.12217 0.787191L3.64851 3.31355L6.17484 0.787191C6.34039 0.621667 6.60881 0.621667 6.77437 0.787191C6.93989 0.952744 6.93989 1.22117 6.77437 1.38672L3.94827 4.21281C3.78272 4.37834 3.5143 4.37834 3.34874 4.21281L0.522661 1.38672C0.357111 1.22117 0.357111 0.952744 0.522661 0.787191Z"
                                    fill="#000"
                                  />
                                </svg>
                              </span>

                              <div
                                className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block ${
                                  menuItem.submenu.length > 8
                                    ? "lg:w-[500px]"
                                    : "lg:w-[300px]"
                                }  p-4 lg:p-8 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-[60px] ${
                                  openIndex === index ? "block" : "hidden"
                                }`}
                              >
                                <p className="uppercase font-semibold text-xl pb-2 text-red hidden lg:block">
                                  {menuItem.title}
                                </p>
                                <div className="h-0.5 w-14 mb-4 hidden lg:block"></div>
                                <MenuDropDown
                                  submenu={menuItem.submenu}
                                  parentpath={menuItem.path}
                                />
                              </div>
                            </>
                          )}
                        </li>
                      ))}
                      <li className="group relative lg:hidden">
                        <Link
                          href="/contact-us"
                          className={`flex cursor-pointer items-center justify-start lg:justify-between py-2 text-lg lg:text-sm ${
                            !isActivePage("/contact-us")
                              ? "text-textDark"
                              : "text-red"
                          } group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <Link
                  href="/contact-us"
                  className="text-sm ff-lato ease-in-up hidden rounded-md bg-red py-3 px-8 text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp lg:block md:px-9 lg:px-6 xl:px-9"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
