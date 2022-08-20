export default class Movie {
  constructor() {

  }

  toHTML(data) {
    //returns an HTML representation of the JSON data
    //This is creating the template. How to display the data using html
    const movieTemplate = `
      <div class="movie">
        <h2>${data.Title}</h2>
        <p>${data.Year}</p>
        <img src="${data.Poster}">
        <p>${data.Plot}</p
        </div>
      `;
      return movieTemplate;
  }

  like () {
    //notifies the state manager that it would like to save the movie to the DB

  }

  saveComment () {
    // updates the comment after the user has added some notes

  }
}





































// // The search form should change the “search” state
// // A change in the “search” state should cause a movie lookup, with the results put into the “movies” state
// // A change in the “movies” state should change what movies are displayed. All movies in the “movies” state should be displayed
// // The API Key input should be saved into IndexedDB and and change the “key” state. On site load, the key from IndexedDB should be loaded into the “key” state.
// // A change in the “key” state (whether it’s available or not) should change whether the API Key input should be displayed
// // Add a “reset” button to the search form that resets all form fields, clears the “search” state, but keeps the “key” state.

// //





// //creating state store
// class Store {
//   //creating a constructor and will set the initial state(movie)
// constructor (init = {}){

//   //create a variable to hold our reference to the store
//   const self = this 
//   //creating an array to hold the expected changes to the store
//   this.subscibers = [] 
//   //this is the stores state which is a proxy we are using the it to store changes to the state.
//   // It's initialized with the value of init from our constructor, if it's provided.
//   // The three arguments are the state (the original object), the key being changed, and the value being set(data.Title) 
//   this.state = new Proxy( 
//     init,{
//       // Set the value on the state. This won't re-trigger the proxy.
//       set(state,key,value){}
//     }

//   )
// }

// }
// class Movie extends HTMLElement {
//     constructor() {
//       super();
//     }
//     //this method is incharge of bulding the HTML for the component
//    //overiding the connected call back method with my own HTML code
//     connectedCallback() {
//       this.innerHTML = `
//       <section class="movie">
//       <h2>${this.getAttribute("title")}</h2>
//       <p>${this.getAttribute("year")}</p>
//       <p>${this.getAttribute("rating")}</p>
//       </section>

//       <div>
//       <h2>${this.getAttribute("title")}</h2>
//         <p>${this.getAttribute("year")}</p>
//         <img src="${data.Poster}">
//         <p>${data.Plot}</p
//         </div>
//             <movie-display title="${data.Title}
//             year="${data.Year}"
//             poster="${data.Poster}"
//             rating="${data.Rating}"
//       `;
//     }
//   }
//   //customelements.define is taking two arguments. first aergument is what i want the name of the tag to be. 2nd argument is the class that i want to use to controll that tag. which is the comment
//   customElements.define("movie-display", Movie);
