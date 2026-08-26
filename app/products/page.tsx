import localFont from "next/font/local";
import {Itim,Srisakdi}   from "next/font/google";

const kiraspcDoshite = localFont({
  src: "./../fonts/KiraspcDoshite demo.ttf",
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-kiraspc-doshite",
});


const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

const srisakdi = Srisakdi({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Page() {
  return (
    <div>
        <h1>
           products page
        </h1>
        <hr />
        <h1>สวัสดี</h1>
        <hr />
        <h1  className={itim.className}>
            ลาก่อง
        </h1>
        <hr />
        <h1 className={srisakdi.className}>บายบุย</h1>
        <hr />
        <h1 className={kiraspcDoshite.className}>เเบร่ๆ</h1>
    </div>
  );
}