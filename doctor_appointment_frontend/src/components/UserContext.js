import React, {
  createContext, useContext, useState, useMemo, useEffect,
} from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    // try to get user from sessionStorage if not found put currentUser to null
    const storedUser = sessionStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Use useEffect to update sessionStorage when user change
  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  // setup the context
  const contextValue = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);
