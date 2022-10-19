import React from 'react';
import './App.css';
import {MessageHistory} from "./Components/MessageHistory/MessageHistory";
import {dataMessages} from "./DataMessages";
function App() {
  return (
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
              {
                  dataMessages.length !== 0? <MessageHistory list={dataMessages} /> : null
              }
          </div>
        </div>
      </div>
  );
}

export default App;
