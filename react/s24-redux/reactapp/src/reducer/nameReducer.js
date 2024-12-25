const nameReducer = (storeData, action) => {

    if(action.type === "NAME"){
        storeData = action.payload;
    }

    return storeData;
};

export default nameReducer;