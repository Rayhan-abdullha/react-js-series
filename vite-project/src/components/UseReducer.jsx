import React, { useReducer } from 'react'

const SHOW_TEXT = 'showText'
const CHANGE_STYLE = 'changeStyle'

function reducer(state, action) {
    // if (action.type === 'showText') {
    //     return {
    //         ...state,
    //         showText: action.payload
    //     }
    // }
    // if (action.type === 'changeStyle') {
        
    //     return {
    //         ...state,
    //         changeTextStyles :action.payload,
    //         showText: action.payload
    //     }
    // }
    // return state
    switch (action.type) {
        case SHOW_TEXT:
            return {
                ...state,
                showText: true
            }
        case CHANGE_STYLE: 
            return {
                ...state,
                changeTextStyles: true
            }
        case 'clear':
            if (state.changeTextStyles === true || state.showText === true) {
                return {
                    ...state,
                    showText: false,
                    changeTextStyles: false
                }
            } else {
                return state
            }
        default: state
            break
    }
}
const initialState = {
    showText: false,
    changeTextStyles: false
  }
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleEvent = (props) => {
        if (props === 'show') {
            dispatch({type: "showText"})
        }
        if (props === 'changeStyle') {
            dispatch({type: "changeStyle"})
        }
        if (props === 'clear') {
            dispatch({type: "clear"})
        }
    }
  return (
      <div>
          <div style={{display: 'flex', gap: '10px'}}>
          <button onClick={() => handleEvent('show')}>Show</button>
          <button onClick={() => handleEvent('changeStyle')}>Change Style</button>
          <button onClick={() => handleEvent('clear')}>Clear</button>
         </div>
          {
              state.showText && <h1 style={{color: state.changeTextStyles ? 'red' : 'black'}}>I am Rayhan Abdullah</h1>
            }
      </div>
  )
}

export default UseReducer