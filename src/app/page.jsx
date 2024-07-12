import Image from "next/image";
import { connectToDB } from "./lib/utils";

export default function Home() {
  connectToDB()
  return (
  <main>
    Hello
  </main>
  );
}
