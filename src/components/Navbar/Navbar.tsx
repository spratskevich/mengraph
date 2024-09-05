import { Profile } from "../Profile";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-1000">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">MENGRAPH</a>
      </div>
      <Profile />
    </div>
  );
}
