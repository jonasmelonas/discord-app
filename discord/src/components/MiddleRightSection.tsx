import Message from "../models/Message";
import User from "../models/User";
import MembersList from "./MembersList";
import MessageChat from "./MessageChat";
import TopRightNavBar from "./TopRightNavBar";

type MiddleRightSectionProps = {
    usersMap: Map<string, User>
    chosenUser: User
    messagesMap: Map<string, Message[]>
    handleMessageSent: (message: Message) => void
}

function MiddleRightSection(props: MiddleRightSectionProps) {

    return (
        <div className="size-full flex flex-col h-screen">
            <TopRightNavBar chosenUser={props.chosenUser} />
            <div className="messages-div h-full w-full max-w-full flex overflow-y-auto scrollbar-hidden second-lightest-black">
                <MessageChat 
                    usersMap={props.usersMap} 
                    chosenUser={props.chosenUser} 
                    messagesMap={props.messagesMap} 
                    onMessageSent={props.handleMessageSent}
                    />
                <div>
                    <MembersList />
                </div>
            </div>
        </div>
    )
}

export default MiddleRightSection;