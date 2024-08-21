import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Wrapper from "../assets/wrappers/TableListv3";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { Box } from "@chakra-ui/react";

const TableListv3 = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <Wrapper>
      <div>
        <input
          type="text"
          value={filtering}
          placeholder="enter filter keywords"
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
      <Box className="table" w={table.getTotalSize()}>
        {/* <thead> */}
        {table.getHeaderGroups().map((headerGroup) => (
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Box className="th" w={header.getSize()} key={header.id}>
                <div onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {
                    {
                      asc: <MdArrowUpward />,
                      desc: <MdArrowDownward />,
                    }[header.column.getIsSorted() ?? null]
                  }
                </div>

                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                ></Box>
              </Box>
            ))}
          </Box>
        ))}
        {/* </thead> */}
        {/* <tbody> */}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box className={"td"} key={cell.id} w={cell.column.getSize()}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
        {/* </tbody> */}
      </Box>
      <div>
        <button onClick={() => table.setPageIndex(0)}>first</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          prev
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          next
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          last
        </button>
      </div>
    </Wrapper>
  );
};

export default TableListv3;
