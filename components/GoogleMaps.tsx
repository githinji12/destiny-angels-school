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
    lat: -1.2586,
    lng: 36.8755,
    // ✅ UPDATED: New accurate embed URL for Huruma
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8557061185356!2d36.875541399999996!3d-1.2586238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f142465ac8f61%3A0x52edfb814630450d!2sAngels%20Of%20Mercy!5e0!3m2!1sen!2ske!4v1778071099510!5m2!1sen!2ske"
  },
  {
    id: "mwihoko",
    name: "Mwihoko Branch",
    address: "Mwihoko, Nairobi",
    lat: -1.1934,
    lng: 36.9596,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31911.622843349116!2d36.95958881612718!3d-1.1934209481556153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f41ac9c130a93%3A0xa36317cab49f050a!2sDestiny%20Angels%20school!5e0!3m2!1sen!2ske!4v1777914617872!5m2!1sen!2ske"
  },
  {
    id: "kariobangi",
    name: "Kariobangi South",
    address: "Kariobangi South, Nairobi",
    lat: -1.2248,
    lng: 36.8444,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127645.01791073327!2d36.84439995790848!3d-1.224757783776005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15ffd773e43b%3A0xc7191b80c179b526!2sDestiny%20Youngstars%20Learning%20Center!5e0!3m2!1sen!2ske!4v1777914724418!5m2!1sen!2ske"
  },
  {
    id: "githurai",
    name: "Githurai 44",
    address: "Githurai 44, Nairobi",
    lat: -1.2032,
    lng: 36.9034,
    // ✅ UPDATED: New accurate embed URL for Githurai 44
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.938546949468!2d36.90336669999999!3d-1.2032460999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc8d8dd2ca5%3A0xb885f4041d89f420!2sLins%20education%20centre!5e0!3m2!1sen!2ske!4v1778071155722!5m2!1sen!2ske"
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
