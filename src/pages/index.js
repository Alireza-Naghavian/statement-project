import HomePage from "@/components/pages/home/Home";
export default function Home() {
  const homeDatas = [
    {
      id: 1,
      cat: "آپارتمان خانوادگی مدرن",
      room: 4,
      citry: "مالدیو",
      width: 400,
      price: 560,
    },
    {
      id: 2,
      cat: "واحد تجاری",
      room: 2,
      citry: "ورشو",
      width: 400,
      price: 860,
    },
    {
      id: 3,
      cat: "مگا سوییت",
      room: 6,
      citry: "پاریس",
      width: 400,
      price: 660,
    },
    {
      id: 4,
      cat: "سوپر ویلا",
      room: 4,
      citry: "بارسلون",
      width: 400,
      price: 460,
    },
    {
      id: 5,
      cat: "ویلا خانوادگی",
      room: 2,
      citry: "مادرید",
      width: 400,
      price: 320,
    },
    {
      id: 6,
      cat: "آپارتمان  مدرن",
      room: 4,
      citry: "مالدیو",
      width: 400,
      price: 560,
    },
  ];
  return (
    <>
      
        <HomePage homeDatas={homeDatas} />
     
    </>
  );
}
