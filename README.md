# Fabric Store

A mimic of an online fabric store that users can puruse! You can apply mutliple filters to see what is in stock and on sale while also learning alittle more about different kinds of fabrics and their uses!

## How to use

1. Download the file and run "npm i" to install the required depedencies
2. Use "npm run dev" to run the project

## Improvements / Future Feature Ideas

- unit testing
- checkout modal
- fabric slice in redux store to update inventory
- check if items are in low stock or sold out
- search bar

## Things I learned doing this project

- mongoDB expects an array of objects, you need to flatten these as much as possible before inserting
- styling with percentages can mess up grid formatting
- redux instead of context API is better for apps with frequent state changes.
- opening dialog programmatically instead of setting "open" prop will preserve built in features (ie: backdrop with showModal). You can also use a cleanup function to close the modal if a dependency changes, which will cause the useEffect to trigger and cleanup to run just before that
