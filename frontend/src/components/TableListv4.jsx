import rawData from "../assets/mockdata/mockGroups.json";
import { useMemo } from "react";
import Wrapper from "../assets/wrappers/TableListv4";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

import dayjs from "dayjs";

import { Box } from "@chakra-ui/react";
const TableListv4 = ({ data, columns }) => {
  // const data = useMemo(() => rawData, []);
  // const columns = [
  //   {
  //     header: "group name",
  //     accessorKey: "name",
  //     Cell: ({ renderedCellValue, row }) => <Box>{renderedCellValue}</Box>,
  //   },
  //   {
  //     header: "description",
  //     accessorKey: "description",
  //   },
  //   {
  //     header: "date created",
  //     accessorKey: "createdDate",
  //     Cell: ({ renderedCellValue, row }) => (
  //       <Box>{dayjs(new Date(renderedCellValue)).format("MMM DD YYYY")}</Box>
  //     ),
  //   },
  //   {
  //     header: "member count",
  //     accessorKey: "numOfMembers",
  //   },
  // ];

  const newColumns = columns.map((column) => {
    return {
      ...column,
      header: column.header.toUpperCase(),
    };
  });

  const table = useMaterialReactTable({
    columns: newColumns,
    data,
    enableGlobalFilter: true,
    enableRowSelection: true,
    enableRowActions: true,
    enableColumnResizing: true,
  });

  return (
    <Wrapper>
      <MaterialReactTable table={table} />
    </Wrapper>
  );
};

export default TableListv4;
