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
import parse from "html-react-parser";

const TableListv3 = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [columnOrder, setColumnOrder] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [truncate, setTruncate] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // columnResizeMode: "onChange",
    state: {
      sorting: sorting,
      globalFilter: filtering,
      pagination,
      columnOrder: columnOrder,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPagination,
    onColumnOrderChange: setColumnOrder,
  });

  const customRender = (cell) => {
    const value = cell.getValue();
    const columnDef = cell.column.columnDef;
    const columnType = columnDef.type;

    if (["text", "number", "date"].includes(columnType)) {
      return highlightCellContent(value, filtering);
    }
    return flexRender(columnDef.cell, cell.getContext());
  };

  const highlightCellContent = (value, filterText) => {
    if (!filterText) {
      return value;
    }

    const regex = new RegExp(filterText, "gi"); // Case-insensitive global search
    const highlightedValue = value.toString().replace(regex, (match) => {
      return `<span className="match" key={match}>${match}</span>`;
    });
    return parse(highlightedValue);
  };

  const handleChangeColumn = (columnId, change) => {
    const columnIds = table.getAllLeafColumns().map((column) => column.id);
    const currentIndex = columnIds.findIndex((column) => column === columnId);

    if (change === "up" && currentIndex > 0) {
      const temp = columnIds[currentIndex - 1];
      columnIds[currentIndex - 1] = columnId;
      columnIds[currentIndex] = temp;
      table.setColumnOrder(columnIds);
    } else if (change === "down" && currentIndex < columnIds.length - 1) {
      const temp = columnIds[currentIndex + 1];
      columnIds[currentIndex + 1] = columnId;
      columnIds[currentIndex] = temp;
      table.setColumnOrder(columnIds);
    }
  };

  return (
    <Wrapper>
      <div className="table-settings">
        <input
          className="input-filter"
          type="text"
          value={filtering}
          placeholder="enter filter keywords"
          onChange={(e) => setFiltering(e.target.value)}
        />
        <button>Settings</button>
      </div>
      <div className="header-toggles">
        <span>Headers</span>
        {table.getAllLeafColumns().map((column) => (
          <div key={column.id}>
            <label>
              <input
                type="checkbox"
                checked={column.getIsVisible()}
                disabled={!column.getCanHide()}
                onChange={column.getToggleVisibilityHandler()}
              />
              {column.columnDef.header}
              {column.getIndex()}
            </label>
            <button onClick={() => handleChangeColumn(column.id, "up")}>
              up
            </button>
            <button onClick={() => handleChangeColumn(column.id, "down")}>
              down
            </button>
          </div>
        ))}
        <button onClick={() => table.resetColumnOrder()}>reset order</button>
        <button onClick={() => table.toggleAllColumnsVisible(true)}>
          Show All
        </button>
        <button onClick={() => table.toggleAllColumnsVisible(false)}>
          Hide All
        </button>
        <label htmlFor="toggleTruncate">
          <input
            type="checkbox"
            name="toggleTruncate"
            id="toggleTruncate"
            checked={truncate}
            onChange={() => setTruncate(!truncate)}
          />{" "}
          Truncate text
        </label>
      </div>
      <div className="btn-group-pagination">
        <p>{`${
          table.getState().pagination.pageIndex + 1
        } of ${table.getPageCount()} (${table.getRowCount()} rows)`}</p>
        <select
          name="pageSize"
          id="pageSize"
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[2, 5, 10, 20, 30, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
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
      <Box className="table" w={table.getTotalSize()}>
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

                {/* <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? "isResizing" : ""
                  }`}
                ></Box> */}
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box className="tr" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Box
                className={`td ${truncate ? "truncate" : ""}`}
                key={cell.id}
                w={cell.column.getSize()}
              >
                {customRender(cell)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Wrapper>
  );
};

export default TableListv3;
