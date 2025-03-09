
'use client';
import React from 'react'

interface MyComponentProps {
    textChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handle: () => void;
  }
const TodoInput = React.forwardRef<HTMLInputElement, MyComponentProps>((props, ref) => {

    return (
        <input type="text" ref={ref} onChange={props.textChange} onKeyDown={(e) => {
            e.key === 'Enter' ? props.handle() : ""
        }} />
    );
})
export default TodoInput