export interface RecommendationControllerProps {
  loading: boolean;
  search?: string;
  handleSearch: (value: string) => void;
  recommendation: RecommendationProps[];
  filter: RecommendationProps[] | null;
}

export interface RecommendationProps {
  id: string;
  username: string;
  date: string;
  type: string;
  suggestion: string;
  address: string;
}
