import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";
import { Footer } from "./footer";

export default function Home() {
  return (
    <ClerkProvider>
      <div className="h-screen w-full bg-custom flex items-center justify-center">
        <div className="max-w-[988px] w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
          <img src="/marketing.svg" className="w-2/3 max-w-[500px]" alt="Hero" />
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="text-xl lg:text-3xl font-bold text-customDark max-w-[480px] text-center">
              Learn, practice, and master Armenian with ArmLing!
            </h1>
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton>
                  <Button size="lg" variant="secondary">
                    Get Started!
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button size="lg" variant="primaryOutline" type="submit">
                    I already have an account.
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full" asChild>
                  <Link href="/learn">Continue Learning.</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
      
    <div className="w-full bg-custom text-customDark p-5">

    <div className="h-[10vh]"></div>

      <div className="flex items-center justify-center space-x-20">
        <img src="/about-us.svg" alt="About Us" className="w-2/3 max-w-[400px]" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="text-center max-w-[400px]">
            ArmLing is dedicated to helping learners of all levels achieve fluency in Armenian through interactive lessons,
            practical exercises, and cultural immersion. Join us to start your journey today!
          </p>
        </div>
      </div>

      <div className="h-[25vh]"></div>

      <div className="flex items-center justify-center space-x-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Why Choose ArmLing?</h2>
          <p className="text-center max-w-[400px]">
            - Tailored lessons for all proficiency levels.<br />
            - Engaging and interactive exercises.<br />
            - A supportive community of learners.<br />
            - Learn not just the language but also the culture and history of Armenia.
          </p>
        </div>
        <img src="/why-choose-us.svg" alt="Why Choose ArmLing" className="w-2/3 max-w-[400px]" />
      </div>

      <div className="h-[25vh]"></div>

      <div className="flex items-center justify-center space-x-20">
        <img src="/help-support.svg" alt="Help and Support" className="w-1/2 max-w-[250px]" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Help and Support</h2>
          <p className="text-center max-w-[600px]">
            Need assistance? Contact us directly via email at{" "}
            <a href="mailto:support@armling.com" className="text-primary underline">
              support@armling.com
            </a>.
          </p>
        </div>

      </div>

      <div className="h-[15vh]"></div>

    </div>
    <Footer />
    </ClerkProvider>
    
  );
  
}



