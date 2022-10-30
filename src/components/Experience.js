import React from "react";
import { motion } from "framer-motion";

function Experience(props) {
  return (
    <div>
      <motion.div className="m-3" whileHover={{ scale: 1.1 }}>
        <div className="rounded-xl lg:p-10 md:p-5 bg-bgray min-h-[50px] max-h-[500px]">
          <div className="flex justify-between">
            <h1 className="lg:text-3xl md:text-xl sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-gpl to-gpr">
              {props.name}
            </h1>
            <p className="text-silverwhite font-semibold lg:text-base md:text-sm sm:text-xs mx-2">
              {props.start} {props.end}
            </p>
          </div>
          <div className="lg:text-l md:text-base sm:text-sm font-semibold pt-5 text-silverwhite">
            <div>
              <p className=" italic ">
                {props.place} {props.city}
              </p>
            </div>
          </div>
          <div className="text-silverwhite mt-3 lg:text-l md:text-base sm:text-sm">
            <ul className="list-disc">
              <li className="mx-5 my-1">{props.p1}</li>
              <li className="mx-5 my-1">{props.p2}</li>
              <li className="mx-5 my-1">{props.p3}</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;
