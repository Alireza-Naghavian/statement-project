import Link from "next/link";
import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <input
        type="checkbox"
        name="toggle"
        id="sidebar-toggle"
        className="sidebar__input"/>
      <label for="sidebar-toggle" className="sidebar__label">
        <div className="sidebar__btn"></div>
      </label>

      <div className="sidebar__bg"></div>
      <ul className="list">
        <li className="list__item">
          <Link className="list__link" href={"#"}>
            صفحه اصلی
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__link" href={"#"}>
            ویژگی ها
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__link" href={"#"}>
            نظرات
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__link" href={"#"}>
            خانه ها
          </Link>
        </li>
        <li className="list__item">
          <Link className="list__link" href={"#"}>
            گالری
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
