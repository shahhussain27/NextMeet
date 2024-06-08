import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 z-20 flex flex-col gap-12 overflow-auto h-screen w-[300px] xl:w-[350px] pl-6 py-6 pr-10 max-lg:hidden">
      <div className="flex flex-col gap-4">
        <h4 className="font-semibold">Following</h4>
        <div className="flex flex-col gap-4">Users</div>
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-semibold">Suggested People</h4>
        <div className="flex flex-col gap-4">Users</div>
      </div>
    </div>
  );
};

export default RightSideBar;
