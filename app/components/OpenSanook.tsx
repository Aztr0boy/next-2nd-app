import React from "react";
import Link from "next/link";

export default function OpenSanook() {
  return (
    <div>
      <Link href="www.sanook.com"
      className="text-blue-900 hover:text-blue-900 border-2 border-blue-800 hover:border-blue-900 rounded-2xl">
      Open Sanook.com</Link>
    </div>
  );
}