import rawData from "../assets/mockdata/mockGroups.json";
import { useMemo } from "react";
import dayjs from "dayjs";
import TableListv3 from "./TableListv3";

const GroupTable = () => {
  const data = useMemo(() => rawData, []);
  const rem = (multi) => multi * 16;
  const columns = [
    {
      header: "group name",
      accessorKey: "name",
      footer: "group name",
      size: rem(10),
    },
    {
      header: "description",
      accessorKey: "description",
      footer: "description",
      size: rem(20),
    },
    {
      header: "date created",
      accessorKey: "createdDate",
      footer: "date created",
      size: rem(5),
      cell: (obj) => dayjs(obj.getValue()).format("DD MMM YYYY"),
    },
    {
      header: "member count",
      accessorKey: "numOfMembers",
      footer: "member count",
      size: rem(4),
    },
  ];

  return <TableListv3 data={data} columns={columns} />;
};

export default GroupTable;
