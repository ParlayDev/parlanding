import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

import MainFeature1 from "../components/sections/TwoColWithButton.js";
import Features from "../components/sections/ThreeColSimple.js";
import TeamCardGrid from "../components/sections/ProfileThreeColGrid.js";

import SupportIconImage from "../assets/images/SUPPORT.png";
import ShieldIconImage from "../assets/images/Teams.png";
import CustomerLoveIconImage from "../assets/images/customerSat.png";

const Subheading = tw.span`uppercase tracking-wider text-sm text-base font-robotoCon font-light text-parlayPink`;
const AboutUs = () => {
  return (
    <>
      <MainFeature1
        subheading={<Subheading>About Parlay</Subheading>}
        heading="We wanted to seamlessly merge the games we love with the excitement of wagers and tournaments.

        "
        description="Wager on your own gaming skills to win real money. Parlay offers a new way to engage with your favorite games on PC or console. 

        "
        imageSrc="https://i.redd.it/jqp2q1r9v7x51.jpg"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the design space."
        description="At Parlay, our team works to bring together two key things: GAMES that are fun, and require skill, and Wagers that are fair, easy to create, change, and cash out. We combine collaboration, adrenaline, fun and benefits. Get started now!"
        primaryButtonText="Contact Us"
        imageSrc="https://i.redd.it/vmfqsbntefz41.jpg"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Honesty Integrity Leadership Transparency"
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "We're here for you, 24/7 infact.",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "We built our team from the ground up to be a group that's not only fun but aims to provide the best product possible.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "We aim to please, are we not doing that? let us know, refer back to the 24/7 support ;).",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
    </>
  );
};

export default AboutUs;
