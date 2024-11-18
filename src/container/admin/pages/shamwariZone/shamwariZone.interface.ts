import { SyntheticEvent } from "react";
import { TabChangeProps } from "../users/personalInfo/personalInfo.interface";
import { EventListProps } from "./userEvent/userEvent.interface";

export interface ShamwariZoneControllerProps {
  search?: string;
  tabValue: number;
  handleTabValueChange: (event: SyntheticEvent, newValue: number) => void;
  tabChange: (index: number) => TabChangeProps;
  onView: (id: string) => void;
  loading: boolean;
  events?: EventProps[];
  filterData: EventProps[] | null;
  eventSearch: (value: string) => void;
  onAdd: () => void;
  eventList: EventListProps[];
  eventFilter: EventListProps[] | null;
}

export interface EventProps {
  id: string;
  serialNo: number;
  title: string;
  date: string;
  userType: string;
  uniArea: string;
}
