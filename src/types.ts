export interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  category: string;
  tags: string[];
  icon: string;
  fullDescription?: string;
  features?: { title: string; description: string; icon: string }[];
  stats?: { label: string; value: string }[];
  images?: string[];
  mainImage?: string;
}
