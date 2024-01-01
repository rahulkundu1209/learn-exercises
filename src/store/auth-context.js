import { createContext } from "react";

export const AuthContext = createContext({
  authCtx: {
    isSignedIn: false,
    userId: "",
    displayName: "",
  },
  setAuthCtx: ()=>{},
  bookmarks: [],
  setBookmarks: ()=>{}
})