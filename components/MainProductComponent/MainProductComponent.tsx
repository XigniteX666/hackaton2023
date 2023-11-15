import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import DataProps from "@/domain/productprops";
import { GET_PRODUCT_BY_SKU } from "@/queries/productQuery";

export default function MainProductComponent(props: DataProps) {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SKU, {
    variables: { sku: props.sku },
  });
  const [hasMounted, setHasMounted] = useState(false);
  const BASEURL = "https://smartstore.salnl.net";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const product = data.product;

  const cmsImage = product.productImage;
  let imageURL = "";
  if (cmsImage) {
    imageURL = cmsImage.url;
  } else {
    imageURL = BASEURL + product.ishdata.images[0].effectiveUrl;
  }

  const salePrice = product?.ishdata?.salePrice?.value;
  const salePriceDollars = (salePrice / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className="lg:grid grid-cols-10 gap-7 2xl:gap-8">
        <div className="col-span-5 xl:col-span-5 overflow-hidden mb-6 md:mb-8 lg:mb-0">
          <div className="w-full xl:flex xl:flex-row-reverse relative">
            <div className="w-full flex  xl:ms-5 overflow-hidden rounded-md relative xl:w-[700px] 2xl:w-[850px]">
              <div
                className="swiper swiper-initialized swiper-horizontal swiper-pointer-events  m-auto"
                id="productGallery"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide flex swiper-slide-active">
                    <div>
                      <Image
                        src={imageURL}
                        width={600}
                        height={500}
                        alt="{product?.productName}"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full absolute top-2/4 z-10 px-2.5">
                <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center rounded-full bg-skin-fill transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation swiper-button-disabled">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                  </svg>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center justify-center cursor-pointer rounded-full bg-skin-fill transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex flex-col col-span-5 xl:col-span-5 xl:ps-2">
          <div className="pb-4 lg:pb-8">
            <div className="md:mb-2.5 block -mt-1.5">
              <h2 className="text-skin-base text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300">
                {product?.productName}
              </h2>
            </div>
            <div className="flex items-center mt-5">
              <div className="text-skin-primary font-semibold text-base md:text-xl xl:text-[30px]">
                {salePriceDollars}
              </div>
            </div>
          </div>
          <dl className="productView-info  text-14px leading-8 pb-5 mb-5 border-b border-black/8">
            <dt className="productView-info-name w-40 float-left">Brand:</dt>
            <dd className="productView-info-value">
              {product?.ishdata.manufacturer}
            </dd>
            <dt className="productView-info-name w-40 float-left">SKU:</dt>
            <dd className="productView-info-value"> {product?.sku}</dd>
            <dt className="productView-info-name w-40 float-left">
              Description:
            </dt>
            <dd
              className="productView-info-value"
              dangerouslySetInnerHTML={{
                __html: product?.productDescription?.html,
              }}
            ></dd>
            <dt className="productView-info-name w-40 float-left">Shipping:</dt>
            <dd className="productView-info-value">Calculated at Checkout</dd>
          </dl>

          <div className="pb-2"></div>
          <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
            <div className="button--mutiqty flex items-center justify-between  overflow-hidden flex-shrink-0  h-11 md:h-14 bg-skin-button-secondary">
              <button className="flex items-center justify-center flex-shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10 h-10 rounded-full transform scale-80 lg:scale-100 text-skin-base hover:bg-skin-button-hover ms-auto">
                <span className="sr-only">button-minus</span>
                <svg
                  className="transition-all"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="1">
                    <path
                      d="M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                  </g>
                </svg>
              </button>
              <span className="font-semibold flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base md:text-[17px] w-12 md:w-20 xl:w-28">
                1
              </span>
              <button
                className="group flex items-center justify-center h-full flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none w-10 h-10 rounded-full scale-80 lg:scale-100 text-heading hover:bg-skin-button-hover me-auto"
                title=""
              >
                <span className="sr-only">button-plus</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="1">
                    <path
                      d="M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="0.5"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <button
              data-variant="primary"
              className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-skin-primary text-skin-inverted tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-opacity-90 cursor-not-allowed hover:cursor-not-allowed bg-opacity-50 hover:bg-opacity-50 w-full px-1.5"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-3"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M19.7999 19.0172L18.5402 4.8319C18.5132 4.51697 18.2478 4.27853 17.9374 4.27853H15.3459C15.31 1.91207 13.3754 0 10.9999 0C8.62447 0 6.68991 1.91207 6.65392 4.27853H4.06251C3.74758 4.27853 3.48664 4.51697 3.45965 4.8319L2.19993 19.0172C2.19993 19.0352 2.19543 19.0532 2.19543 19.0712C2.19543 20.6863 3.6756 22 5.49768 22H16.5022C18.3243 22 19.8044 20.6863 19.8044 19.0712C19.8044 19.0532 19.8044 19.0352 19.7999 19.0172ZM10.9999 1.21472C12.705 1.21472 14.0952 2.58241 14.1312 4.27853H7.86864C7.90464 2.58241 9.29482 1.21472 10.9999 1.21472ZM16.5022 20.7853H5.49768C4.35494 20.7853 3.42815 20.0294 3.41016 19.0982L4.61588 5.49775H6.64942V7.34233C6.64942 7.67975 6.91936 7.94969 7.25678 7.94969C7.59421 7.94969 7.86415 7.67975 7.86415 7.34233V5.49775H14.1312V7.34233C14.1312 7.67975 14.4012 7.94969 14.7386 7.94969C15.076 7.94969 15.3459 7.67975 15.3459 7.34233V5.49775H17.3795L18.5897 19.0982C18.5717 20.0294 17.6404 20.7853 16.5022 20.7853Z"
                    fill="#ffffff"
                    stroke="#ffffff"
                    stroke-width="0.1"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="22" height="22" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Add to Cart
            </button>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                data-variant="border"
                className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-skin-inverted text-skin-base border border-skin-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 group hover:text-skin-primary false"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"></path>
                </svg>
                Wishlist
              </button>
              <div className="relative group">
                <button
                  data-variant="border"
                  className="group text-sm lg:text-15px leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-body font-semibold text-center justify-center tracking-[0.2px] rounded placeholder-white focus-visible:outline-none focus:outline-none h-12 md:h-14 bg-skin-inverted text-skin-base border border-skin-four tracking-widest px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 w-full hover:text-skin-primary false"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M448 256L272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96z"
                    ></path>
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
