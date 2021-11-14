import React, { useEffect } from "react";
import axios from "helpers/axios";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as IconPolygon } from "assets/images/icons/icon-polygon.svg";
import { getDataWorker } from "store/profile/worker/action";

import Button from "components/UI/Button";
import Image from "components/Image";

import useClickout from "hooks/useClickout";
import "./index.scss";
import { apiHost } from "config";

export default function UserProfile(props) {
  const { handleClick, click, refClick } = useClickout();
  const { data } = useSelector((state) => state.worker);
  const terserah = useSelector((state) => state.company);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataWorker(data.username));
  }, []);

  const handleLogout = async () => {
    await axios.post("/auth/logout");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <li className="drop_nav" onClick={handleClick} ref={refClick}>
      <Image
        className="user__profile mb-0"
        srcImage={
          data.avatar
            ? `${apiHost}/uploads/avatar/${data.avatar}`
            : terserah.data.avatar
            ? `${apiHost}/uploads/recruiter/${terserah.data.avatar}`
            : "/avatar.png"
        }
        altImage="Image Profile"
        imageClass="img-cover rounded-circle"
      />

      <ul className={click ? "dropdown clicked" : "dropdown m-0 p-0"}>
        <li className="nav-item">
          <Button
            className="btn nav-link"
            type="link"
            href={data.username ? "/profilePekerja" : "/profilePerusahaan"}
          >
            Profile
          </Button>
        </li>
        <li className="nav-item">
          <Button className="btn nav-link" onClick={handleLogout}>
            Logout
          </Button>
        </li>
      </ul>

      <IconPolygon
        className={click ? "arrow clicked ms-2" : "arrow not-clicked ms-2"}
      />
    </li>
  );
}
