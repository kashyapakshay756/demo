import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import NoticeboardController from "./noticeboard.controller";
import { postCellData, requestCellData } from "./noticeboard.const";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
  ProgressContainer,
} from "../../../../component/commonStyles";

const Noticeboard: React.FC = () => {
  const {
    tabValue,
    handleTabValueChange,
    tabChange,
    onEdit,
    loading,
    postData,
    requestData,
    search,
    handleSearch,
    postFilter,
    requestFilter,
    onView,
    onAdd,
  } = NoticeboardController();
  return (
    <div>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <>
          <Index.Box className="back-f5 presonal-infospace">
            <Index.Box className="search-main-header">
              <Index.Box className="search-header space-between">
                <Index.Box className="d-flex res-admin-btn-set">
                  <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                    <StyledSearch className="search">
                      <SearchIconWrapper className="search-icon">
                        <Index.SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        value={search}
                        onChange={(val) => handleSearch(val?.target.value)}
                      />
                    </StyledSearch>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="w-100 res-admin-btn-set ">
                  <Index.Box className="">
                    <Index.Box
                      sx={{ borderBottom: 1, borderColor: "divider" }}
                      className="seatcreation-inner-tab"
                    >
                      <Index.Tabs
                        value={tabValue}
                        onChange={handleTabValueChange}
                        aria-label="basic tabs example"
                        className="seatcreation-tab"
                      >
                        <Index.Tab
                          label="Posts"
                          {...tabChange(0)}
                          className="seatcreation"
                        />
                        <Index.Tab
                          label="Requests"
                          {...tabChange(1)}
                          className="seatcreation active"
                        />
                      </Index.Tabs>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
                {tabValue === 0 && <Index.AddButton onAdd={onAdd} />}
              </Index.Box>
            </Index.Box>
            <Index.TabPanel value={tabValue} index={0}>
              <Index.CustomTable
                tableClass="table-main  noticeboard-table"
                tableCellData={postCellData}
                tableData={postFilter === null ? postData : postFilter}
                isButton
                isViewButton
                onViewButton={onView}
                isEditButton
                onEditButton={onEdit}
                listEmptyText="No post available"
                search={search}
              />
            </Index.TabPanel>
            <Index.TabPanel value={tabValue} index={1}>
              <Index.CustomTable
                tableClass="table-main noticeboard-req-table"
                tableCellData={requestCellData}
                tableData={requestFilter === null ? requestData : requestFilter}
                listEmptyText="No request available"
                search={search}
              />
            </Index.TabPanel>
          </Index.Box>
        </>
      )}
    </div>
  );
};

export default Noticeboard;
