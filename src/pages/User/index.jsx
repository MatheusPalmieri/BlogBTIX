import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { request } from "../../service/request";

import { UserProfile } from "../../components/UserProfile";
import { LoadingUser } from "../../components/Loading/LoadingUser";
import { ButtonBack } from "../../components/ButtonBack";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const handleLoadUser = useCallback(async () => {
    const userJson = await request("users", id);
    setUser(userJson);
    setLoading(false);
  }, []);

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <div className="user">
      <ButtonBack />

      {loading && <LoadingUser />}

      {!loading && <UserProfile id={id} user={user} />}
    </div>
  );
};
