import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full px-4 md:px-0 z-50 flex justify-center" initial="hidden" animate="show">
      <motion.div className="flex items-center justify-between rounded-xl bg-base-200 mt-5 shadow-lg w-full md:max-w-screen-md lg:max-w-screen-lg px-4 py-2" variants={item}>
        <Link className="btn btn-ghost normal-case text-xl" href="/">prinke.dev</Link>
        <motion.ul className="menu menu-horizontal px-1" variants={item}>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link passHref href="/contact">Contact</Link>
          </li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}
