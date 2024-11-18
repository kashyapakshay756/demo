import { useEffect, useRef, useState } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../../../../../services/api/api";
import { constant } from "../../../../../services/constant";
import { PartnerDataProps } from "../../../../../services/redux/userData/interface";
import {
  PartnerProfileControllerProps,
  TransactionListProps,
} from "./partnerProfile.interface";

const PartnerProfileController = (): PartnerProfileControllerProps => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(false);
  const [toast, setToast] = useState<string>();
  const [partnerInfo, setPartnerInfo] = useState<PartnerDataProps>();
  const [transactionList, setTransactionList] =
    useState<TransactionListProps[]>();
  const [invoiceDetails, setInvoiceDetails] = useState<TransactionListProps>();

  const downloadInvoiceRef = useRef<PDFExport>(null);

  const navigation = useNavigate();
  const { partnerId } = useParams();

  useEffect(() => {
    getPartners();
    getTransactionList();
  }, []);

  const getPartners = async () => {
    /* API call for getting partner list */
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.adminGetAllPartners}`
      );
      setLoading(false);
      const list = data?.data?.filter(
        (item: any) => item?._id === partnerId
      )[0];
      setPartnerInfo(list);
    } catch (error: any) {
      setLoading(false);
      setSnackbar(true);
      setToast(error?.data?.message);
    }
  };

  const getTransactionList = async () => {
    /* API call for getting transaction list */
    try {
      const { data } = await axiosInstance.get(
        `${constant.admin}${constant.getTransactionList}?business_id=${partnerId}`
      );
      setTransactionList(data?.data);
    } catch (error) {}
  };

  const goBack = (): void => {
    navigation(-1);
  };

  const handleOpenDialog = (): void => {
    setOpenDialog(true);
    setDisable(false);
  };

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
    setDisable(false);
  };

  const handleInvoiceDownload = (item: TransactionListProps) => {
    /* Invoice download */
    if (downloadInvoiceRef?.current) {
      setInvoiceDetails(item);
      setTimeout(() => {
        downloadInvoiceRef?.current?.save();
      }, 100);
    }
  };

  const deletePartner = async () => {
    /* API call for deleting partner */
    try {
      setDeleteSpinner(true);
      const formData = {
        id: partnerId,
      };
      setDisable(true);
      await axiosInstance.post(
        `${constant.admin}${constant.adminDeleteZeebraPartner}`,
        formData
      );
      setDeleteSpinner(false);
      handleCloseDialog();
      goBack();
    } catch (error) {
      setDeleteSpinner(false);
      setDisable(false);
    }
  };

  return {
    partnerInfo,
    goBack,
    deletePartner,
    deleteSpinner,
    handleCloseDialog,
    handleOpenDialog,
    openDialog,
    loading,
    setSnackbar,
    snackbar,
    toast,
    transactionList,
    handleInvoiceDownload,
    downloadInvoiceRef,
    invoiceDetails,
    disable,
  };
};

export default PartnerProfileController;
