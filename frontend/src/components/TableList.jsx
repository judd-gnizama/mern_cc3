import { Link } from "react-router-dom";
import { Wrapper2 } from "../assets/wrappers/TableList";

const TableList = () => {
  const TABLE_DATA = {
    title: "table 1",
    subtitle: "this is a table of groups",
    headers: [
      {
        key: "name",
        type: "string",
        width: "1fr",
        show: true,
      },
      {
        key: "numOfMembers",
        labelText: "member count",
        type: "number",
        width: "0.25fr",
        show: true,
      },
      {
        key: "description",
        type: "string",
        width: "2fr",
        show: true,
      },
      {
        key: "path",
        type: "string",
        width: "0.5fr",
        show: true,
      },
    ],
    data: [
      {
        name: "Badminton Mondays",
        numOfMembers: 12,
        description: "This is a badminton group happening on Mondays",
        path: "../g/1",
      },
      {
        name: "Wednesday Warriors",
        numOfMembers: 15,
        description: "A dedicated badminton group for Wednesdays",
        path: "../g/1",
      },
      {
        name: "Weekend Smashers",
        numOfMembers: 20,
        description: "For those who love badminton on weekends",
        path: "../g/1",
      },
      {
        name: "Evening Aces",
        numOfMembers: 8,
        description: "A group for evening badminton enthusiasts",
        path: "../g/1",
      },
      {
        name: "Morning Birdies",
        numOfMembers: 10,
        description: "Early morning badminton fun",
        path: "../g/1",
      },
    ],
  };

  const { title, subtitle, headers, data } = TABLE_DATA;

  return (
    <>
      {/* <Wrapper>
        <table className="table">
          <colgroup>
            {headers.map(({ key, show }) => (
              <col key={key} className={`col ${show ? "" : "hidden"}`} />
            ))}
          </colgroup>
          <thead>
            <tr className="row-header">
              {headers.map(({ key, labelText, type }) => (
                <th key={key} className="item-header">
                  {labelText || key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="row-body">
                {headers.map(({ key }) => (
                  <td key={key} className="item-body">
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper> */}
      <Wrapper2>
        <div className="table">
          <div>
            <div className="row-header">
              {headers.map(({ key, labelText, type }) => (
                <button key={key} className="item-header">
                  {labelText || key}
                </button>
              ))}
            </div>
          </div>
          <div>
            {data.map((item, index) => (
              <Link key={index} className="row-body">
                {headers.map(({ key }) => (
                  <span key={key} className="item-body">
                    {item[key]}
                  </span>
                ))}
              </Link>
            ))}
          </div>
        </div>
      </Wrapper2>
    </>
  );
};

export default TableList;
