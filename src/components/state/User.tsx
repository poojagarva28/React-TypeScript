import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: props.name,
      email: props.email,
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email} </div>
    </div>
  );
};

export default User;

// import React, { useState, useEffect } from "react";

// type AuthUser = {
//   name: string;
//   email: string;
// };

// const User = (props: AuthUser) => {
//   const [user, setUser] = useState<AuthUser>({} as AuthUser);
//   const handleLogin = () => {
//     setUser({
//       name: props.name,
//       email: props.email,
//     });
//   };
//   useEffect(() => {
//     setUser({
//       name: props.name,
//       email: props.email,
//     });
//   }, [props.email, props.name]);

//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <div>User name is {user.name}</div>
//       <div>User email is {user.email} </div>
//     </div>
//   );
// };

// export default User;
