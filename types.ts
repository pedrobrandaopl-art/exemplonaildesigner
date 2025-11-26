export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface AIResponseState {
  loading: boolean;
  error: string | null;
  suggestion: string | null;
}