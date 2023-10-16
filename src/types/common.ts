export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IPrice = {
  amountPerWeek: number;
  daysPerWeek: number;
};

export type IService = {
  instructorId: string;
  subject: string;
  description: string;
  image?: string;
  price: IPrice[];
  level: "junior" | "secondary" | "higher-secondary";
  rating?: number;
  location: string;
  seats: number;
  enrolled?: number;
  isAvailable?: boolean;
  classtime: string;
};

