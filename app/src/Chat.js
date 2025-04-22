import { useState } from "react";

export default function Chat ({ contact }) {
    const [text, setText] = useState('');

    return(
        <section className="chat">
            <textarea
                value={text}
                placeholder={'chat to' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br />
            <button> send to {contact.email}</button>
        </section>
    );
}