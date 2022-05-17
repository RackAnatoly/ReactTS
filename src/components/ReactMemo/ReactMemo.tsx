import React, {useState} from 'react';

const NewMessagesCounter = (props: { count: number }) => {
    console.log('A')
    return (

        <div>
            {props.count}
        </div>
    );
};

const UserSecret = (props: { users: number }) => {
    console.log('USERS')
    return (
        <div>
            {props.users}
        </div>
    )
}

const Users = React.memo(UserSecret)
const A = React.memo(NewMessagesCounter)


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(0)
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <A count={counter}/>
            <Users users={users}/>

        </>
    )
}
