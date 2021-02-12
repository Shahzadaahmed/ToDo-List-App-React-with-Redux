// Todo List App using React JS + Redux JS...!

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoItem, deleteTodoItem, updateTodoItem, deleteAllTodoItems } from "../store/action/dispatch-functions";

// Declaring global variable for handle key / index...!
let updateKey;

const TodoListApp = () => {

    // Handeling redux here...!
    const getReduxState = useSelector(({ todoListArr }) => { return todoListArr.todoArray });
    const dispatch = useDispatch();

    // Handeling states here...!
    const [todoValue, setTodoValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // Function to add item...!
    const addItem = () => {

        // Form validation...!
        if (todoValue != 0) {
            dispatch(addTodoItem(todoValue));
            setTodoValue('');
        }

        else {
            alert("You need to fill the required field!");
            setTodoValue('');
        }
    }

    // Function to delete item...!
    const deleteItem = (event) => {
        let indexID = event.target.id;
        dispatch(deleteTodoItem(indexID));
    }

    // Function to edit item...!
    const editItem = (event) => {
        let indexID = event.target.id;
        let todoArrClone = getReduxState;
        let updateValue = todoArrClone[indexID];
        setTodoValue(updateValue);
        setIsEditing(true);
        updateKey = indexID;
    }

    // Function to update item...!
    const updateItem = () => {

        // Form Validation...!
        if (todoValue != 0) {
            let updateObj = {
                keyID: updateKey,
                updateValue: todoValue
            }
            dispatch(updateTodoItem(updateObj));
            setIsEditing(false);
            setTodoValue("");
        }

        else {
            alert("You need to fill the required field!!!");
            setTodoValue('');
            setIsEditing(false);
        }
    }

    // Function to delete all items...!
    const deleteAllItems = () => {
        dispatch(deleteAllTodoItems());
        setIsEditing(false);
        setTodoValue("");
        alert("All Items Deleted Successfully!");
    }

    // Function to cancel update value...!
    const cancel = () => {
        setIsEditing(false);
        setTodoValue("");
    }

    return (
        <div>
            <h1> Todo List App using React JS + Redux JS </h1>
            <hr />
            <div>
                <input
                    type="text"
                    autoFocus
                    value={todoValue}
                    onChange={(event) => { setTodoValue(event.target.value) }}
                />
                {
                    (!isEditing)
                        ?
                        (
                            <div>
                                <button onClick={addItem}> Add Item </button>
                                <button onClick={deleteAllItems}> Delete All Items </button>
                            </div>
                        )
                        :
                        (
                            <div>
                                <button onClick={updateItem}> Update Item </button>
                                <button onClick={cancel}> Cancel </button>
                            </div>
                        )
                }
            </div>
            <ul>
                {
                    getReduxState.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                <button onClick={deleteItem} id={index}> Delete Item </button>
                                <button onClick={editItem} id={index}> Edit Item </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default TodoListApp;

// App completed successfully...!