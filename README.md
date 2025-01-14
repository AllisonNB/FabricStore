## next steps

- ✔ create reusable modal component
- ✔ setup cart component
- ✔ filter displayed fabrics
- ✔ link filter to display (filteredfabrics is empty to start, need to put conditional in list component)
- ✔ test each filter to see if fabric is displayed
- ✔ setup sale filter
- ✔ if display is empty (no fabrics match combination of selection)...set-up default message
- change icon display on menu expand and collapse
- setup quick add component (refs & portals)
- pop up fabric details with add to cart ability
- setup redux store for cart
- make currency formatter helper functio n(put in utils folder)
- optional: finish reusable button component

## Notes

- mongoDB expects an array of objects, you need to flatten these as much as possible before inserting
- styling with percentages can mess up grid formatting
- I use redux for this app instead of context api to mimic more closely what an online store would need. As there would likely be frequent stat updates from users adding items into carts and needing to update inventory on checkout, redux would likely be the better choice. Reduc also allows me to expand the app more easily in the future.

## Improvements / future ideas

- should put keys as unique IDs instead of index as index changes
- search bar
