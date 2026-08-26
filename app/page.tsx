import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>ID : 6752410006</h1>
        <h1>Name : Tanawan Songdechagriwut</h1>
        <br />        
        <h3> Link to Basic Routing Page</h3>
        <Link href="/register"> [Register] </Link>
        <Link href="/products"> [Products] </Link>
        <Link href="/Member"> [Member] </Link>
        <hr />
        <br />
        <h3>link to Routing page</h3>
        <Link href="/products/mouse">[mouse]</Link> 
        <Link href="/products/keyboard">[keyboard]</Link>
        <Link href="/products/notebook/lenovo">[lenovo notebook]</Link> 
        <Link href="/products/notebook/acer">[acer notebook]</Link> 
        <hr />
    </div>
  );
}