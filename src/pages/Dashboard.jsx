import { useState, useEffect } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import SearchBar from "../components/dashboard/SearchBar";
import ConversationList from "../components/dashboard/ConversationList";

import ChatHeader from "../components/chat/ChatHeader";
import ChatMessages from "../components/chat/ChatMessages";
import ChatInput from "../components/chat/ChatInput";

import ContactProfile from "../components/profile/ContactProfile";

import allMessages from "../data/messages";

import "../components/dashboard/Dashboard.css";
import "../components/chat/Chat.css";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatData, setChatData] = useState(allMessages);
  const [showContactProfile, setShowContactProfile] = useState(false);

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setShowContactProfile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setShowContactProfile(false);
  };

  const handleSendMessage = (message) => {
    if (!selectedUser) return;

    setChatData((prev) => ({
      ...prev,
      [selectedUser.id]: [
        ...(prev[selectedUser.id] || []),
        message,
      ],
    }));
  };

  const goBackToChats = () => {
    setSelectedUser(null);
    setShowContactProfile(false);
  };

  return (
    <div className="dashboard-container">

      <Sidebar />

      <main className="dashboard-main">

        {(!isMobile || !selectedUser) && (
          <div className="dashboard-content">

            {isMobile && (
              <div className="mobile-app-title">
                NexChat ✨💬
              </div>
            )}

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <ConversationList
              search={search}
              selectedUser={selectedUser}
              setSelectedUser={handleSelectUser}
            />

          </div>
        )}

        {(!isMobile || selectedUser) && (
          <div className="chat-window">

            {!selectedUser ? (

              <div className="empty-chat">
                <h1>💬 Welcome</h1>
                <p>Select a contact to start chatting.</p>
              </div>

            ) : showContactProfile ? (

              <ContactProfile
                contact={selectedUser}
                goBack={() =>
                  setShowContactProfile(false)
                }
              />

            ) : (

              <>
                <ChatHeader
                  user={selectedUser}
                  openProfile={() =>
                    setShowContactProfile(true)
                  }
                  goBack={goBackToChats}
                />

                <ChatMessages
                  messages={
                    chatData[selectedUser.id] || []
                  }
                />

                <ChatInput
                  onSend={handleSendMessage}
                />
              </>

            )}

          </div>
        )}

      </main>

    </div>
  );
}

export default Dashboard;