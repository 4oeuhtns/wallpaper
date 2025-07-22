import Image from "next/image";
import LayeredText from "@/components/layeredtext";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <LayeredText
        text="TESTING"
        size={5}
        color="#ffffff"
        style={{
          textShadow: '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff'
        }}
      />
    </div>
  );
}