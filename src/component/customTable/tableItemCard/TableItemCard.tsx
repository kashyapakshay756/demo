import React, { memo } from "react";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import { constant } from "../../../services/constant";
import { Delete, EditSharp, Visibility } from "@mui/icons-material";
import { TableItemCardProps } from "./tableItemCard.interface";
import { StyledIconButton, StyledTextField } from "./tableItemCard.style";

const TableItemCard: React.FC<TableItemCardProps> = ({
  item,
  isViewButton,
  isEditButton,
  onViewButton,
  onEditButton,
  isDeleteButton,
  onDeleteButton,
  deleteLoading,
  isVoucher,
  isButton,
  end,
}) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {Object.keys(item)
        .filter((k) => k !== "id")
        .map((x) => (
          <React.Fragment key={`${item._id}${x}`}>
            {x === "email" ? (
              <TableCell align="center" className="emailborder">
                {item[x] ? item[x] : "-"}
              </TableCell>
            ) : x === "template" || x === "video" ? (
              item[x] ? (
                <TableCell align="center">
                  <a
                    href={constant.uploads + item[x]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item[x]}
                  </a>
                </TableCell>
              ) : (
                <TableCell align="center">{"-"}</TableCell>
              )
            ) : isVoucher && x === "voucherCost" ? (
              <TableCell align="center">
                <Box
                  className="admin-table-input"
                  sx={{
                    dispaly: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box className="input-design-div">
                    <StyledTextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      value={`£ ${item[x]?.split(",")[0]}`}
                      variant="filled"
                      className="admin-input-box input-placeholder set-getting-box"
                      disabled
                    />
                  </Box>
                  <Box className="input-design-div">
                    <StyledTextField
                      hiddenLabel
                      id="filled-hidden-label-normal"
                      value={`${item[x]?.split(",")[1]}%`}
                      variant="filled"
                      className=" admin-input-box input-placeholder set-getting-box"
                      disabled
                    />
                  </Box>
                </Box>
              </TableCell>
            ) : (
              <TableCell align="center">{item[x] ? item[x] : "-"}</TableCell>
            )}
          </React.Fragment>
        ))}
      {isButton && (
        <TableCell align="center">
          <Box
            sx={{
              display: "flex",
              justifyContent: end ? "flex-end" : "center",
              alignItems: "center",
            }}
          >
            {isEditButton && (
              <StyledIconButton
                disableRipple
                onClick={onEditButton && onEditButton}
              >
                <EditSharp fontSize="small" sx={{ color: "white" }} />
              </StyledIconButton>
            )}
            {isDeleteButton && (
              <StyledIconButton
                disableRipple
                onClick={onDeleteButton && onDeleteButton}
                sx={{ marginLeft: isEditButton ? 2 : 0 }}
              >
                <Delete sx={{ color: "white" }} fontSize="small" />
              </StyledIconButton>
            )}
            {isViewButton && (
              <IconButton
                onClick={onViewButton && onViewButton}
                sx={{ marginLeft: isEditButton ? 2 : 0 }}
              >
                <Visibility fontSize="medium" sx={{ color: "#ED753F" }} />
              </IconButton>
            )}
          </Box>
        </TableCell>
      )}
    </TableRow>
  );
};

export default memo(TableItemCard);
