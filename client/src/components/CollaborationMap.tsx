/*
 * CollaborationMap — Interactive world map showing PWRlab's global research network
 * Uses Leaflet.js + OpenStreetMap tiles
 * Curved lines connect each collaborator to BJFU Beijing
 */
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Users } from "lucide-react";

interface Collaborator {
  name: string;
  institution: { en: string; zh: string };
  area: { en: string; zh: string };
  lat: number;
  lng: number;
  country: string;
}

const BJFU = { lat: 40.0003, lng: 116.3472 }; // Beijing Forestry University

const collaborators: Collaborator[] = [
  {
    name: "Mark Coleman",
    institution: { en: "University of Idaho", zh: "爱达荷大学" },
    area: { en: "Plantation management, biomass production", zh: "人工林经营、生物质生产" },
    lat: 46.7298, lng: -117.0145, country: "USA",
  },
  {
    name: "Brent Clothier",
    institution: { en: "Plant and Food Research", zh: "新西兰植物与食品研究所" },
    area: { en: "Soil physics, vadose zone hydrology", zh: "土壤物理、包气带水文" },
    lat: -40.3523, lng: 175.6082, country: "New Zealand",
  },
  {
    name: "Nadezhda Nadezhdina",
    institution: { en: "Mendel University", zh: "门德尔大学" },
    area: { en: "Sap flow methodology, tree water relations", zh: "液流方法学、树木水分关系" },
    lat: 49.2103, lng: 16.6158, country: "Czech Republic",
  },
  {
    name: "Chamindu Deepagoda",
    institution: { en: "Lincoln University", zh: "林肯大学" },
    area: { en: "Soil physics, environmental monitoring", zh: "土壤物理、环境监测" },
    lat: -43.6461, lng: 172.4674, country: "New Zealand",
  },
  {
    name: "Wei Hu",
    institution: { en: "Plant and Food Research", zh: "新西兰植物与食品研究所" },
    area: { en: "Soil physics, water resource management", zh: "土壤物理学、水资源管理" },
    lat: -43.5321, lng: 172.6362, country: "New Zealand",
  },
];

// Generate a curved path between two points using quadratic Bezier
function getCurvedPath(from: { lat: number; lng: number }, to: { lat: number; lng: number }): string {
  const midLat = (from.lat + to.lat) / 2;
  const midLng = (from.lng + to.lng) / 2;
  const dLat = Math.abs(from.lat - to.lat);
  const dLng = Math.abs(from.lng - to.lng);
  const offset = Math.sqrt(dLat * dLat + dLng * dLng) * 0.2;
  const controlLat = midLat + offset;
  const controlLng = midLng;

  // SVG path in lat/lng coordinates — we'll convert to pixel in the component
  return `M ${from.lng} ${from.lat} Q ${controlLng} ${controlLat} ${to.lng} ${to.lat}`;
}

export default function CollaborationMap() {
  const { lang } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const countries = new Set(collaborators.map((c) => c.country));

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix default icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [25, 60],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });

      // Use CartoDB Positron for a clean, academic look
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      // BJFU marker (larger, different color)
      const bjfuIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="width:16px;height:16px;background:#1B4332;border:3px solid #B8860B;border-radius:50%;box-shadow:0 0 8px rgba(27,67,50,0.5);"></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      L.marker([BJFU.lat, BJFU.lng], { icon: bjfuIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'Source Sans 3',sans-serif;min-width:180px;">
            <strong style="color:#1B4332;font-size:14px;">Beijing Forestry University</strong><br/>
            <span style="color:#666;font-size:12px;">北京林业大学 · PWRlab</span>
          </div>`
        );

      // Collaborator markers and curved lines
      const collabIcon = L.divIcon({
        className: "custom-marker",
        html: `<div style="width:12px;height:12px;background:#2D6A4F;border:2px solid #fff;border-radius:50%;box-shadow:0 0 6px rgba(45,106,79,0.4);"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6],
      });

      collaborators.forEach((collab) => {
        // Marker
        L.marker([collab.lat, collab.lng], { icon: collabIcon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:'Source Sans 3',sans-serif;min-width:200px;">
              <strong style="color:#1B4332;font-size:13px;">${collab.name}</strong><br/>
              <span style="color:#2D6A4F;font-size:12px;">${collab.institution[lang]}</span><br/>
              <span style="color:#666;font-size:11px;line-height:1.4;">${collab.area[lang]}</span>
            </div>`
          );

        // Curved line to BJFU
        const from = { lat: BJFU.lat, lng: BJFU.lng };
        const to = { lat: collab.lat, lng: collab.lng };
        const midLat = (from.lat + to.lat) / 2;
        const midLng = (from.lng + to.lng) / 2;
        const dLat = Math.abs(from.lat - to.lat);
        const dLng = Math.abs(from.lng - to.lng);
        const offset = Math.sqrt(dLat * dLat + dLng * dLng) * 0.15;

        // Create intermediate points for the curve
        const points: [number, number][] = [];
        const steps = 30;
        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const lat = (1 - t) * (1 - t) * from.lat + 2 * (1 - t) * t * (midLat + offset) + t * t * to.lat;
          const lng = (1 - t) * (1 - t) * from.lng + 2 * (1 - t) * t * midLng + t * t * to.lng;
          points.push([lat, lng]);
        }

        L.polyline(points, {
          color: "#2D6A4F",
          weight: 1.5,
          opacity: 0.5,
          dashArray: "6 4",
        }).addTo(map);
      });

      mapInstanceRef.current = map;
      setIsLoaded(true);

      // Force resize after mount
      setTimeout(() => map.invalidateSize(), 100);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lang]);

  return (
    <div className="mb-16">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-forest/10 dark:bg-forest-light/10 flex items-center justify-center">
          <Globe className="w-5 h-5 text-forest dark:text-forest-light" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {lang === "en" ? "Global Collaboration Network" : "全球合作网络"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {lang === "en"
              ? "Research partnerships spanning multiple continents"
              : "跨越多个大洲的科研合作伙伴"}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-forest dark:text-forest-light" />
          <span className="text-sm text-foreground">
            <strong className="text-forest dark:text-forest-light">{collaborators.length}+</strong>{" "}
            {lang === "en" ? "International Partners" : "国际合作者"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gold dark:text-gold-light" />
          <span className="text-sm text-foreground">
            <strong className="text-gold dark:text-gold-light">{countries.size}</strong>{" "}
            {lang === "en" ? "Countries" : "个国家"}
          </span>
        </div>
      </div>

      {/* Map container */}
      <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-sm">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        />
        <div
          ref={mapRef}
          className="w-full"
          style={{ height: "450px" }}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
            <div className="text-sm text-muted-foreground">
              {lang === "en" ? "Loading map..." : "加载地图中..."}
            </div>
          </div>
        )}
      </div>

      {/* Collaborator list below map */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {collaborators.map((collab) => (
          <div
            key={collab.name}
            className="bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-forest dark:bg-forest-light mt-2 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{collab.name}</p>
                <p className="text-xs text-forest dark:text-forest-light">{collab.institution[lang]}</p>
                <p className="text-xs text-muted-foreground mt-1">{collab.area[lang]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
