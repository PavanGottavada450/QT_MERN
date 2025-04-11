// const nameActionCreator = (data) => {
//     return {
//         type : "NAME",
//         payload : data,
//     }
// };

// export default nameActionCreator;

const nameActionCreator = (data) => {
  return {
    type: "name",
    playload: data,
  };
};

export default nameActionCreator;
