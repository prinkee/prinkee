import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content z-0 relative">
      <div>
      <p>© prinke.dev {new Date().getFullYear()} | <a href="https://twitter.com/prinkeo" className="link-primary" target="_blank">twitter</a>, <a href="https://github.com/prinkee" className="link-primary" target="_blank">github</a> | built with <a href="https://daisyui.com" className="link-primary" target="_blank">daisyUI</a></p>
      </div>
    </footer>
  );
}
