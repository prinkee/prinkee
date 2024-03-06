import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-white z-0 relative">
      <div>
        <p>
          &copy; prinke.dev {new Date().getFullYear()} |{" "}
          <Link
            href="https://twitter.com/prinketaru"
            className="link-primary"
            target="_blank"
          >
            x (formerly twitter)
          </Link>
          ,{" "}
          <Link
            href="https://github.com/prinketaru"
            className="link-primary"
            target="_blank"
          >
            github
          </Link>{" "}
          | built with{" "}
          <Link
            href="https://daisyui.com"
            className="link-primary"
            target="_blank"
          >
            daisyUI
          </Link>
        </p>
      </div>
    </footer>
  );
}
