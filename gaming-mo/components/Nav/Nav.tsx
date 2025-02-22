"use client";
import React from "react";

import Button from "../btn";
import Input from "../input";

const Nav = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Input />

      <div className="flex space-x-4">
        <Button link="/Login" name={"Log in"} />
        <Button link="/SignUp" name={"Sin Up"} />
      </div>
    </div>
  );
};

export default Nav;
