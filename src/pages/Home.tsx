import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <section className="w-full h-screen relative">
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className="w-full h-screen bg-transparent"
      >
        <Suspense fallback={<Loader />}></Suspense>
      </Canvas>
    </section>
  );
}
