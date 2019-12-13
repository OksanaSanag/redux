let state = 0;

function updateState(state, action) {
    if (actions === 'INCREMENT') {
        return state + 1;
    } else 
    if (actions === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

state = updateState(state, 'INCREMENT');
console.log(state);

state = updateState(state, 'DECREMENT');
console.log(state);

state = updateState(state, 'NOTHING');
console.log(state);