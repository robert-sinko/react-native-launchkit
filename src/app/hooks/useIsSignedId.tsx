import { AuthContext } from "../context/AuthContext";
import React from "react";

export function useIsSignedIn() {
  const isSignedIn = React.useContext(AuthContext);

  return !!isSignedIn;
}

export function useIsSignedOut() {
  return !useIsSignedIn();
}
