"use client";

import Login from "../../component/vbh_Component/Login";

const Page = () => {

  // Handle the onLogin event
  const handleLogin = (email: string, password: string): void => {
    console.log(`User logged in with email: ${email}`);
    // You can add more logic here if needed, such as navigating to a different page or updating state
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default Page;
