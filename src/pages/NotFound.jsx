import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-pad py-16">
      <div className="card p-10 text-center">
        <div className="font-display text-4xl">404</div>
        <div className="mt-2 text-black/70">Page not found.</div>
        <div className="mt-6 flex justify-center gap-3">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn-outline" to="/dining">Dining</Link>
        </div>
      </div>
    </div>
  );
}
