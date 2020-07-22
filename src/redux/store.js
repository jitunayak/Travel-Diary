import React from "react";
import { createStore } from "redux";

export const addnewTrip = (singleTrip) => {
  console.log("ACTION CALLED TO ADD");
  return {
    type: "ADD_TRIP",
    payload: singleTrip,
  };
};

export const deleteTrip = (tripId) => {
  return {
    type: "DELETE_TRIP",
    payload: tripId,
  };
};

const mystore = {
  list: [
    {
      title: "Goa trip",
      country: "India",
      description:
        "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
      id: "sd3324ebihre",
    },

    // {
    //   title: "My trip to Parish",
    //   description:
    //     "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    // },
    // {
    //   title: "My trip to Parish",
    //   description:
    //     "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    // },
    // {
    //   title: "Goa trip",
    //   description:
    //     "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    // },

    // {
    //   title: "My trip to Parish",
    //   description:
    //     "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    // },
    // {
    //   title: "My trip to Parish",
    //   description:
    //     "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    // },

    // {
    //   title: "Goa trip",
    //   description:
    //     "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    // },
  ],
};
const listsOfTravelReducer = (state = mystore.list, ACTION) => {
  switch (ACTION.type) {
    case "ADD_TRIP":
      return (state = [ACTION.payload, ...state]);

    // case DELETE_TRIP":
    //   console.log("Delete is called");s
    //   return state.filter((arrItem, index) => {
    //     return index !== ACTION.payload;
    //   });

    case "DELETE_TRIP":
      console.log(" Payload : " + ACTION.payload);
      const s = state.filter((travellist) => travellist.id !== ACTION.payload);
      console.log(s);
      return s;

    default:
      return state;
  }
};

const store = createStore(listsOfTravelReducer);

export default store;
