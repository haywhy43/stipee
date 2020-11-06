import React from "react";
import Layout from "../components/layout";
import Header from "../components/pages/HowItWorks/Header";
import Item from "../components/pages/HowItWorks/Item";
import Button from "../components/UI/button";
import SpiralArrow from "../components/SVG/spiral-arrow";
import { navigate } from "gatsby";

export default function () {
  return (
    <Layout>
      <Header />
      <Item number="one" text="Setup Stipee for school">
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            On receiving a request from your school, we come to set up the
            Stipee solution in your school and teach the students, parents,
            merchants, and teachers on how to use it.{" "}
          </p>

          <div className="mt-4">
            <Button
              text="Contact sales"
              borderColor="#FAAA31"
              hoverColor="#FAAA31"
              hoverTextColor="white"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </Item>
      <div className="relative md:h-16 w-full w-10/12 mx-auto">
        <div className="absolute right-0 opacity-50 pr-64 bottom-0 hidden md:block animated blink slow infinite">
          <SpiralArrow width="120px" />
        </div>
      </div>
      <Item number="two" text="Issue Stipee card to students" alternate>
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            During the setup process, we will distribute the personalized Stipee
            card to every student in your school. Schools have two options to
            choose from regarding the card.
          </p>
          <p className="text-lg text-font-sub mt-3">
            1. Make the School ID card, the Stipee Card.
          </p>
          <p className="text-lg text-font-sub mt-3">
            2. Give the students a different card
          </p>
        </div>
      </Item>
      <div className="md:h-16"></div>
      <Item number="three" text="Setup Stipee for school">
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            On receiving a request from your school, we come to set up the
            Stipee solution in your school and teach the students, parents,
            merchants, and teachers on how to use it.
          </p>
        </div>
      </Item>
      <div className="md:h-16"></div>
      <Item
        number="four"
        alternate
        text="Download the Stipee app from Play or App store"
      >
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            We will guide parents on how to download the Stipee app from Play
            store for android users or App store for IOS users and register;
            it's a simple process that they can do on.
          </p>

          <div className="mt-4 lg:flex">
            <div className="mr-5">
              <Button
                text="Contact sales"
                borderColor="#FAAA31"
                hoverColor="#FAAA31"
                hoverTextColor="white"
                onClick={() => navigate("/contact")}
              />
            </div>
            <div className="mt-3 lg:mt-0">
              <Button
                text="Contact sales"
                borderColor="#FAAA31"
                hoverColor="#FAAA31"
                hoverTextColor="white"
                onClick={() => navigate("/contact")}
              />
            </div>
          </div>
        </div>
      </Item>
      <div className="md:h-16"></div>
      <Item number="five" text="Fund your kids wallet">
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            After registering, parents fund their Stipee wallet with enough
            money to sustain their children throughout a term, session, or any
            desired period using our diversified means of funding: Debit card,
            Bank account, Internet Banking, and USSD.
          </p>
        </div>
      </Item>
      <div className="md:h-16"></div>
      <Item number="six" alternate text="Seamless & secured spending">
        <div className="w-10/12 ">
          <p className="text-lg text-font-sub">
            Now the child enjoys the power of seamless and secured spending at
            school using their personalized fingerprint, protected Stipee card.
          </p>
          <p className="text-lg text-font-sub mt-3">
            Parents equally enjoy the convenience and comfort that erupts from
            knowing you have taken care of your child’s daily stipend in
            advance, and it’s safe and secured!
          </p>
        </div>
      </Item>
      <div className="h-48 w-full"></div>
    </Layout>
  );
}
