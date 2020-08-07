import React from "react";

function HScroll(props) {
  return (
    <div className=" scrolling-auto md:scrolling-touch overflow-x-auto w-full py-8">
      {props.children}
    </div>
  );
}
export default HScroll;
