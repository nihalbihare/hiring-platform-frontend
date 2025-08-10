import React from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconLock } from "@tabler/icons-react";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <IconLock size={60} stroke={1.5} className="text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Unauthorized Access</h1>
      <p className="text-mine-shaft-400 mb-6">
        You do not have permission to view this page.
      </p>
      <Button color="bright-sun.4" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </div>
  );
};

export default Unauthorized;
