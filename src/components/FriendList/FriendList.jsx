import s from "./Friendlist.module.css";
import FriendlistItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <div className={s.section}>
      <ul className={s.list}>
        {friends.map((friend) => {
          return (
            <li className={s.item} key={friend.id}>
              <FriendlistItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FriendList;
