let state = 0;

function updateState(state, action) {
    if (actions.type === 'INCREMENT') {
        return state + action.amount;
    } else 
    if (actions.type === 'DECREMENT') {
        return state - action.amount;
    } else {
        return state;
    }
}

const incrementAction = {type: 'INCREMENT', amount: 5};
const decrementAction = {type: 'DECREMENT', amount: 3};

state = updateState(state, incrementAction);
console.log(state);

state = updateState(state, decrementAction);
console.log(state);

state = updateState(state, {}});
console.log(state);