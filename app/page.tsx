import { Button } from "@/components/ui/button";
import { Fan } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-3 p-24">
      <h1>Hello World</h1>
      <Link href={"/wisata"}>Wisata</Link>
      <Image
        src={"https://images.pexels.com/photos/6382648/pexels-photo-6382648.jpeg?auto=compress&cs=tinysrgb&w=600"}
        width={200}
        height={200}
        alt="Pexels Images"
      />
      <Fan />
      <Button>Submit</Button>
    </main>
  );
}
