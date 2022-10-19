import React from 'react';

export const Message = ({text, time, from}) => {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name">
                    <i className="fa fa-circle online"></i>
                    {from.name}
                </span>
                <span className="message-data-time">{time}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message my-message">
                {text}
            </div>
        </li>
    );
}
