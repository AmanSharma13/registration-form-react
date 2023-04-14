import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data === null) {
      navigate("/registrationvalidation");
    } else {
      console.log(data);
    }
  }, [navigate]);
  return <div>Registered Succesfully</div>;
};

export default Success;
