import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/LoginButton";
import { Hero } from "../components/(landingPage)/Hero";
import { Features } from "@/components/(landingPage)/Features";
import RibbonLogos from "@/components/(landingPage)/ScrollingText";
import NavBar from "@/components/(landingPage)/NavBar";
import { Footer } from "@/components/(landingPage)/Footer";
import NewTemplateBanner from "@/components/(landingPage)/NewTemplateBanner";
import NextFeatures from "@/components/(landingPage)/NextFeatures";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    // <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-600">
    //   <div className="space-y-6 text-center">
    //     <h1
    //       className={cn(
    //         "text-5xl font-semibold text-white drop-shadow-md",
    //         font.className
    //       )}
    //     >
    //       🔒 Auth
    //     </h1>
    //     <p className="text-lg text-white">A simple authentication service</p>
    //     <div>
    //       <LoginButton asChild>
    //         <Button variant="secondary" size="lg">
    //           Sign In
    //         </Button>
    //       </LoginButton>
    //     </div>
    //   </div>
    // </main>
    <div>
      <NavBar />
      <Hero />
      <Features />
      {/* <RibbonLogos /> */}
      <NewTemplateBanner />
      <NextFeatures />
      <Footer />
    </div>
  );
}
