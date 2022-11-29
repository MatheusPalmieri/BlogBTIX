import { UserHeader } from "../UserHeader";
import { UserContent } from "../UserContent";
import "./style.css";

export const UserProfile = ({ id, user }) => (
  <div className="user-section-profile">
    <section className="user-section">
      <UserHeader id={id} user={user} />
    </section>

    <section className="user-section">
      <UserContent user={user} />
    </section>
  </div>
);
