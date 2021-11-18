import React, {useContext, useEffect} from "react";
import AuthContext from "../../context/auth/authContext";


export const User = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    
    // eslint-disable-next-line
  },[]);

  return (
    <div className="container">
      <div className="user-profile--wrap">
        <div className="user-profile--head">
          <h2>Hello</h2>
        </div>
        <div className="user-profile--body"></div>
      </div>
    </div>
  );
};
