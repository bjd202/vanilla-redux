import React, {useState} from 'react'
import {connect} from 'react-redux'
import { addToDo, actionCreators } from '../store';

function Home({toDos, addToDo}) {

    const [text, setText] = useState("")

    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(text)
        addToDo(text)
        setText("")
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    return {toDos : state}
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
