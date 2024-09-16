"use client";
import React from "react";
import { useConnect } from "wagmi";

export const Connectors = () => {
  const { connectors, connect } = useConnect();
  return (
    <div className="flex flex-col gap-3">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
};
