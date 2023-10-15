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

type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

  type IWeeklySchedule = {
    days: (
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday"
    )[];
    seats: number;
    enrolled: number;
    isAvailable: boolean;
    classtime: string;
  };

export type IService = {
  instructorId: string;
  subject: string;
  description: string;
  image: string;
  price: number;
  level: "junior" | "secondary" | "higher-secondary";
  startTime: Months;
  endTime: Months;
  duration: string;
  rating?: number;
  location: string;
  weeklySchedules: IWeeklySchedule;
};

