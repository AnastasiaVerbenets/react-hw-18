const UserMenu = ({ onLogOut, user }) => {
  return (
    <>
      <p> Welcom {user.name}!</p>
      <button type="button" onClick={onLogOut}>
        Log out
      </button>
    </>
  );
};

export default UserMenu;
