
import React, { useContext } from 'react';
import { UserContext, ThemeContext } from './page';

function User() {
    
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      {user.name} | {theme.name}
    </div>
  );
}

export default User;