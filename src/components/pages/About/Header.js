import React from "react";
import PageHeader from "../../content/PageHeader";

export default () => {
  return (
    <PageHeader alternate>
      <div className="h-48 w-full"></div>
      <div className="w-11/12 xl:w-10/12 mx-auto">
        <h1 className="text-font font-semibold text-3xl md:text-4xl animated fadeInUp">What we about</h1>
        <h2 className="text-font md:text-lg w-11/12 md:w-4/5 lg:w-1/2 mt-4 animated fadeInUp delay-200ms">
          Stipee Enterprises is a company pioneering the use of mobile
          technology to enable parents to fund, control, and protect their kid's
          school stipends. Our mission is to power all financial transactions in
          schools.
        </h2>
      </div>
      <div className="h-32 w-full"></div>
    </PageHeader>
  );
};
