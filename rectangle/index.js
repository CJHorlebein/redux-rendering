const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
var size = ['height', 'width'];
size.forEach(side => {
    document.getElementById(side).addEventListener('click', e => {
        dispatch({
            type:'size',
            dimension: side
        })
    })
})

var colors = ['red', 'blue']
colors.forEach(color => {
    document.getElementById(color).addEventListener('click', e => {
        dispatch({
            type: 'color',
            color, 
        })
    })
})