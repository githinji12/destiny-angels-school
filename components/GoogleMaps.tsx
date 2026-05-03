"use client";

import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  embedUrl: string;
}

const branches: Branch[] = [
  {
    id: "huruma",
    name: "Main Branch - Huruma",
    address: "Kiamaiko, Mathare Sub-County, Nairobi",
    lat: -1.2634,
    lng: 36.8594,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8208!2d36.8572!3d-1.2634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTUnNDguMiJTIDM2wrA1MScyNi4xIkU!5e0!3m2!1sen!2ske!4v1234567890"
  },
  {
    id: "mwihoko",
    name: "Mwihoko Branch",
    address: "Mwihoko, Nairobi",
    lat: -1.2456,
    lng: 36.8234,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8208!2d36.8212!3d-1.2456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTQnNDQuMiJTIDM2wrA0OScxNi4zIkU!5e0!3m2!1sen!2ske!4v1234567890"
  },
  {
    id: "kariobangi",
    name: "Kariobangi South",
    address: "Kariobangi South, Nairobi",
    lat: -1.2789,
    lng: 36.8912,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8208!2d36.8890!3d-1.2789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDQuMCJTIDM2wrA1MycyOC4zIkU!5e0!3m2!1sen!2ske!4v1234567890"
  },
  {
    id: "githurai",
    name: "Githurai 44",
    address: "Githurai 44, Nairobi",
    lat: -1.2123,
    lng: 36.8678,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8208!2d36.8656!3d-1.2123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTInNDQuMyJTIDM2wrA1MScwNC4xIkU!5e0!3m2!1sen!2ske!4v1234567890"
  },
];

export function GoogleMaps() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <div className="w-full">
      {/* Branch Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {branches.map((branch) => (
          <button
            key={branch.id}
            onClick={() => setActiveBranch(branch)}
            className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeBranch.id === branch.id
                ? "bg-blue-900 text-white shadow-lg scale-105"
                : "bg-white text-blue-900 hover:bg-blue-50 border border-blue-200"
            }`}
          >
            <MapPin size={16} className="mx-auto mb-1" />
            <span className="block text-xs">{branch.name}</span>
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <iframe
          src={activeBranch.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map showing ${activeBranch.name}`}
          className="absolute inset-0"
        />
      </div>

      {/* Branch Info Card */}
      <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <h3 className="font-bold text-blue-900 text-lg">{activeBranch.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{activeBranch.address}</p>
          </div>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${activeBranch.lat},${activeBranch.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-peach-300 hover:bg-blue-700 text-blue-900 hover:text-white font-semibold rounded-lg transition-all duration-300 shadow-md"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}