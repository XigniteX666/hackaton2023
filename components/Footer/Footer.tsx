import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer-three bg-gray-900 text-white border-t border-black/18 pt-10 md:pt-16">
        <div className="mx-auto mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-[50px] ">
            <div className="col-span-full sm:col-span-1 md:col-span-3 ">
              <div className="text-sm mx-auto sm:ms-0 pb-2">
                <h3 className="text-skin-base1 text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] lg:leading-7 font-medium">
                  Contact us
                </h3>
                <div className="mb-3">
                  Address: Darmstaedter Landstraße 112 Frankfurt 60598 Germany
                </div>
                <div className="mb-3">Phone: (1800)-000-6890 </div>
                <div className="mb-3">Email: support@wundermanthompson.com</div>
              </div>
              <ul className="flex flex-wrap  space-s-4 md:space-s-5 mx-auto md:mx-0">
                <li className="transition hover:opacity-80">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <Image
                      src="/asset/social/facebook.svg"
                      alt="title"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
                <li className="ml-4 transition hover:opacity-80">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <Image
                      src="/asset/social/instagram.svg"
                      alt="title"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
                <li className="ml-4 transition hover:opacity-80">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <Image
                      src="/asset/social/twitter.svg"
                      alt="title"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
                <li className="ml-4 transition hover:opacity-80">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/"
                  >
                    <Image
                      src="/asset/social/youtube.svg"
                      alt="title"
                      height={20}
                      width={20}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid gap-5 md:grid-cols-6 sm:col-span-1 md:col-span-5">
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                <h3 className="text-skin-base1 text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] lg:leading-7 font-medium">
                  Information
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/about-us"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/terms"
                    >
                      Terms &amp; Condition
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/checkout"
                    >
                      Checkout
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/faq"
                    >
                      Faq
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                <h3 className="text-skin-base1 text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] lg:leading-7 font-medium">
                  Categories
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Electronic &amp; Digital
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Health &amp; Beauty
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Return Policy
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Top 10 Offers
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Jewelry &amp; Watches
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/search"
                    >
                      Book &amp; Office
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2">
                <h3 className="text-skin-base1 text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] lg:leading-7 font-medium">
                  Brands
                </h3>
                <ul className="text-sm lg:text-14px flex flex-col space-y-3">
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      HP
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      DELL
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      EPSON
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      Freecome
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      Dataflex
                    </Link>
                  </li>
                  <li className="flex items-baseline">
                    <Link
                      className="duration-200 hover:text-skin-primary"
                      href="/"
                    >
                      Samsung Galaxy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="flex flex-col bg-no-repeat bg-[length:180px_auto] bg-right-bottom newsletterFooter sm:col-span-1 md:col-span-4 lg:border-l lg:border-black/18 lg:pl-10"
              // style='background-image: url("/assets/images/bg_newsletter_bottom.png");'
            >
              <h3 className="text-skin-base1 text-base mb-4 sm:mb-5 lg:mb-6 pb-0.5 text-base lg:text-[18px] lg:leading-7 font-medium">
                Sign Up For Newsletter
              </h3>
              <p className="text-sm lg:leading-[27px] pb-4">
                Join 60.000+ Subscribers and get a new discount coupon on every
                Saturday.
              </p>
              {/* <div className=" form-subscribe flex flex-col items-center justify-between "><form className="flex relative z-10 "><span className="flex items-center absolute start-0 top-0 h-12 px-3.5 transform"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]"><g clip-path="url(#clip0)"><path d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z" fill="#B3B3B3"></path></g></svg></span><div className="w-full">
                      <input id="subscription-email" name="email" type="email" placeholder="Your email address" className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-13px lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out bg-white border-skin-base focus:outline-none h-11 md:h-12 focus:border-skin-primary ps-10 md:ps-10 pe-10 md:pe-10 2xl:px-11 h-12 border-1 border-black/18 rounded-l" autocomplete="off" spellcheck="false" aria-invalid="false"></div><button className="bg-gray-800 text-sm text-white md:h-12 py-2 px-10 hover:bg-skin-primary  focus:outline-none focus:shadow-outline rounded-r -ml-1" aria-label="Subscribe Button">Subscribe</button>
                      </form>
                      </div> */}
            </div>
          </div>
        </div>
        <div className="border-t border-black/2 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
          <div className="mx-auto mx-auto max-w-[1730px] px-4 md:px-6 lg:px-8 2xl:px-20">
            <div className="flex flex-col md:flex-row text-center md:justify-between">
              <p className="text-gray-6001 text-sm leading-7 lg:leading-[27px]">
                ©&nbsp;Copyright 2023&nbsp;Wunderman Thompson. A WPP Company
              </p>
              <ul className="flex flex-wrap justify-center items-center space-s-4 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
                <li className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer"
                  >
                    <Image
                      src="/asset/payment/paypal.svg"
                      alt="title"
                      height={40}
                      width={50}
                    />
                  </a>
                </li>
                <li className="ml-4 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer"
                  >
                    <Image
                      src="/asset/payment/discover.svg"
                      alt="title"
                      height={40}
                      width={60}
                    />
                  </a>
                </li>
                <li className="ml-4 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer"
                  >
                    <Image
                      src="/asset/payment/visa.svg"
                      alt="title"
                      height={30}
                      width={40}
                    />
                  </a>
                </li>
                <li className="ml-4 mb-2 md:mb-0 transition hover:opacity-80 inline-flex">
                  <a
                    href="/"
                    target="_blank"
                    className="inline-flex"
                    rel="noreferrer"
                  >
                    <Image
                      src="/asset/payment/mastercard.svg"
                      alt="title"
                      height={30}
                      width={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
