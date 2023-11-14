import propTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item} key={friend.id}>
      <span className={css[friend.isOnline ? 'online' : 'offline']}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: propTypes.shape({
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    id: propTypes.number.isRequired,
  }),
};

export default FriendListItem;
