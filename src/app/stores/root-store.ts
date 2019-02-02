import { types } from "mobx-state-tree"
import { Vendor } from "./vendor-store"
import { Order } from "./order-store"
import { Location } from "./location-store"
// import { Batch } from "./batch-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  vendors: types.optional(types.array(Vendor), []),
  orders: types.optional(types.array(Order))
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
