import uuid from "uuid";

export default function manageBand(state = {
  bands: [],
}, action) 
{
  console.log(action)
  switch(action.type) {
    
    case "ADD_BAND":
    
      const band = {
        id: uuid(),
        name: action.name,
      }
      console.log( "state", {...state, bands: [...state.bands, band]})
      return {...state, bands: [...state.bands, band]}
    
    case "DELETE_BAND":
      debugger
      const bands = state.bands.filter((band) => band.id !== action.id);

      return { bands };

    default:
      return state;
  
  }
}
