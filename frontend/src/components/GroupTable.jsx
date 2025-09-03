import rawData from "../assets/mockdata/mockGroups.json";
import { useMemo } from "react";
import dayjs from "dayjs";
import TableListv3 from "./TableListv3";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

const GroupTable = () => {
  const rem = (multi) => multi * 16;
  const columns = [
    {
      header: "Actions",
      accessorKey: "actions",
      size: rem(4),
      type: "action",
      enableHiding: false,
      enableSorting: false,
      cell: () => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Link>
            <GoLinkExternal />
          </Link>
        </div>
      ),
    },
    {
      header: "group name",
      accessorKey: "name",
      // size: rem(8),
      type: "text",
      enableHiding: false,
    },
    {
      header: "description",
      accessorKey: "description",
      type: "text",
      // size: rem(20),
    },
    {
      header: "date created",
      accessorKey: "createdDate",
      type: "date",
      // size: rem(5),
    },
    {
      header: "member count",
      accessorKey: "numOfMembers",
      type: "number",
      // size: rem(4),
    },
  ];

  const data = useMemo(
    () =>
      rawData.map((datum) => {
        columns
          .filter((column) => column.type === "date")
          .forEach(({ accessorKey }) => {
            datum[accessorKey] = dayjs(datum[accessorKey]).format(
              "DD MMM YYYY"
            );
          });
        return datum;
      }),
    []
  );
  return <TableListv3 data={data} columns={columns} />;
};

export default GroupTable;
