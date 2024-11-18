import { RefObject } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { PartnerDataProps } from "../../../../../services/redux/userData/interface";

export interface PartnerProfileControllerProps {
  goBack: () => void;
  deleteSpinner: boolean;
  deletePartner: () => void;
  openDialog: boolean;
  handleOpenDialog: () => void;
  handleCloseDialog: () => void;
  loading: boolean;
  partnerInfo?: PartnerDataProps;
  snackbar: boolean;
  setSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
  toast?: string;
  transactionList?: TransactionListProps[];
  invoiceDetails?: TransactionListProps;
  handleInvoiceDownload: (item: TransactionListProps) => void;
  downloadInvoiceRef: RefObject<PDFExport> | null;
  disable: boolean;
}

export interface TransactionListProps {
  _id: string;
  business_id: {
    address: {
      Address1: string;
      Address2: string;
      Address3: string;
    };
    _id: string;
    business_name: string;
  };
  payment_data: {
    id: string;
    object: string;
    amount: number;
    amount_capturable: number;
    amount_received: number;
    application: string;
    application_fee_amount: number;
    automatic_payment_methods: string;
    canceled_at: string;
    cancellation_reason: string;
    capture_method: string;
    client_secret: string;
    confirmation_method: string;
    created: number;
    currency: string;
    customer: string;
    description: string;
    invoice: string;
    last_payment_error: string;
    latest_charge: string;
    livemode: boolean;
    next_action: {
      type: string;
      use_stripe_sdk: {
        source: string;
        stripe_js: string;
        type: string;
      };
    };
    on_behalf_of: string;
    payment_method: string;
    payment_method_options: {
      card: {
        installments: string;
        mandate_options: string;
        network: string;
        request_three_d_secure: string;
      };
    };
    payment_method_types: string[];
    processing: string;
    receipt_email: string;
    review: string;
    setup_future_usage: string;
    shipping: string;
    source: string;
    statement_descriptor: string;
    statement_descriptor_suffix: string;
    status: string;
    transfer_data: string;
    transfer_group: string;
  };
  offer_id: {
    _id: string;
    offer_title: string;
    offer_description: string;
  };
  qty: number;
  vat_amount: number;
  vat_percentage: number;
  invoice_number: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
