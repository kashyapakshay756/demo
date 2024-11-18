import React from "react";
import { CircularProgress } from "@mui/material";
import Index from "../../../../component/componentIndex";
import { tableCellData } from "./users.const";
import UsersController from "./users.controller";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledSearch,
  ProgressContainer,
} from "../../../../component/commonStyles";

const Users: React.FC = () => {
  const { onView, loading, userData, filterData, userSearch, search } =
    UsersController();
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
                      onChange={(val) => userSearch(val?.target.value)}
                      inputProps={{ "aria-label": "search" }}
                    />
                  </StyledSearch>
                </Index.Box>
              </Index.Box>
            </Index.Box>
          </Index.Box>
          <Index.CustomTable
            tableClass="table-main user-table users-table"
            tableCellData={tableCellData}
            tableData={filterData === null ? userData : filterData}
            isButton
            isViewButton
            onViewButton={(id) => {
              onView(id);
            }}
            listEmptyText="No user available"
            search={search}
          />
        </>
      )}
    </>
  );
};

export default Users;
