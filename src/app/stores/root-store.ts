import { types } from "mobx-state-tree"
import { Location, MenuItem} from "./menu-store"
import { Order } from "./order-store"

const VendorModel = types.model({
  name: "default", 
  phone: ""
  // hours: "default",
  // phone: "default",
  // menu: "default",
  // locationOptions: "default",
  // orders: "default"
})

const Vendor = types
.model('Vendor', {
    _id: types.string,
    name: types.string,
    phone: types.string,
    locationOptions: types.array(Location),
    menu: types.array(MenuItem),
    orders: types.array(Order)
})

// type Vendor {
//   _id: String
//   name: String
//   hours: [Int]
//   phone: String
//   menu: [MenuItem]
//   locationOptions: [Location]
//   orders: [Order]
//  }

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  vendors: types.optional(types.array(VendorModel), [])
}).actions(self => {
  function addVendor(vendor) {
    self.vendors.push(vendor)
  }
  return {
    addVendor
  }
})



// type Vendor {
//   _id: String
//   name: String
//   hours: [Int]
//   phone: String
//   menu: [MenuItem]
//   locationOptions: [Location]
//   orders: [Order]
//  }

/**
 * The RootStore instance.
 */
export type RootStore = typeof RootStoreModel.Type

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType