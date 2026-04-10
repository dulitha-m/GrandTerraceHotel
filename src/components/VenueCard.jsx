import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VenueCard({ v, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
      className="card overflow-hidden"
    >
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="pill mb-3">{v.type}</div>
            <div className="font-display text-2xl">{v.name}</div>
            <div className="mt-2 flex items-center gap-2 text-xs text-black/60">
              <Clock size={14} /> {v.hours}
            </div>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white">
            <Sparkles size={18} />
          </div>
        </div>

        <p className="mt-4 text-sm text-black/70">{v.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {v.tags.map((t) => (
            <span key={t} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link to={`/dining/${v.id}`} className="btn-outline w-full">
            View details <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
