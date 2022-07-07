
export const isLoading = (data:boolean) => ({
  type: "IS_LOADING",
  payload: data
})


const initialState:boolean = false

function spinnerReducer(state = initialState, action:{type:string,payload:boolean}) {
  switch (action.type) {
    case "IS_LOADING":
      return state = action.payload
  
    default:
      return state
  }
}

export default spinnerReducer;