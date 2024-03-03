import User from "../models/User";
import img from "../img/discord-icon.png"

type TopRightNavBarProps = {
    chosenUser: User
}

function TopRightNavBar(props: TopRightNavBarProps) {
    return (
        <div className="nav min-h-10 h-10 w-full flex items-center lightest-black border-b-2 border-b-stone-800">
            <img src={img} className="size-5 ml-3 rounded-full" />
            <p className="ml-3 white-text">
                <b>{props.chosenUser.name}</b>
            </p>
        </div>
    )
}

export default TopRightNavBar;