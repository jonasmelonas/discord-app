import img from "../img/discord-icon.png"
import Message from "../models/Message";
import User from "../models/User";
import TopLeftNavBar from "./TopLeftNavBar";

type FriendsChatListProps = {
    usersMap: Map<string, User>
    chosenUser: User
    messagesMap: Map<string, Message[]>
    handleChooseUser: (userId: string) => void
}

function FriendsChatList(props: FriendsChatListProps) {
    const friends = Array.from(props.usersMap.entries()).map(([key, user]) => {
        return user;
    })

    return (
        <div className='h-full max-h-full min-w-60 w-60 flex flex-col second-darkest-black'>
            <div className='h-10'>
                <TopLeftNavBar />
            </div>
            <div className='h-full overflow-y-auto scrollbar-hidden second-lightest-black'>
                <div>
                    {friends.map(friend => {
                    return (
                        <div className="w-full flex flex-col">
                            <div className="w-full h-12 px-2 py-1">
                                <div 
                                    key={friend.userId} 
                                    onClick={() => props.handleChooseUser(friend.userId)!} 
                                    className={`friend-hover rounded w-full h-full flex items-center pl-2 
                                        ${props.chosenUser.userId === friend.userId ? "message-input white-text p-3" : "grey-text"}
                                        `} >
                                    <img src={img} className="size-8 rounded-full" alt={friend.name}/>
                                    <p className="ml-2">
                                        <b>{friend.name}</b>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full">
                                {/* <hr className="w-9/12 mx-auto "></hr> */}
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
            <div className='h-16 w-full mb-0'>

            </div>
        </div>
    )
}

export default FriendsChatList;