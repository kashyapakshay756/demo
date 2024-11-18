import React from "react";

export interface UserEventControllerProps {
  onView: (id: string) => void;
  eventList: EventListProps[];
  loading: boolean;
  eventCost?: string;
  setEventCost: React.Dispatch<React.SetStateAction<string | undefined>>;
  updateSpinner: boolean;
  validation: () => void;
  error?: string;
  snackbarMessage?: string;
  openSnackbar?: boolean;
  setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserEventProps {
  eventList: EventListProps[];
  filterData: EventListProps[] | null;
  search?: string;
}

export interface EventListProps {
  id: string;
  serialNo: number;
  title: string;
  date: string;
  userType: string;
  uniArea: string;
}
