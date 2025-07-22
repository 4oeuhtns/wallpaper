import Image from "next/image";
import LayeredText from "@/components/layeredtext";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <
        LayeredText
        text = "I AM MUSIC"
        size = {5}
      />
    </div>
  );
}
