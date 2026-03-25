export interface Feature {
  name: string;
  price: number;
}

export interface HostingPlan {
  name: string;
  storage: string;
  subdomain: string;
  mysql: number;
  monthlyPrice: number;
  yearlyPrice: number;
  group: string;
}

export interface DomainPrice {
  extension: string;
  newPrice: number;
  renewalPrice: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}
