export const reducer = (state,action) =>{
    if(action.type === "like"){
        return state + 1;
    }else if(action.type === "dislike"){
        return state - 1;
    }else{
        return state = 0;
    }
};