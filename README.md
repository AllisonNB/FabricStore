## next steps

- setup redux store for cart
- create reusable modal component for cart, checkout, and quick add
- make currency formatter helper functio n(put in utils folder)
- optional: finish reusable button component

## Notes

- mongoDB expects an array of objects, you need to flatten these as much as possible before inserting
- styling with percentages can mess up grid formatting
- I use redux for this app instead of context api to mimic more closely what an online store would need. As there would likely be frequent stat updates from users adding items into carts and needing to update inventory on checkout, redux would likely be the better choice. Reduc also allows me to expand the app more easily in the future.

## Improvements

- should put keys as unique IDs instead of index as index changes
