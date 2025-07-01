import { useContext } from 'react';
import authContext from '../context/auth/context';
import UserMenu from './UserMenu';

const AppBar = () => {
  const { user, isLoggedIn, onLogIn, onLogOut } = useContext(authContext);

  return (
    <header>
      {isLoggedIn ? (
        <UserMenu user={user} onLogOut={onLogOut} />
      ) : (
        <button type="button" onClick={onLogIn}>
          Log in
        </button>
      )}
    </header>
  );
};

export default AppBar;
