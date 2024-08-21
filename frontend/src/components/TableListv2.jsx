import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import rawData from "../assets/mockdata/mockGroups.json";
import { useMemo, useState } from "react";
import Wrapper from "../assets/wrappers/TableListv2";
import dayjs from "dayjs";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const TableListv2 = () => {
  const data = useMemo(() => rawData, []);

  const columns = [
    {
      header: "group name",
      accessorKey: "name",
      footer: "group name",
    },
    {
      header: "description",
      accessorKey: "description",
      footer: "description",
    },
    {
      header: "date created",
      accessorKey: "createdDate",
      footer: "date created",
      cell: (obj) => dayjs(obj.getValue()).format("DD MMM YYYY"),
    },
    {
      header: "member count",
      accessorKey: "numOfMembers",
      footer: "member count",
    },
  ];

  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
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
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
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
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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

export default TableListv2;
