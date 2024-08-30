import rawData from "../assets/mockdata/mockGroups.json";
import { useMemo } from "react";
import dayjs from "dayjs";

export const getData = () => {
  const rem = (multi) => multi * 16;
  const columns = [
    {
      header: "Actions",
      accessorKey: "actions",
      // size: rem(8),
      type: "action",
      enableHiding: false,
      cell: (obj) => <span>Hello{obj?.value}</span>,
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
  return {
    data,
    columns,
  };
};
