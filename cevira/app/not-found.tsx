import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Cevira homepage or contact us for assistance.",
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <main
      role="main"
      aria-label="404 Error Page"
      className="bg-bg-3 px-4 py-20 md:px-8 md:py-28 lg:py-[120px]"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Error Content */}
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="mb-4 block lg:hidden">
              <Image
                src="https://framerusercontent.com/images/JkkrRABOiPzzepsUI0JCkuEmQs.png"
                alt="Page not found illustration"
                width={200}
                height={200}
                className="mx-auto h-auto w-[150px] md:w-[200px]"
                priority
              />
            </div>

            <h1 className="heading-1 text-[36px] md:text-[44px] lg:text-[56px]">
              Oops! Page Not Found
            </h1>

            <p className="max-w-[520px] text-body-18 text-body-gray">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved. Let&apos;s get you back on track.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/" variant="primary" aria-label="Return to homepage">
                Go Back Home
              </Button>
              <Button
                href="/contact"
                variant="outline"
                aria-label="Navigate to contact page"
              >
                Get in touch with us
              </Button>
            </div>
          </div>

          {/* Right Column - 404 Illustration */}
          <div className="hidden justify-center lg:flex">
            <Image
              src="https://framerusercontent.com/images/JkkrRABOiPzzepsUI0JCkuEmQs.png"
              alt="Page not found illustration"
              width={400}
              height={400}
              className="h-auto w-full max-w-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
