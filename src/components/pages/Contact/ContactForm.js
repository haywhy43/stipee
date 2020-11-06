import React from "react";
import Button from "../../UI/button";

export default () => {
  return (
    <form className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full">
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Enter full name"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="School name"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Position in school"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="School address"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Phone number"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="School phone no"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="Email"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <input
          type="text"
          placeholder="School email address"
          className="text-sm placeholder-font-sub h-12 rounded-xs border border-snow-300 px-3 w-full"
        />
      </div>
      <div className="col-span-1">
        <Button text="Send now" icon="arrow-right" animationType="bounceLeft" />
      </div>
    </form>
  );
};
