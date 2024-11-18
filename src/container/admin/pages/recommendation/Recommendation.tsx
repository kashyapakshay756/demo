import React from "react";
import RecommendationController from "./recommendation.controller";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import {
  StyledSearch,
  SearchIconWrapper,
  StyledInputBase,
  ProgressContainer,
} from "../../../../component/commonStyles";
import { tableCells } from "./recommendation.const";

const Recommendation: React.FC = () => {
  const { loading, search, handleSearch, filter, recommendation } =
    RecommendationController();
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
                      onChange={(val) => handleSearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            tableClass="table-main recommendation-table"
            tableCellData={tableCells}
            tableData={filter === null ? recommendation : filter}
            listEmptyText="No recommendation available"
            search={search}
          />
        </>
      )}
    </>
  );
};

export default Recommendation;
