import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protector = () => {
  let user = localStorage.getItem("Uid");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return navigate("/");
  }, [user]);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Protector;
