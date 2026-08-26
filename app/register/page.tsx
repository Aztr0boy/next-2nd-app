import Image from "next/image";
import AlienPixel from "./../../public/alienpixel.png";
import soldier from "./../../assets/images/soldier.png";
import submachine from "./../../assets/images/submachine-gun.png";


export default function Home() {
  return (
    <div>
        <h1 className="text-center text-blue-800 font-bold">
            Register page
        </h1>
        <Image
          src={AlienPixel}
          alt='Alien Pixel'
          width={200}
          height={200}
          className="border-2 border-blue-500 rounded-2xl p-2 mt-2"
        />
        <hr />
        <Image
          src={soldier}
          alt='soldier'
          width={200}
          height={200}
          className="border-2 border-blue-500 rounded-2xl p-2 mt-2"
        />
        <hr />
        <Image
          src={submachine}
          alt='submachine'
          width={200}
          height={200}
          className="border-2 border-blue-500 rounded-2xl p-2 mt-2"
        />
        <hr />
        <Image
          src='https://images.pexels.com/photos/12365433/pexels-photo-12365433.jpeg'
          alt='Red Light at Night'
          width={200}
          height={200}
          className="border-2 border-blue-500 rounded-2xl p-2 mt-2"
        />
    </div>
  );
}