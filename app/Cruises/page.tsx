"use client";
import { Accordion, AccordionItem } from "@heroui/react";

import { title } from "@/components/primitives";

export default function CruiseshipsPage() {
  return (
    <div>
      <h2 className={title()}>Cruise Ships</h2>
      <p className="text-blue-300">
        Want to learn about the cruise ships thatcome out of the seattle port!
      </p>

      <section className="my-40">
        <h2 className="text-center text-4xl font-bold text-blue-300 drop-shadow-sm drop-shadow-sky-100">
          MEET THE CREW
        </h2>
        <Accordion>
          <AccordionItem key={1} title="The Norwegian Encore">
            This boat is the best looking ship in my opionion, its the coolest
            looking cruise ship ive ever seen with my own two eyes and it has a
            go-kart track in the back of the boat and a water slide that goes
            off the edge of the boat, built in 2019 this ships takes you on
            cruises throughout Alaska.
            <img
              alt="#"
              src="https://www.ncl.com/adobe/dynamicmedia/deliver/dm-aid--d9210658-caaf-4013-b206-9a09a649e854/ncl-encore-cruise-aerial-atsea-hero.jpg?preferwebp=true&quality=85"
            />
          </AccordionItem>
          <AccordionItem key={2} title="The Norwegian Bliss">
            {" "}
            This boat was built in 2018, The ship&apos;s exterior artwork was
            created by renowned marine wildlife artist Wyland and features
            colorful whales, honoring the ship&apos;s connection to Alaska and
            the Pacific Northwest.
            <img
              alt="#"
              src="https://media.loveitbookit.com/media/5vjbh0jg/ncl_bliss_aerial_0128.jpg"
            />
          </AccordionItem>
          <AccordionItem key={3} title="The star Princess">
            {" "}
            This boat is the newest of the Seattle fleet, built in 2025, its the
            largest princess line ship they have,&quot;The Dome&quot; is a
            geodesic glass-enclosed venue inspired by the terraces of Santorini.
            During the day it&apos;s a relaxing space, and at night it
            transforms into an entertainment venue.
            <img
              alt="#"
              src="https://eatsleepcruise.com/wp-content/uploads/2025/11/Star-Princess-First-Look.jpg.optimal.jpg"
            />
          </AccordionItem>
          <AccordionItem key={4} title=" The -dams">
            {" "}
            These boats all tend to have the same ending of -dam, in seattle
            there is the Eurodam, Koningsdam, Westerdam, Noordam, the -dam name
            has been a tradition over <strong>150</strong> years!
            <img
              alt="#"
              src="https://cruiseweb.com/api/media/file/holland-america-line-eurodam-cruise-ship-exterior.jpg"
            />
          </AccordionItem>
          <AccordionItem key={5} title="The Ovation of the Seas">
            {" "}
            This boat is know for its crane, built in 2016 The ship&apos;s
            famous North Star observation pod rises on a giant mechanical arm,
            giving you views higher than almost any other spot on a cruise ship,
            It has RipCord by iFLY, a wind tunnel that lets passengers
            experience indoor skydiving at sea.
            <img
              alt="#"
              src="https://d23n7ahjfnjotp.cloudfront.net/imgs/mobileheaderipad/ship_533_1280x960-rci_ov-aerialsnyatsea067_1024x416_mobhdr.jpg"
            />
          </AccordionItem>
          <AccordionItem key={6} title="The voyager of the seas">
            {" "}
            This boat is another new boat in the seattle port, built in 1999,
            refurbished in 2019, When it launched in 1999, it was the largest
            cruise ship in the world and introduced features that are now common
            across the industry, it had the first ever rock climbing wall on a
            cruise and ice skating rink, Its famous Bionic Bar features robotic
            bartenders that shake and serve drinks ordered from a tablet, it
            known as one of the most weather versed cruise ships in the world.
            <img
              alt="#"
              src="https://www.shipspotting.com/photos/big/5/5/3/3916355.jpg?cb=0"
            />
          </AccordionItem>
          <AccordionItem key={7} title="The Anthem of the Seas">
            {" "}
            This boat was built in 2015, The glass observation capsule rises
            more than 300 feet above the ocean and all there ships with the
            north star viewing observation holds the Guinness World Record for
            the tallest viewing deck on a cruise ship.
            <img
              alt="#"
              src="https://www.costcotravel.com/asset/dam/jcr:9d646b82-1c92-4971-aedb-9663abe55603/anthemOfTheSeas.jpg"
            />
          </AccordionItem>
          <AccordionItem key={8} title="The Royal princess">
            {" "}
            This boat was built in 2013, refurbished 2018, Its signature
            attraction is the SeaWalk, a glass-floored walkway that extends
            about 28 feet beyond the side of the ship. When you&apos;re standing
            on it, there&apos;s nothing but ocean roughly 128 feet below your
            feet, it carries over 4,000 pieces of artwork, the food statistics
            are insane{" "}
            <strong>
              About 250,000 eggs 18,000 bottles of wine and champagne and around
              170,000 pounds of fruits and vegetables per cruise and over 60
              pounds of butter
            </strong>{" "}
            The main pool area features fountain shows choreographed to music
            and lights, almost like a mini version of the famous fountain shows
            in Las Vegas.
            <img
              alt="#"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Royal_Princess_6_%2826812634049%29.jpg"
            />
          </AccordionItem>
          <AccordionItem key={9} title="Carnival Spirit">
            {" "}
            This boat was built in 2001, The Carnival Spirit is the first of the
            Spirit-class ships for Carnival Cruise Line, designed for longer
            voyages and more international-style cruising instead of just short
            Caribbean runs, The ship features Green Thunder, often called one of
            the steepest waterslides on any cruise ship—basically a
            near-vertical drop over the ocean and Unlike many older ships, its
            main pool area can be covered, which makes it way more usable in
            cold or rainy destinations like Alaska.
            <img
              alt="#"
              src="https://www.carnival.com/-/media/Images/Ships/SP/Itinerary/carnival-ships-itinerary-spirit-5.jpg"
            />
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
