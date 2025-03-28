const State = ( state ) => {
    return(
        <div>
            <p>Morning: {state.morning}</p>
            <p>Noon: {state.noon}</p>
            <p>Evening: {state.evening}</p>

        </div>
    );
}
export default State;