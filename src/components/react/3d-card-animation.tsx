"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";


export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-background relative group/card  hover:shadow-2xl hover:shadow-primary/[15] bg-background border-neon-cyan  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground text-center"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-muted-foreground text-sm max-w-sm mt-2"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/public/og.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            href="https://twitter.com/devopsick"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-foreground hover:text-neon-cyan"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-background text-foreground hover:text-neon-cyan text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
