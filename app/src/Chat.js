// import { useState } from "react";

// export default function Chat ({ contact , message, dispatch}) {
//     const [text, setText] = useState('');

//     return(
//         <section className="chat">
//             <textarea
//                 value={text}
//                 placeholder={'chat to' + contact.name}
//                 onChange={e => setText(e.target.value)}
//             />
//             <br />
//             <button> send to {contact.email}</button>
//         </section>
//     );
// }

export default function Chat(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
      connect() {
        console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      },
      disconnect() {
        console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      }
    };
  }