import React, { memo } from "react";
import Index from "../componentIndex";
import { UserInvitationCardProps } from "./userInvitationCard.interface";
import { StyledContainer } from "./userInvitationCard.style";

const UserInvitationCard: React.FC<UserInvitationCardProps> = ({ item }) => {
  return (
    <>
      <Index.Grid item xs={12} sm={12} md={12} lg={12} className="item-top">
        <StyledContainer>
          <Index.Typography>{item?.fullName}</Index.Typography>
          <Index.Box className="invite-btn">
            <Index.Button
              variant="contained"
              disableRipple
              sx={{
                background: item?.type === "Pending" ? "#027C8A" : "#ED753F",
              }}
            >
              {item?.type === "Pending" ? "invited" : "accept"}
            </Index.Button>
          </Index.Box>
        </StyledContainer>
      </Index.Grid>
    </>
  );
};

export default memo(UserInvitationCard);
