import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Image from "next/image";
import DataProps from "@/domain/productprops";
import { GET_PRODUCT_BY_SKU } from "@/queries/productQuery";

// interface DataProps {
//   sku?: string;
// }

// const GET_PRODUCTS = gql`
//   query getProducts($sku: String!) {
//     product(where: { sku: $sku }) {
//       sku
//       productName
//       productDescription {
//         markdown
//         html
//       }
//       productImage {
//         url
//         height
//         width
//         id
//       }
//       ishdata {
//         availability
//         inStock
//         listPrice {
//           value
//           currency
//         }
//         salePrice {
//           currency
//           value
//         }
//         shortDescription
//         images {
//           effectiveUrl
//           imageActualHeight
//           imageActualWidth
//         }
//       }
//     }
//   }
// `;

export default function ProductComponent(props: DataProps) {
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_SKU, {
    variables: { sku: props.sku },
  });
  const [hasMounted, setHasMounted] = useState(false);

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

  let image = product.ishdata.images[0];
  let imageURL = "https://smartstore.salnl.net" + image.effectiveUrl;

  const salePrice = product?.ishdata?.salePrice?.value;
  const salePriceDollars = (salePrice / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="swiper-wrapper">
      <div className="swiper-slide swiper-slide-active max-w-[250px] mx-auto mb-4">
        <article className="flex flex-col product-card card-image--jump1 relative overflow-hidden  h-full">
          <div className="relative flex-shrink-0 overflow-hidden ">
            <div className="card-img-container1 flex overflow-hidden max-w-[250px] mx-auto relative">
              <Image
                src={imageURL}
                width={245}
                height={270}
                alt="{product?.productName}"
              />
            </div>
            <div className="w-full h-full absolute top-0 z-10 ">
              <button
                className="buttons--quickview px-4 py-3 bg-skin-inverted rounded-full hover:bg-skin-primary hover:text-skin-inverted"
                aria-label="Quick View Button"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  opacity="1"
                >
                  <path
                    d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="product-cart-button">
              <button
                className="w-full min-w-[150px] px-4 py-2.5 bg-skin-primary text-skin-inverted text-[14px] items-center justify-center focus:outline-none focus-visible:outline-none"
                aria-label="Count Button"
              >
                Product Details
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-2 h-full overflow-hidden relative">
            {/* <div className="text-sm leading-6 text-gray-400 mt-1.5 mb-1.5">
              OFS
            </div> */}
            <a
              className="text-skin-purple text-sm leading-5  line-clamp-2 mb-2 hover:text-skin-primary"
              href="http://products/invidunt-sed-diam-nonumy-eirmod-tempor-ut-labore"
            >
              {product?.productName}
            </a>
            <div className="space-s-2">
              <span className="inline-block font-semibold text-15px lg:text-base text-gray-700">
                {salePriceDollars}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
