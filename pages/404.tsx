import Navbar from "@/components/navbar";
import ParticlesOverlay from "@/components/particles";
import Particles from "react-tsparticles";

export default function PageNotFound() {
    return (
        <>
        <Navbar />
        <ParticlesOverlay />
        <div className="container mx-auto mt-16 mb-48 mt-96 flex">
            <h1 className="text-9xl font-bold text-primary font-mono">Error 404</h1>
            <p className="text-6xl mt-5 mb-8">The page you requested does not exist.</p>
        </div>
        </>
    );
}