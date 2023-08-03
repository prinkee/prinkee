import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full px-4 md:px-0 z-50 flex justify-center" initial="hidden" animate="show">
      <motion.div className="flex items-center justify-between rounded-xl bg-base-200 mt-5 shadow-lg w-full md:max-w-screen-md lg:max-w-screen-lg px-4 py-2" variants={item}>
        <a className="btn btn-ghost normal-case text-xl" href="/">prinke.dev</a>
        <motion.ul className="menu menu-horizontal px-1" variants={item}>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
