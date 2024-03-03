function MembersList() {

    const list = ["Person 1", "Person 2", "Person 3", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4", "Person 4"]

    return (
        <div className="members-div w-60 h-full overflow-y-auto scrollbar-hidden second-lightest-black">
            <div className="members-list flex-grow min-w-60 max-h-full overflow-y-auto scrollbar-hidden second-lightest-black">
                {list.map((message, index) => (
                    <div key={index} className="w-full h-10 flex items-center ml-2">
                        <p className="ml-4">{message}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MembersList;