import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../components/LocalStorage/UseLocalStorage";

const CurrentUserContext = createContext();

export default CurrentUserContext;

export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
  const [token, setToken] = useLocalStorage("token", "");

  const [currentUser, setCurrentUser] = useState([]);
  const foo = useMemo(
    () => ({
      user,
      setUser,
      token,
      setToken,
      currentUser,
      setCurrentUser,
    }),
    []
  );

  return (
    <CurrentUserContext.Provider value={foo}>
      {children}
    </CurrentUserContext.Provider>
  );
}

CurrentUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCurrentUserContext = () => useContext(CurrentUserContext);
