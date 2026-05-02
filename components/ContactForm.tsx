"use client";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-card border border-blue-100">
      {submitted && (
        <div className="p-3 bg-peach-100 text-blue-900 rounded-lg text-center font-medium">Message sent successfully! We will contact you shortly.</div>
      )}
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-1">Full Name</label>
        <input type="text" required className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-peach-300 focus:border-transparent outline-none transition bg-blue-50" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Jane Wanjiru" />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-1">Email Address</label>
        <input type="email" required className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-peach-300 focus:border-transparent outline-none transition bg-blue-50" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@email.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-900 mb-1">Message</label>
        <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-peach-300 focus:border-transparent outline-none transition bg-blue-50" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help you?" />
      </div>
      <button type="submit" className="w-full bg-peach-300 hover:bg-blue-700 text-blue-900 font-bold py-3 rounded-lg transition-colors duration-300 shadow-soft">
        Send Message
      </button>
    </form>
  );
}