import React from "react"
import img from "../img/discord-icon.png"

function ServerNavBar() {
    const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

    return (
        <div className="darkest-black h-full min-w-fit flex flex-col items-center overflow-y-auto scrollbar-hidden">
                {list.map(item => {
                    return (
                        <div className="min-w-fit min-h-fit">
                            <img className="size-14 p-1 rounded-full" src={img} />
                        </div>
                    )
                })}
        </div>
    )
}

export default ServerNavBar;