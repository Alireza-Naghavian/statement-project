import React from "react";
import db from "../../../../data/db.json";
function SingelHome({ query }) {
  const homeData = db.homes.find((home) => {
    return parseInt(home.id) === parseInt(query.homeId);
  });
  console.log(homeData);
  return (
    <div className="home-details">
      <div className="home-details-top">
        <div className="home-img">
          <img src={homeData?.img} alt="" />
        </div>
        <div className="home-interduce">
          <div className="home-title">
            <h1>
              <span>{homeData?.title}</span>
              <span>{homeData?.price.toLocaleString()}میلیون تومان </span>
            </h1>
            <div className="tags">
              <span className="tag green-tag">ویژه</span>
              <span className="tag brown-tag">برای اجاره</span>
            </div>
            <div className="adrress">شهر : {homeData?.citry}</div>
          </div>
          <div className="home-review">
            <div className="home-review-top">
              <h2>مرور کلی</h2>
              <p className="">
                <span>کد ملک : </span>
                <span>hz-HZ15</span>
              </p>
            </div>
            <ul className="home-review-bottom">
              <li>
                <span>نوع ملک: </span>
                <span>مسکونی</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{homeData?.roomCount}</span>
              </li>
              <li>
                <span>متراژ</span> &nbsp;
                <span>{homeData?.meterage}</span>
                <span>متر مربع</span>
              </li>
              <li>
                <span>سال ساخت</span>
                <span>1402</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-details-bottom">
        <div className="home-details-description">
          <p className="">توضیحات</p>
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد. مشاوران دوطرفه به خریدار و فروشنده مشاوره
            می‌دهند. یک مشاور املاک وظیفه دارد که با صداقت به هر دو طرف معامله
            مشاوره و راهنمایی درستی بدهد. مشاوران دوطرفه باید از هر دو طرف چه
            فروشنده و چه خریدار بخواهند که یک قرارداد نمایندگی دوطرفه را امضا
            کنند. قوانین و مقررات خاصی برای مشاوران دوطرفه وجود دارد، این دست از
            مشاوران نسبت به دو دسته قبل کارشان سخت‌تر و پیچیده‌تر است.لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingelHome;
