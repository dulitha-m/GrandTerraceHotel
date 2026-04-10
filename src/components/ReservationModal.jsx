import React from "react";
import { X, Calendar, Users, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ReservationModal({ open, onClose }) {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    date: "",
    guests: "2",
    note: "",
  });

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function update(k, v) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    // This demo shows a "mailto" fallback. Replace with your WhatsApp/CRM/API.
    const subject = encodeURIComponent("Grand Terrace Reservation Request");
    const body = encodeURIComponent(
      `Name: ${form.name}
Phone: ${form.phone}
Date/Time: ${form.date}
Guests: ${form.guests}
Note: ${form.note}`
    );
    window.location.href = `mailto:reservations@example.com?subject=${subject}&body=${body}`;
    onClose?.();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <motion.div
            className="card w-full max-w-lg overflow-hidden"
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between border-b border-black/10 p-6">
              <div>
                <div className="font-display text-xl">Reserve a Table</div>
                <div className="text-xs text-black/60">This opens an email draft. You can connect WhatsApp/API later.</div>
              </div>
              <button className="btn-outline" onClick={onClose} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={submit} className="grid gap-4 p-6">
              <label className="grid gap-2 text-sm">
                Name
                <input
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  required
                  className="rounded-2xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Phone size={16} /> Phone
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  required
                  className="rounded-2xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="+94..."
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={16} /> Date & time
                  </span>
                  <input
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    required
                    className="rounded-2xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                    placeholder="e.g., 2026-02-20 7:30 PM"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <Users size={16} /> Guests
                  </span>
                  <select
                    value={form.guests}
                    onChange={(e) => update("guests", e.target.value)}
                    className="rounded-2xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={String(n)}>
                        {n}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm">
                Note (optional)
                <textarea
                  value={form.note}
                  onChange={(e) => update("note", e.target.value)}
                  className="min-h-[90px] rounded-2xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                  placeholder="Occasion, seating preference, allergies, etc."
                />
              </label>

              <button className="btn" type="submit">Send request</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
