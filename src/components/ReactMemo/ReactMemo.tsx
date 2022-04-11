import React, {useState} from 'react';

const NewMessagesCounter = (props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

const UserSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UserSecret)
const A = React.memo(NewMessagesCounter)


export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['a', 'b', 'c'])
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
