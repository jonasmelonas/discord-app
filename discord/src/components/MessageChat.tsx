import { useEffect, useRef, useState } from "react";
import User from "../models/User";
import Message from "../models/Message";
import img from "../img/discord-icon.png"

type MessageChatProps = {
    usersMap: Map<string, User>
    chosenUser: User
    messagesMap: Map<string, Message[]>
    onMessageSent: (message: Message) => void
}

function MessageChat(props : MessageChatProps) {

    const [messageInput, setMessageInput] = useState("")

    function handleMessageChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value)
        setMessageInput(event.target.value)
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if(event.key.toString() === "Enter") {
            if(messageInput !== "")
                handleMessageSent()
        }
    }

    function handleMessageSent() {
        props.onMessageSent({text: messageInput, date: new Date(), user: "me"})
        setMessageInput("")
    }

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
    };

    useEffect(() => {
        console.log("update")
        scrollToBottom();
    }, [props.messagesMap.get(props.chosenUser!.userId)!.length]);

    return (
        <div className="messages-div h-full flex flex-col flex-grow overflow-y-auto scrollbar-hidden second-lightest-black">
            <div className="messages-list flex flex-col justify-end flex-grow lightest-black pl-4">
                {props.messagesMap.get(props.chosenUser.userId)!.map((message, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex items-start">
                            <div className="pt-4 min-w-fit">
                                <img src={img} className="size-10 rounded-full" />
                            </div>
                            <div className={`h-fit w-full ml-4 mt-2`}>
                                <div className="h-8 flex items-end">
                                    <div className="h-full flex items-end">
                                        <p className="white-text">{message.user === "them" ? props.chosenUser.name : "Jonas"}</p>
                                    </div>
                                    <div className="h-full ml-2 flex items-end text-sm grey-text">
                                        <p className="">{message.date.toLocaleDateString()} {message.date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"})}</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <p className={`light-grey-text break-all`}>
                                        {message.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-section h-20 w-full sticky bottom-0 lightest-black p-4">
                {/* Your text input goes here */}
                <input id="message-input-field"  
                    type="text"
                    value={messageInput}
                    placeholder="Message ..." 
                    className="message-input w-full h-10 px-6 rounded" 
                    onChange={event => handleMessageChange(event)}
                    onKeyDown={(event) => handleKeyPress(event)}
                    />
            </div>
        </div>
    )
}

export default MessageChat;