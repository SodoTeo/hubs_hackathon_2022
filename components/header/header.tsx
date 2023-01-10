import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  return (
    <header>
      <div className="logo mY-1">
        <a className="text-white text-2xl font-bold " href="#" rel="noreferrer">
          SECRET HUB
        </a>
      </div>
      <ul>
        <li>
          {!session ? (
            <></>
          ) : (
            <>
              <img
                onClick={() => signOut()}
                className=" w-10 h-10 rounded-full m-2"
                src={session.user.image}
                alt="Logout"
              />
            </>
          )}
        </li>
      </ul>
    </header>
  );
}

//   <button onClick={() => signOut()}>Sign out</button>
