## next steps

- ✔ create reusable modal component
- ✔ setup cart component
- ✔ filter displayed fabrics
- ✔ link filter to display (filteredfabrics is empty to start, need to put conditional in list component)
- ✔ test each filter to see if fabric is displayed
- ✔ setup sale filter
- ✔ if display is empty (no fabrics match combination of selection)...set-up default message
- ✔ change icon display on menu expand and collapse
- ✔ setup quick add component (refs & portals)
- ✔ setup reusable button
- ✔ setup redux store for cart
- ✔ link cart counter in header to store
- ✔ add remove item function to store
- ✔ fix button styling & price total in cart modal
- fix all other reducers in cartSlice
- add functionality to cart

## Notes

- mongoDB expects an array of objects, you need to flatten these as much as possible before inserting
- styling with percentages can mess up grid formatting
- I use redux for this app instead of context api to mimic more closely what an online store would need. As there would likely be frequent stat updates from users adding items into carts and needing to update inventory on checkout, redux would likely be the better choice. Reduc also allows me to expand the app more easily in the future.
- opening dialog programmatically instead of setting "open" prop will preserve built in features (ie: backdrop with showModal). can use a cleanup function to close the modal if dependency changes, which will cause the useEffect to trigger and cleanup to run just before that
- originally saved items as object in an array. Switched to an object with IDs as the keys, for faster lookup and updating.

## Improvements / future ideas

- checkout modal
- search bar
- check if items are in low stock or sold out
