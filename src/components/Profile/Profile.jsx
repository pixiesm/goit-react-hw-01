import s from "./Profile.module.css";

const Profile = ({
  name = "Petra Marica",
  tag = "pmarica",
  location = "Salvador, Brasil",
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = {
    followers: 0,
    views: 0,
    likes: 0,
  },
}) => {
  return (
    <>
      <div className={s.section}>
        <div className={s.textContainer}>
          <img
            height="100"
            width="100"
            className={s.image}
            src={image}
            alt="User avatar"
          />
          <p className={s.name}>{name}</p>
          <p className={s.text}>@{tag}</p>
          <p className={s.text}>{location}</p>
        </div>

        <ul className={s.list}>
          <li className={s.listItem}>
            <span>Followers: </span>
            <span>{stats.followers}</span>
          </li>
          <li className={s.listItem}>
            <span>Views: </span>
            <span>{stats.views}</span>
          </li>
          <li className={s.listItem}>
            <span>Likes: </span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
