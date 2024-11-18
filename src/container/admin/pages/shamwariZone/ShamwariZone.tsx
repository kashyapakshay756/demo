import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import ShamwariZoneController from "./shamwariZone.controller";
import { tableCellData } from "./shamwariZone.const";
import UserEvent from "./userEvent/UserEvent";
import {
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
  ProgressContainer,
} from "../../../../component/commonStyles";

const ShamwariZone: React.FC = () => {
  const {
    search,
    handleTabValueChange,
    tabChange,
    tabValue,
    onView,
    loading,
    events,
    eventSearch,
    filterData,
    onAdd,
    eventList,
    eventFilter,
  } = ShamwariZoneController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <>
          <Index.Box className="back-f5 presonal-infospace">
            <Index.Box className="search-main-header">
              <Index.Box className="search-header space-between">
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
                          label="ZEEBRA EVENTS"
                          {...tabChange(0)}
                          className="seatcreation"
                        />
                        <Index.Tab
                          label="USER EVENTS"
                          {...tabChange(1)}
                          className="seatcreation active"
                        />
                      </Index.Tabs>
                    </Index.Box>
                  </Index.Box>
                </Index.Box>
                <Index.Box className="d-flex res-admin-btn-set">
                  <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                    <StyledSearch className="search">
                      <SearchIconWrapper className="search-icon">
                        <Index.SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        value={search}
                        onChange={(val) => eventSearch(val?.target?.value)}
                        inputProps={{ "aria-label": "search" }}
                      />
                    </StyledSearch>
                  </Index.Box>
                </Index.Box>
                {tabValue === 0 && <Index.AddButton onAdd={onAdd} />}
              </Index.Box>
            </Index.Box>
            <Index.TabPanel value={tabValue} index={0}>
              <Index.CustomTable
                tableClass="table-main  noticeboard-table"
                tableCellData={tableCellData}
                tableData={filterData === null ? events : filterData}
                isButton
                isViewButton
                onViewButton={(id) => {
                  onView(id);
                }}
                listEmptyText="No zeebra event available"
                search={search}
              />
            </Index.TabPanel>
            <Index.TabPanel value={tabValue} index={1}>
              <UserEvent
                eventList={eventList}
                filterData={eventFilter}
                search={search}
              />
            </Index.TabPanel>
          </Index.Box>
        </>
      )}
    </>
  );
};

export default ShamwariZone;
