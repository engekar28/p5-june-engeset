"use client";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";
import Link from "next/link";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>THE FINAL&nbsp;</span>
        <span className="text-5xl text-violet-500 font-bold">
          PROJECT!&nbsp;
        </span>
        <br />
        <span className="text-5xl text-blue-300 font-bold">
          About cruise ships&nbsp;
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Please go to the page labled cruise ships for info, or click the
          button below labled cruise link
        </div>
      </div>

      <div className="flex gap-3">
        <ConfettiButton />

        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div>
        <Button as={Link} color="secondary" href="/Cruises" radius="full">
          Cruise Link
        </Button>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
