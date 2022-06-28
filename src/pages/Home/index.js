import React from "react";

import { useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.characters)
  console.log(data)
  return (
    <div>Home</div>
  );
}