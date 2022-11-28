import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Bootstrap = () => {
  return (
    <main id="app" className="h-screen">
      <section
        id="content"
        className={"mx-auto max-w-[1600px] sm:px-14 2xl:px-28 pb-14"}
      >
        <Suspense fallback={<div>404</div>}>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default Bootstrap;
