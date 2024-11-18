import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import PartnersController from "./partners.controller";
import { tableCellData } from "./partners.const";
import {
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
  ProgressContainer,
} from "../../../../component/commonStyles";

const Partners: React.FC = () => {
  const { search, onView, loading, partnersData, filterData, partnerSearch } =
    PartnersController();
  return (
    <>
      {loading ? (
        <ProgressContainer>
          <CircularProgress size={40} sx={{ color: "primary" }} />
        </ProgressContainer>
      ) : (
        <>
          <Index.Box className="search-main-header">
            <Index.Box className="search-header space-between">
              <Index.Box className="d-flex">
                <Index.Box sx={{ flexGrow: 1 }} className="search-main">
                  <StyledSearch className="search">
                    <SearchIconWrapper className="search-icon">
                      <Index.SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      value={search}
                      onChange={(val) => partnerSearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            tableClass="table-main  partners-table"
            tableCellData={tableCellData}
            tableData={filterData === null ? partnersData : filterData}
            isButton
            isViewButton
            onViewButton={onView}
            listEmptyText="No partner available"
            search={search}
          />
        </>
      )}
    </>
  );
};

export default Partners;
