import React from 'react';
import {ResponseMess} from "./PrintMess/ResponseMess";
import {Message} from "./PrintMess/Message";
import {TypingMess} from "./PrintMess/TypingMess";

export const MessageHistory = ({list}) => {

    const printMess = list.map(el => {
        if (el.type === "response") {
            return <ResponseMess key={el.id} id={el.id} from={el.from} time={el.time} text={el.text} />
        }
        else if (el.type === "message") {
            return <Message key={el.id} id={el.id} from={el.from} time={el.time} text={el.text} />
        }
        else {
            return <TypingMess key={el.id} id={el.id} from={el.from} time={el.time}  />
        }
    })

    return (
        <ul>
            {printMess}
        </ul>
    );
}

