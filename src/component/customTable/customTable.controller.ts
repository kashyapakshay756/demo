import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  CustomTableControllerProps,
  CustomTableProps,
} from "./customTable.interface";

const CustomTableController = ({
  search,
}: CustomTableProps): CustomTableControllerProps => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const navigation = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search && search?.length > 0) {
      setPage(0);
      setRowsPerPage(10);
      const currentParams = new URLSearchParams(searchParams);
      currentParams.set("selectedPage", "0");
      currentParams.set("rowsPerPage", "10");
      setSearchParams(currentParams);
    }
  }, [search && search?.length > 0]);

  useEffect(() => {
    const selectedPage = searchParams.get("selectedPage");
    if (selectedPage !== null) {
      setPage(parseInt(selectedPage));
    }
    const rowsPerPage = searchParams.get("rowsPerPage");
    if (rowsPerPage !== null) {
      setRowsPerPage(parseInt(rowsPerPage));
    }
  }, [searchParams]);

  const handleUserDetails = (id: string, navigationTo: string): void => {
    navigation(`${id}/${navigationTo}`);
  };

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);

    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("selectedPage", newPage.toString());

    setSearchParams(currentParams);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newRowsPerPage = +event.target.value;
    setRowsPerPage(newRowsPerPage);

    const currentParams = new URLSearchParams(searchParams);
    currentParams.set("rowsPerPage", `${newRowsPerPage}`);

    const pageNumber = 0;
    setPage(pageNumber);

    currentParams.set("selectedPage", pageNumber.toString());

    setSearchParams(currentParams);
  };

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    handleUserDetails,
  };
};

export default CustomTableController;
