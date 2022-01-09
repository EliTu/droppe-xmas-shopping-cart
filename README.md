# Droppe XMAS shopping app

Url: Working on it...

# How to run
- Clone the repo to your local machine.
- cd into the project's root folder.
- In the terminal, type `npm run dev`.
- Once the local build is done, open http://localhost:3000 in the borwser and enjoy!

# What is this app?
This is a simple example app for a christmass shopping app. The user gains access to 5 "Wish Lists", i.e. requests for presents by others 
(represented by products in carts from the [fakestore api](https://fakestoreapi.com/docs)). 

Among the products there is one "favorite" product that was requested. The user can then go on and manually approve these items in the shop view. In addition, the user can interact with the carts by sorting them
or filtering for the favorites. The user can also use the "preset" button to automatically select products by fixed presets: all of the favorites, the 
cheapest products or all the products.

When checking out, the user will see an aggregated result of all the wish lists, with all the approved and disregarded products. The user can then confirm and 
"update" the carts on the API.

# Tech used
 - React 
 - TS
 - Styled-components
 - Redux-toolkit
 - React-router
 - Axios
 - date-fns
 - FontAwesomeReact
 - react-simple-star-rating
