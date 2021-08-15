export interface Product {
  id: string,
  name: string,
  caffeineContent: string;
  description: string;
};

export const emptyProduct = {
  id: '',
  name: '',
  caffeineContent: '',
  description: ''
};