import { LucideIcon } from "lucide-react";

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  description: string;
  color: string;
  iconUrl?: string; // For the custom PNGs provided
  fallbackIcon?: LucideIcon; // Fallback if image fails or for styling
}

export interface ThemeColor {
  name: string;
  hex: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}
