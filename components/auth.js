import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useUser = () => {
  const authContext = useContext(AuthContext);
  return authContext.user;
};

export const useSetUser = () => {
  const authContext = useContext(AuthContext);
  return authContext.setUser;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ user: undefined });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
