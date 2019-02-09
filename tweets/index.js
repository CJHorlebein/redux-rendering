const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let buttons = ['sortLikes', 'sortRetweets', 'sortReplies'];
let type = ['likes', 'retweets', 'replies']
buttons.forEach((button, i) =>{
    document.getElementById(button).addEventListener('click', e => {
        dispatch ({
            type: "sort",
            method: type[i]
        });
    });
});