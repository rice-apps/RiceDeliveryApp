import { create } from "apisauce";
import gql from 'graphql-tag'

export const vendorQuery = gql`
    {
      vendor {
        name
        phone
      }
    }`

export const GET_ALL_ORDERS = gql`
    query vendors($vendor_name: String) {
      vendor(name: $vendor_name) {
        name
        orders{
          location{
            name
          }
          user {
            netid
          }
          items {
            item {
              id
            }
            quantity
          }
          status {
            fulfilled
            unfulfilled
            pending
            onTheWay
          }
        }
      }
    }
`