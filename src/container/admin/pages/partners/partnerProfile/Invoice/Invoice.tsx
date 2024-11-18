import React from "react";
import "./invoice.css";
import { InvoiceProps } from "./invoice.interface";
import Index from "../../../../../../component/componentIndex";
import moment from "moment";

const Invoice: React.FC<InvoiceProps> = ({ invoiceDetails }) => {
  return (
    <div className="invoice-pdf">
      <table
        style={{
          maxWidth: 600,
          margin: "auto",
          width: "100%",
          borderSpacing: 0,
          borderCollapse: "separate",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                background: "#ed753f",
                borderRadius: "0 0 20px 20px",
                padding: 20,
              }}
            >
              {/* header start */}
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={Index.Svg.logoWhite}
                                alt=""
                                style={{
                                  filter: "brightness(5.0)",
                                  width: 165,
                                  height: 45,
                                  marginBottom: 11,
                                }}
                              />
                              <div
                                style={{
                                  fontSize: 14,
                                  lineHeight: "16.5px",
                                  marginBottom: "9.45px",
                                  color: "#fff",
                                }}
                              >
                                {invoiceDetails?.business_id?.business_name ||
                                  "-"}
                              </div>
                              <div
                                style={{
                                  fontSize: 10,
                                  lineHeight: "12px",
                                  color: "#fff",
                                }}
                              >
                                {invoiceDetails?.business_id?.address
                                  ?.Address1 +
                                  "," +
                                  invoiceDetails?.business_id?.address
                                    ?.Address2 +
                                  "," +
                                  invoiceDetails?.business_id?.address
                                    ?.Address3}
                              </div>
                            </td>
                            <td style={{ textAlign: "right" }}>
                              <h5
                                style={{
                                  fontSize: 20,
                                  lineHeight: "24px",
                                  marginBottom: "24.14px",
                                  color: "#fff",
                                  marginTop: 0,
                                }}
                              >
                                Invoice
                              </h5>
                              <div
                                style={{
                                  fontSize: 10,
                                  lineHeight: "12px",
                                  marginBottom: 5,
                                  color: "#fff",
                                }}
                              >
                                Date -{" "}
                                {moment(invoiceDetails?.createdAt).format(
                                  "DD/MM/YYYY"
                                ) || "-"}
                              </div>
                              <div
                                style={{
                                  fontSize: 10,
                                  lineHeight: "12px",
                                  color: "#fff",
                                }}
                              >
                                Invoice ref - {invoiceDetails?.invoice_number}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* header end */}
            </td>
          </tr>
          {/* center content */}
          <tr>
            <td style={{ paddingTop: "44.41px" }}>
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: "12.1px",
                        paddingBottom: 5,
                      }}
                    >
                      Wine Name
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: "12.1px",
                        paddingBottom: 5,
                      }}
                    >
                      Qty
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: "12.1px",
                        paddingBottom: 5,
                      }}
                    >
                      Price
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: "12.1px",
                        paddingBottom: 5,
                      }}
                    >
                      VAT
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 700,
                        lineHeight: "12.1px",
                        paddingBottom: 5,
                      }}
                    >
                      Total GBP
                    </th>
                  </tr>
                  <tr>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: "12.1px",
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      {invoiceDetails?.offer_id?.offer_title}
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: "12.1px",
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      {invoiceDetails?.qty || "-"}
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: "12.1px",
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      £{" "}
                      {Number(
                        invoiceDetails?.payment_data?.amount -
                          invoiceDetails?.vat_amount
                      )?.toFixed(2)}
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: "12.1px",
                        paddingTop: 5,
                        paddingBottom: 5,
                      }}
                    >
                      {`£ ${invoiceDetails?.vat_amount?.toFixed(2)} (${
                        invoiceDetails?.vat_percentage
                      }%)`}
                    </th>
                    <th
                      style={{
                        color: "#027C8A",
                        fontSize: 10,
                        fontWeight: 400,
                        lineHeight: "12.1px",
                        paddingTop: 5,
                      }}
                    >
                      £ {invoiceDetails?.payment_data?.amount?.toFixed(2)}
                    </th>
                  </tr>
                  <tr>
                    <td style={{ height: 200 }} colSpan={5} />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table style={{ width: "100%", borderSpacing: 0 }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        height: 100,
                        width: "50%",
                        verticalAlign: "middle",
                        padding: 0,
                      }}
                    >
                      <div style={{ borderTop: "1px solid #ED753F" }} />
                    </td>
                    <td
                      style={{
                        width: "50%",
                        borderRadius: 20,
                        padding: 20,
                        background: "#027C8A",
                        color: "#fff",
                      }}
                    >
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr>
                            <td
                              style={{
                                fontSize: 10,
                                lineHeight: "12px",
                                fontWeight: 400,
                                paddingBottom: "12.89px",
                              }}
                            >
                              Total Before Tax (GBP)
                            </td>
                            <td
                              style={{
                                fontSize: 12,
                                lineHeight: "14.4px",
                                fontWeight: 700,
                                paddingBottom: "12.89px",
                              }}
                            >
                              £
                              {Number(
                                invoiceDetails?.payment_data?.amount -
                                  invoiceDetails?.vat_amount
                              )?.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: 10,
                                lineHeight: "12px",
                                fontWeight: 400,
                                paddingBottom: "12.89px",
                              }}
                            >
                              Tax Amount (GBP){" "}
                            </td>
                            <td
                              style={{
                                fontSize: 12,
                                lineHeight: "14.4px",
                                fontWeight: 700,
                                paddingBottom: "12.89px",
                              }}
                            >
                              £{invoiceDetails?.vat_amount}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                fontSize: 10,
                                lineHeight: "12px",
                                fontWeight: 400,
                                paddingBottom: "12.89px",
                              }}
                            >
                              Total GBP{" "}
                            </td>
                            <td
                              style={{
                                fontSize: 12,
                                lineHeight: "14.4px",
                                fontWeight: 700,
                                paddingBottom: "12.89px",
                              }}
                            >
                              £{invoiceDetails?.payment_data?.amount}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ paddingTop: 70 }}>
              <div style={{ width: "21%" }}>
                <div
                  style={{
                    fontSize: 14,
                    lineHeight: "16.8px",
                    color: "#ED753F",
                    fontWeight: 700,
                  }}
                >
                  Zeebra limited
                </div>
                <p
                  style={{
                    fontSize: 10,
                    lineHeight: "12px",
                    color: "#ED753F",
                    fontWeight: 400,
                  }}
                >
                  33 West Street, Brighton, England, BN1 2RE
                </p>
                <p
                  style={{
                    fontSize: 10,
                    lineHeight: "12px",
                    color: "#ED753F",
                    fontWeight: 400,
                  }}
                >
                  Company Reg No 14485555
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
