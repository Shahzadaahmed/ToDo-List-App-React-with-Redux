// All disptach functions defined here...!

import {
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    DELETE_ALL_ITEMS
}
    from
    "../constant/action-types";

// Dispatch function to add item...!
export function addTodoItem(todoValue) {
    return dispatch => {
        dispatch({
            type: ADD_ITEM,
            payload: todoValue
        });
    }
}

// Dispatch function to delete item...!
export function deleteTodoItem(key) {
    return dispatch => {
        dispatch({
            type: DELETE_ITEM,
            payload: key
        });
    }
}

// Dispatch function to update item...!
export function updateTodoItem(obj) {
    return dispatch => {
        dispatch({
            type: UPDATE_ITEM,
            payload: obj
        });
    }
}

// Dispatch function to delete all items...!
export function deleteAllTodoItems() {
    return dispatch => {
        dispatch({
            type: DELETE_ALL_ITEMS
        });
    }
}