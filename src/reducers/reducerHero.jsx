
export default (state, action) => {

  if (action.type === "ATTACK") {
    return action.payload;
  }
  if (action.type=== "GREENATTACK") {
    return action.payload;
  }
  return state;
}
