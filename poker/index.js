const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

let cards = ['card1Button', 'card2Button'];
cards.forEach((card, i) =>{
    document.getElementById(card).addEventListener('click', e=>{
        dispatch({
            type: 'changeCard',
            position: i,
            value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'][Math.floor(Math.random() * 13)],
            suit: ['C', 'D', 'H', 'S'][Math.floor(Math.random() * 4)]
        });
    })
})