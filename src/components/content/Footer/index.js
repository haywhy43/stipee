import React from "react";
import Logo from "../../SVG/logo";
import { Link } from "gatsby";

export default () => {
  return (
    <footer className="pt-10 border-t border-abstract">
      <div className="w-11/12 mx-auto md:px-6">
        <div className="md:flex justify-between mx-auto px-6">
          <div>
            <Link to="/">
              <Logo />
            </Link>
            <p className="mt-5 text-font-sub">
              Stipee is a mobile solution that allows parents
              <br /> to fund, control, and protect their kid’s school
              <br /> stipends.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 xl:ml-16 mt-6 md:mt-0">
            <div className="col-span-1">
              <ul className="grid gap-3">
                <li className="text-font font-semibold text-">Contact</li>
                <li className="text-font-sub hover:text-yellow duration-500ms">
                  <a href="mailto:Stipeeltd@gmail.com">Stipeeltd@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="grid gap-3">
                <li className="text-font font-semibold text-">About </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Company </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Blog </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Career </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Privacy &amp; Terms </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="grid gap-3">
                <li className="text-font font-semibold text-">Support </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Help centre </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Contact us </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">FAQs </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="grid gap-3">
                <li className="text-font font-semibold text-">Offerings </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">How it works </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Contact sales </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Rewards </Link>
                </li>
                <li className="text-font-sub hover:text-yellow duration-500">
                  <Link to="/">Trainings </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 md:py-0 md:h-24 w-full border-t border-abstract md:flex items-center justify-between mt-8">
          <p className="text-font text-sm md:text-base">
            © Stipee Limited 2020, All Rights Reserved{" "}
          </p>
          <p className="text-font mt-2 md:mt-0 text-sm md:text-base">
            6 Cheche Developer Street,Ikeja Lagos Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};
