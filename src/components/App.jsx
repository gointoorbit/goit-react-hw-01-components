import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import sumRepeatedCategory from './Statistics/sumRepeatedCategory';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

const preparedData = sumRepeatedCategory(data);

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={preparedData} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
