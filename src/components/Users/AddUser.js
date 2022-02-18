import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';


const AddUser = (props) => {
    
    const [enteredUsername, setEnteredUsername] = useState(''); 
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid Username and age (non-empty values).'
            });
            return;
        } ;

        if (+enteredAge < 1) {
            setError({ 
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }    
        
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
        
    };

const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);

};
const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    

};

const errorHandler = () => {
    setError(null);
  };

return(
    <div>
    {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
    <Card className={styles.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" value={enteredUsername} type="text" 
        placeholder="peicola7"
        onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age</label>
        <input id="age" 
        type="number" value={enteredAge}
        placeholder="21"
        onChange={ageChangeHandler}/>

        <Button type="submit">ADD USER</Button>
    </form>
    </Card>
    </div>
);
};

export default AddUser;