// const nameReducer = (storeData, action) => {

//     if(action.type === "NAME"){
//         storeData = action.payload;
//     }

//     return storeData;
// };

// export default nameReducer;

const nameReducer = (storeData, action) => {
  if (action.type === "name") {
    storeData = action.playload;
  }

  return storeData;
};

export default nameReducer;
