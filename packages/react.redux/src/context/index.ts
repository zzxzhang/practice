import React, { createContext } from "react";

const ContextA = createContext({
  str: "hello",
  setStr() {
    this.str = "hello wrold";
  },
});

const ContextB = createContext({
  str: "good",
  setStr() {
    this.str = "good morning";
  },
});

export { ContextA, ContextB };
