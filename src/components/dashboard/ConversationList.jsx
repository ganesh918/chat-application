import users from "../../data/users";
import ConversationCard from "./ConversationCard";

function ConversationList({
  search,
  selectedUser,
  setSelectedUser,
}) {

  const filteredUsers = users.filter((user) =>
    user.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="conversation-list">

      {filteredUsers.map((user) => (

        <ConversationCard
          key={user.id}
          user={user}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

      ))}

    </div>

  );

}

export default ConversationList;