import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendlistItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" height="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendlistItem;
