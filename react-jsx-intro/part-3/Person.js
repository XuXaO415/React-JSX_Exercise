const Person = (props) => {
    let voteMsg;
    let nameDisplay;
    if(props.name.length > 8) {
        nameDisplay = props.name.slice(0, 6);
    } else {
        nameDisplay = props.name;
    }
    if(props.age.length >= 18) {
        voteMsg = <h3>Please vote.</h3>
    } else {
        voteMsg = <h3>You must be 18 to vote.</h3>
    }
    return (
        <div>
            <p>Learn some information about this person.
            Hi my name is {props.name} and I am {props.age}.
            </p>
            <h3>My Favorite food is:</h3>
            <ul>
                {props.hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
}