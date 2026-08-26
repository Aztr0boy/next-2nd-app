
import Lnk from "next/link";

export default function Home() {
  return (
    <div>
        <h1>
           Member Page
        </h1>
        <hr />
        <Lnk href="/Member/Vip/Vip0001/somchui/5000"> Go to VIP Member รหัส 001 , ชื่อ สมชุย, อายุ 5000</Lnk> ||
        <br />
        <Lnk href="/Member/normal/n0001"> Go to Normal Member รหัส 001</Lnk>
        <br />
    </div>
  );
}