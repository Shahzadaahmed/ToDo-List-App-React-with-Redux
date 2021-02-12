// All cases defined here...!

import {
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    DELETE_ALL_ITEMS
}
    from
    "../constant/action-types";

let INIT_STATE = {
    todoArray: []
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case DELETE_ALL_ITEMS:
            let todoArrClone4 = state.todoArray.slice(0);
            todoArrClone4.splice(0, todoArrClone4.length);
            return {
                ...state,
                todoArray: todoArrClone4
            }

        case UPDATE_ITEM:
            let todoArrClone3 = state.todoArray.slice(0);
            todoArrClone3.splice(action.payload.keyID, 1, action.payload.updateValue);
            return {
                ...state,
                todoArray: todoArrClone3
            }

        case DELETE_ITEM:
            let todoArrClone2 = state.todoArray.slice(0);
            todoArrClone2.splice(action.payload, 1);
            return {
                ...state,
                todoArray: todoArrClone2
            }

        case ADD_ITEM:
            let todoArrClone = state.todoArray;
            todoArrClone.push(action.payload);
            return {
                ...state,
                todoArray: todoArrClone
            }

        default:
            return state;
    }
}