import React, { useEffect, useState } from "react";
import "./Input.css";

function Input({onInsert}){
    const [InputValue,setInputValue] = useState("");

    const [notAllow,setNotAllow] = useState(true);

    useEffect(()=>{
        if(InputValue.length>0){
            setNotAllow(false);
            return setNotAllow;
        }
        setNotAllow(true);
    },[InputValue])

    const handleSubmit = (event)=>{
        event.preventDefault();
        //form태그 특 전체페이지 새로고침 없애기
        onInsert(InputValue);

        setInputValue("");
        //submit한 후 value값 없애주기
    }


    return(
        <form className="input_text" onSubmit={handleSubmit}>
            <div className="todo_text" >
                <input className="todo_input"
                    type="text" 
                    value={InputValue}
                    onChange={(event)=>{
                        setInputValue(event.target.value);
                    }}
                ></input>
            </div>
            <button disabled={notAllow} className="plus_but" type="submit">추가</button>
        </form>
    );
}

export default Input;