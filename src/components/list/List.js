import React from "react";
import "./List.css";

export default function List({Todolist,onComplete,onRemove}){
    return(
        <div className="insert_list">
            <ul>
                {Todolist.map((item,index)=>{
                    return(
                        <li key={item.key} className={item.isCompleted? "completed":""}>
                            <span>{item.value}</span>
                            <div className="but_wrap">
                                <button type="button" onClick={()=>{
                                    onComplete(index)
                                }}>확인</button>
                                <button className="remove" type="button" onClick={()=>{
                                    onRemove(index)
                                }}>제거</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}