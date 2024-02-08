import React, { useState } from "react";
import "./App.css";
import Input from "./components/ui/Input";
import List from "./components/list/List";


function App() {

  const [ Todolist, setTodolist ] = useState([]);
  //inputvalue의 내용들을 배열로 저장하여 뿌리기

  const handleInsert = (value)=>{
    setTodolist((current)=>{
      const newList=[...current];
      newList.push({
        //Todolist에 객체타입으로 배열추가
        key:new Date().getTime(),
        value:value,
        isCompleted:false,
        //완료미완료 플래그
      })

      //newList.push(value);
      return newList;
    });
  }

  const handleComplete = (index)=>{
    setTodolist((current)=>{
      const newList=[...current];
      newList[index].isCompleted = true;
      return newList
    })
  }
  const handleRemove = (index)=>{
    setTodolist((current)=>{
      const newList=[...current];
      newList.splice(index,1);
      return newList;
    })
  }

  
  
  return (
    <div className="list_wrap">
      <div className="wrap">
        <h1 className="title">Today's to do list</h1>
        <Input onInsert={handleInsert} ></Input>
        <List Todolist={Todolist}
          onComplete={handleComplete} 
          onRemove={handleRemove}
          ></List>
      </div>
    </div>
  );
}

export default App;
