import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            خانه رویایی خود را پیدا کنید
          </Link>
        </li>
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            درخواست پروپوزال
          </Link>
        </li>
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            برنامه اجاره خانه ها
          </Link>
        </li>
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            با ما تماس بگیرید
          </Link>
        </li>
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            ملک خود را ارسال کنید
          </Link>
        </li>
        <li className="nav__item">
          <Link href={"#"} className="nav__link">
            با ما کار کنید
          </Link>
        </li>
      </ul>

      <p className="copyright">
         &copy;   حقوق مادی معنوی این سایت برای&nbsp;
        <strong className="copyright__name">علی رضا نقویان </strong>
        محفوظ میباشد  
      </p>
    </footer>
  );
}

export default Footer;
