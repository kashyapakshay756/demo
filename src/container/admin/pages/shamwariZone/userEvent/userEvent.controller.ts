import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../../../services/api/api";
import { checkNumeric } from "../../../../../utils/validation/validation";
import { constant } from "../../../../../services/constant";
import {
  EventListProps,
  UserEventControllerProps,
} from "./userEvent.interface";
import validationMessage from "../../../../../utils/validation/validationMessage";

const UserEventController = (): UserEventControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [eventList, setEventList] = useState<EventListProps[]>([]);
  const [eventCost, setEventCost] = useState<string>();
  const [id, setId] = useState<string>();
  const [updateSpinner, setUpdateSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [snackbarMessage, setSnackbarMessage] = useState<string>();
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const navigation = useNavigate();

  useEffect(() => {
    getEventCost();
  }, []);

  const onView = (id: string): void => {
    navigation(`/admin/${id}/userEventInfo`);
  };

  const getEventCost = async () => {
    /* API call for getting event amount */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getEventAmount}`
      );
      setEventCost(data?.data[0]?.event_amount);
      setId(data?.data[0]?._id);
    } catch (error) {}
  };

  const updateEventCost = async () => {
    /* API call for updating event amount */
    try {
      setUpdateSpinner(true);
      const formData = {
        id: id,
        event_amount: eventCost,
      };
      const { data } = await axiosInstance.post(
        `${constant.admin}${constant.updateEventAmount}`,
        formData
      );
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(data?.message);
      getEventCost();
    } catch (error: any) {
      setUpdateSpinner(false);
      setOpenSnackbar(true);
      setSnackbarMessage(error?.data?.message);
    }
  };

  const validation = (): void => {
    let isValid = true;
    if (!eventCost?.trim()) {
      isValid = false;
      setError(validationMessage.emptyCost);
    } else if (!checkNumeric(eventCost)) {
      isValid = false;
      setError(validationMessage.invalidCost);
    } else {
      setError(undefined);
    }
    if (isValid) {
      updateEventCost();
    }
  };

  return {
    onView,
    loading,
    eventList,
    eventCost,
    setEventCost,
    updateSpinner,
    validation,
    error,
    setOpenSnackbar,
    openSnackbar,
    snackbarMessage,
  };
};

export default UserEventController;
