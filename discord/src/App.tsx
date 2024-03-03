import { useState } from 'react'
import './App.css'
import FriendsChatList from './components/FriendsChatList'
import MiddleRightSection from './components/MiddleRightSection'
import ServerNavBar from './components/ServerNavBar'
import User from './models/User'
import Message from './models/Message'

function App() {

  const [usersMap, setUsers] = useState(new Map<string, User>([
    ["001", {name: "Hedda", userId: "001"}],
    ["002", {name: "Grete", userId: "002"}],
    ["003", {name: "Hans", userId: "003"}],
  ]));

  const [chosenUser, setChosenUser] = useState(usersMap.get("001")!)

  const [messagesMap, setMessageMap] = useState(new Map<string, Message[]>([
    ["001", [
      {
        text: "hei",
        date: new Date(),
        user: "them" }, 
      {
        text: "heidu",
        date: new Date(),
        user: "them" }, 
      {
        text: "hei og hå",
        date: new Date(),
        user: "them" 
      }]],
    [
      "002", [
        {
          text: "heisann",
          date: new Date(),
          user: "them" }, 
        {
          text: "haha",
          date: new Date(),
          user: "them" }, 
        {
          text: "der var du ja.. jeg har ikke sett deg på lenge!!",
          date: new Date(),
          user: "them" 
        }]
    ],
    [
      "003", [
        {
          text: "neimen heisann, er det deg!",
          date: new Date(),
          user: "them" }, 
        {
          text: "lenge siden kompis",
          date: new Date(),
          user: "them" }, 
        {
          text: "lyst til å møtes igjen snart? ta en kopp kaffe ellerno?",
          date: new Date(),
          user: "them" 
        }]
    ]]));

  function handleSendMessage(message: Message) {
    setMessageMap(prevMap => {
      const newMap = prevMap
      newMap.get(chosenUser.userId)?.push(message)
      return newMap;
    })
  }

  function handleChooseUser(userId: string) {
    setChosenUser(usersMap.get(userId)!)
  }

  return (
    <div className="size-full max-w-full flex">
      <ServerNavBar />
      <FriendsChatList 
        usersMap={usersMap} 
        chosenUser={chosenUser} 
        messagesMap={messagesMap} 
        handleChooseUser={handleChooseUser} />
      <MiddleRightSection
        usersMap={usersMap} 
        chosenUser={chosenUser} 
        messagesMap={messagesMap} 
        handleMessageSent={handleSendMessage}/>
    </div>
  )
}

export default App
