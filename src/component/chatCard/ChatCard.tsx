import React, { memo } from "react";
import { useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ChatCardProps, RenderReplyProps } from "./chatCard.interface";
import { constant } from "../../services/constant";
import Index from "../componentIndex";
import { useAppSelector } from "../../services/redux/controller";
import {
  StyledBorder,
  StyledBox,
  StyledButtonContainer,
  StyledContainer,
  StyledDetailsContainer,
  StyledImage,
  StyledMessageContainer,
  StyledPlus,
  StyleMainContainer,
} from "./chatCard.style";

const ChatCard: React.FC<ChatCardProps> = ({
  item,
  onLike,
  onDelete,
  onReply,
  type = "comment",
  onMoreImages,
}) => {
  const theme = useTheme();

  const { userData } = useAppSelector((state) => state.userReducer);

  const onbutton = (value: string) => {
    window.open(value, "_blank");
  };

  const RenderReply: React.FC<RenderReplyProps> = ({ item, index }) => {
    return (
      <React.Fragment key={index}>
        <Index.Grid item xs={12} sm={12} md={12} lg={12} className="item-top">
          <StyleMainContainer sx={{ marginRight: 3 }}>
            <StyledContainer
              sx={{
                alignSelf: "flex-end",
              }}
            >
              <StyledMessageContainer sx={{ justifyContent: "flex-end" }}>
                <img
                  src={
                    item?.image
                      ? `${constant.uploads}${item?.image}`
                      : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  }
                  className="chat-img"
                  alt="chat-reply-img"
                />
                <StyledDetailsContainer>
                  <Index.Typography
                    sx={{ fontFamily: "inter-semibold", fontSize: 15 }}
                  >
                    {item.name}
                  </Index.Typography>
                  <Index.Typography sx={{ fontSize: 12 }}>
                    {item?.time}
                  </Index.Typography>
                  <Index.Typography sx={{ fontSize: 15, marginTop: 1 }}>
                    {item.message}
                  </Index.Typography>
                </StyledDetailsContainer>
              </StyledMessageContainer>
              <StyledButtonContainer
                sx={{
                  width: "98%",
                }}
              >
                <Index.Typography
                  onClick={() => {
                    onLike && onLike(item.id);
                  }}
                  sx={{
                    fontSize: 12,
                    alignSelf: "flex-end",
                    cursor: "pointer",
                    color: "#ED753F",
                  }}
                >
                  {`Likes ${item.likes}`}
                </Index.Typography>
                <>
                  <StyledBorder />
                  <Index.Typography
                    sx={{
                      fontSize: 12,
                      alignSelf: "flex-end",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      onDelete && onDelete(item.id);
                    }}
                  >
                    Delete
                  </Index.Typography>
                </>
              </StyledButtonContainer>
            </StyledContainer>
          </StyleMainContainer>
        </Index.Grid>
      </React.Fragment>
    );
  };
  return (
    <>
      <Index.Grid item xs={12} sm={12} md={12} lg={12} className="item-top">
        <StyleMainContainer>
          <StyledContainer>
            <StyledMessageContainer
              sx={{
                justifyContent:
                  userData?._id === item?.userId ? "flex-end" : "flex-start",
              }}
            >
              <img
                src={
                  item?.image
                    ? `${constant.uploads}${item?.image}`
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                }
                className="chat-img"
                alt="chat-img"
              />
              <StyledDetailsContainer
                sx={{
                  width: item?.images?.length > 0 ? "45%" : "75%",
                }}
              >
                <Index.Typography
                  sx={{ fontFamily: "inter-semibold", fontSize: 15 }}
                >
                  {item.name}
                </Index.Typography>
                <Index.Typography sx={{ fontSize: 12 }}>
                  {item?.time}
                </Index.Typography>
                {item?.images?.length > 0 && item?.images?.length === 1 ? (
                  item?.images[0]?.split(".")[1] === "mp4" ? (
                    <video width="100%" height="100" controls>
                      <source
                        src={`${constant.uploads}${item?.images[0]}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Index.Box
                      onClick={() =>
                        onbutton(`${constant.uploads}${item?.images[0]}`)
                      }
                    >
                      <StyledImage
                        src={`${constant.uploads}${item?.images[0]}`}
                      />
                    </Index.Box>
                  )
                ) : (
                  <StyledBox>
                    {item?.images?.map(
                      (value, index) =>
                        index <= 3 && (
                          <Index.Box
                            sx={{
                              paddingBottom:
                                item?.images?.length - 2 == index ? 3 : 0,
                            }}
                            onClick={() => {
                              if (item?.images?.length >= 4) {
                                onMoreImages && onMoreImages();
                              } else {
                                onbutton(`${constant.uploads}${value}`);
                              }
                            }}
                            key={index}
                          >
                            <StyledImage
                              src={`${constant.uploads}${value}`}
                              sx={{
                                height: 85,
                                width: 85,
                                opacity: index === 3 ? 0.2 : 1,
                              }}
                            />
                            {index === 3 && (
                              <StyledPlus>
                                <Add
                                  sx={{ color: "#ED753F" }}
                                  fontSize="small"
                                />
                                <Index.Typography
                                  sx={{
                                    color: "#ED753F",
                                  }}
                                >
                                  4
                                </Index.Typography>
                              </StyledPlus>
                            )}
                          </Index.Box>
                        )
                    )}
                  </StyledBox>
                )}
                <Index.Typography sx={{ fontSize: 15, marginTop: 1 }}>
                  {item.message}
                </Index.Typography>
              </StyledDetailsContainer>
            </StyledMessageContainer>
            <StyledButtonContainer
              sx={{
                width:
                  item?.images?.length > 0
                    ? userData?._id === item.userId
                      ? "97%"
                      : "57%"
                    : userData?._id !== item.userId
                    ? "86%"
                    : "96%",
              }}
            >
              {type === "comment" && (
                <>
                  <Index.Typography
                    onClick={() => {
                      onLike && onLike(item.id);
                    }}
                    sx={{
                      fontSize: 12,
                      alignSelf: "flex-end",
                      cursor: "pointer",
                      color: "#ED753F",
                    }}
                  >
                    {`Likes ${item.likes}`}
                  </Index.Typography>
                  <StyledBorder />
                  <Index.Typography
                    sx={{
                      fontSize: 12,
                      alignSelf: "flex-end",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      onReply && onReply(item.id, item.name);
                    }}
                  >
                    {`Reply ${item.replies?.length}`}
                  </Index.Typography>
                </>
              )}
              <>
                <StyledBorder />
                <Index.Typography
                  sx={{
                    fontSize: 12,
                    alignSelf: "flex-end",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onDelete && onDelete(item.id);
                  }}
                >
                  Delete
                </Index.Typography>
              </>
            </StyledButtonContainer>
          </StyledContainer>
        </StyleMainContainer>
      </Index.Grid>
      {type === "comment" &&
        item.replies.length > 0 &&
        item?.replies?.map((item, index) => (
          <RenderReply item={item} index={index} />
        ))}
    </>
  );
};

export default memo(ChatCard);
