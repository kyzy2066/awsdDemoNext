
'use client';
// import React from 'react'
// import ReactDOM from 'react-dom';
import { useState, useRef, useEffect } from "react";
import TodoList from "@/app/components/TodoList"
import TodoInput from "@/app/components/TodoInput"
import BasicModal from "@/app/components/BasicModal"
import useA from "@/app/components/useA"; 
import { SvgIcon, IconButton } from "@mui/material";



export default function Home() {
  //   useEffect(() => {
  //  console.log("user")

  //     return () => {
  //       console.log("クリーンアップ処理"); 
  //     };
  //   }, []);
  const { isActive, toggle } = useA();

  const [todoList, setList] = useState([{ name: '1111', staus: false }, { name: '2222', staus: true },
  { name: '23232', staus: true },
  { name: '4444', staus: false }])
  const inputRef = useRef<HTMLInputElement>(null);
  let shimeru = { name: '', staus: false }

  let handle = () => {
    // console.log(inputRef)ß
    if (shimeru.name.trim().length === 0) return
    setList([...todoList, shimeru])
    shimeru = { name: '', staus: false }
    inputRef.current.value = ''
    inputRef.current.focus()

  }
  const textChange = (e:React.ChangeEvent<HTMLInputElement>) => {

    // console.log(e.target.value)
    shimeru.name = e.target.value
  }
  const deleteText = (a) => {

    console.log(a)
    setList(todoList.filter((i) => { return i.name !== a.name }))
  }
  const toggleStaus = (a) => {

    console.log(a)
    setList(todoList.map((i) => { i.name === a.name ? i.staus = !i.staus:''; return i }))
  }
  return (
    <div style={{ textAlign: 'center' }} >
      <h1>todoList</h1>
      <div>
        {/* <input type="text" ref={inputRef} onChange={textChange} onKeyDown={(e) => {
          e.key === 'Enter' ? handle() : ""
        }} /> */}
        <TodoInput  textChange={textChange} handle={handle} ref={inputRef}></TodoInput>
        <button onClick={handle}>add</button>
        {/* <ul>
          {todoList.map((i, index) => {
            return <li key={index} style={{ textDecorationLine: i.staus ? 'line-through' : 'none' }}>{i.name}</li>
          })}
        </ul> */}
        <TodoList todoList={todoList} deleteText={deleteText} toggleStaus={toggleStaus}></TodoList>
        <BasicModal isActive={isActive} toggle={toggle}></BasicModal>
        {/* <SvgIcon >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon> */}
  <input type="file"  />

      </div>

    </div>
  );
}
