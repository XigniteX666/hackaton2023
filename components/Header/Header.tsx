import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header id="siteHeader" className="header-three z-50 w-full">
        <div className="innerSticky bg-skin-three  lg:w-full transition-all duration-200 ease-in-out body-font  z-20 ">
          <div className="navbar top-6 bg-gray-900 lg:block px-4 lg:px-10">
            <div className="flex justify-between items-center md:gap-8 py-4 lg:py-0">
              <a
                href="/"
                target="_blank"
                className="inline-flex justify-center items-center focus:outline-none transition-all duration-200 ease-in-out "
                rel="noreferrer"
              >
                <Image
                  src="/asset/wunderxlogo-white.png"
                  alt="title"
                  height={270}
                  width={240}
                />
              </a>
              <nav className="headerMenu flex w-full  hidden lg:flex transition-all duration-200 ease-in-out">
                <div className="menuItem group  py-2 mx-4 xl:mx-5 relative">
                  <Link
                    className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-skin-primary"
                    href="/"
                  >
                    Phones & Tablets
                    <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-skin-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="transition duration-300 ease-in-out transform "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="menuItem group  py-2 mx-4 xl:mx-5 relative">
                  <Link
                    className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-skin-primary"
                    href="/"
                  >
                    Electronic & Digital
                    <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-skin-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="transition duration-300 ease-in-out transform "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="menuItem group  py-2 mx-4 xl:mx-5 relative">
                  <Link
                    className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-skin-primary"
                    href="/"
                  >
                    Health & Beauty
                    <span className="text-xs w-4 flex justify-end text-white opacity-80 group-hover:text-skin-primary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="transition duration-300 ease-in-out transform "
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="menuItem group  py-2 mx-4 xl:mx-5 relative">
                  <Link
                    className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-skin-primary"
                    href="/"
                  >
                    About Us
                  </Link>
                </div>
                <div className="menuItem group  py-2 mx-4 xl:mx-5 relative">
                  <Link
                    className="uppercase inline-flex items-center text-sm text-white py-2 font-medium relative  group-hover:text-skin-primary"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
              <div className="lg:ms-auto items-center flex-shrink-0">
                <div className="lg:flex  items-center  transition-all duration-200 ease-in-out">
                  <button
                    type="button"
                    aria-label="Search Toggle"
                    title="Search toggle"
                    className="outline-none  w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="w-[24px] h-[24px] text-white"
                    >
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <div className="hidden lg:flex flex-shrink-0 flex items-center">
                    <button
                      className="text-sm text-white font-normal focus:outline-none ms-2"
                      aria-label="Authentication"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        className=" text-xl lg:text-3xl"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="flex items-center justify-center flex-shrink-0 h-auto focus:outline-none transform hidden lg:flex ms-8 "
                    aria-label="cart-button"
                  >
                    <div className="flex items-center relative cart-button1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0.1"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="22" height="22" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      {/* <span className="cart-counter-badge flex items-center justify-center bg-skin-primary text-skin-inverted absolute -top-0 -start-2.5 rounded-full font-bold">
                        0
                      </span> */}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
