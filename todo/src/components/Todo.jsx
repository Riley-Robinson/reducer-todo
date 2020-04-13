import React from 'react'

export function Todo(props) {

    return(
        <div>
            <h2 className={props.item.completed? 'complete' : ''}
                onClick={(e) => {
                    e.preventDefault()
                    props.handkeComplete(props.item.id)
                }} > {proprs.item.Todo} </h2>
        </div>
    )
}