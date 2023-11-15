import { gql } from "@apollo/client";

export const GET_PRODUCT_BY_SKU = gql`
  query getProducts($sku: String!) {
    product(where: { sku: $sku }) {
      sku
      productName
      productDescription {
        markdown
        html
      }
      productImage {
        url
        height
        width
        id
      }
      ishdata {
        availability
        inStock
        manufacturer
        listPrice {
          value
          currency
        }
        salePrice {
          currency
          value
        }
        shortDescription
        images {
          effectiveUrl
          imageActualHeight
          imageActualWidth
        }
        shippingMethods {
          name
        }
      }
    }
  }
`;
