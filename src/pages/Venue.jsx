import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BadgeCheck, UtensilsCrossed } from "lucide-react";
import { venues } from "../data/venues.js";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Venue() {
  const { id } = useParams();
  const v = venues.find((x) => x.id === id);

  if (!v) {
    return (
      <div className="container-pad py-16">
        <div className="card p-8">
          <div className="font-display text-2xl">Venue not found</div>
          <p className="mt-2 text-sm text-black/70">
            The venue ID in the URL doesn’t match your data. Check <span className="font-mono">src/data/venues.js</span>.
          </p>
          <Link to="/dining" className="btn-outline mt-6">
            <ArrowLeft size={18} /> Back to dining
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-pad py-12">
      <Link to="/dining" className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black">
        <ArrowLeft size={18} /> Back to dining
      </Link>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="card p-8 lg:col-span-2">
          <SectionHeading eyebrow={v.type} title={v.name} desc={v.description} />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Info icon={<Clock size={16} />} label="Hours" value={v.hours} />
            <Info icon={<BadgeCheck size={16} />} label="Dress code" value={v.dressCode} />
            <Info icon={<UtensilsCrossed size={16} />} label="Highlights" value={v.highlights.join(" · ")} />
            <Info icon={<BadgeCheck size={16} />} label="Best for" value={v.tags.join(" · ")} />
          </div>

          <div className="mt-8 rounded-3xl border border-black/10 bg-black/[0.02] p-6">
            <div className="font-medium">Add your real content here</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/70">
              <li>Replace this section with menu PDF links, images, pricing, and promotions.</li>
              <li>Add a gallery slider (easy to add later).</li>
              <li>Connect the “Reserve” button to WhatsApp or your booking system.</li>
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card p-7">
            <div className="font-display text-xl">Signature notes</div>
            <p className="mt-2 text-sm text-black/70">
              Keep the story short and premium. Talk about ambience, signature flavours, and what makes the venue unique.
            </p>
          </div>

          <div className="card p-7">
            <div className="font-display text-xl">Quick links</div>
            <div className="mt-4 grid gap-2 text-sm">
              <Link className="btn-outline" to="/contact">Contact</Link>
              <Link className="btn-outline" to="/dining">All venues</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-5">
      <div className="flex items-center gap-2 text-xs text-black/60">
        {icon} {label}
      </div>
      <div className="mt-2 text-sm">{value}</div>
    </div>
  );
}
