import React, { useState } from "react";
import Data from "./data";
import "./Table.css";
import { MDBDataTable } from "mdbreact";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = () => {
  const [data, setData] = useState([
    {
      paidBy: "John Doe",
      status: "Active",
      isActive: true,
      receipt: "1234",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Jane Smith",
      status: "Inactive",
      isActive: true,
      receipt: "1233",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Bob Johnson",
      status: "Active",
      isActive: true,
      receipt: "1232",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Mike Brown",
      status: "Inactive",
      isActive: true,
      receipt: "1231",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "John Doe",
      status: "Active",
      isActive: true,
      receipt: "1234",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Jane Smith",
      status: "Inactive",
      isActive: true,
      receipt: "1233",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Bob Johnson",
      status: "Active",
      isActive: true,
      receipt: "1232",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Mike Brown",
      status: "Inactive",
      isActive: true,
      receipt: "1231",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "John Doe",
      status: "Active",
      isActive: true,
      receipt: "1234",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
    {
      paidBy: "Jane Smith",
      status: "Inactive",
      isActive: true,
      receipt: "1233",
      datePaid: "01/23/2023",
      gravesite: "01-1001-03.0",
      NoOfPayments: 2,
      Total: 650,
      key: "...",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handleButtonClick = (index) => {
    const newData = [...data];
    newData[index].isActive = !newData[index].isActive;
    setData(newData);
  };

  const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = () => {
  //   const filteredData = data.filter((row) =>
  //     row.paidBy.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setData(filteredData);
  // };

  return (
    <div>
      <table className="Table">
        {/* <div>{parentJSON}</div> */}
        <thead className="bg-white">
          <tr>
            <th>
              <input className="input" type="checkbox" />
              Receipt
            </th>
            <th
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              Status
            </th>
            <th>Date Paid</th>
            <th>Grave Site</th>
            <th>Paid By</th>
            <th>No Of Payment</th>
            <th>Total</th>
            <th>key</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td>
                <input className="input" type="checkbox" />
                {row.receipt}
              </td>
              <td>
                {row.isActive ? (
                  <button
                    className="posted"
                    onClick={() => handleButtonClick(index)}
                    style={{ backgroundColor: "#4bb334", color: "white" }}
                  >
                    Posted
                  </button>
                ) : (
                  <button
                    className="unposted"
                    onClick={() => handleButtonClick(index)}
                    style={{ backgroundColor: "#f2d40c", color: "black" }}
                  >
                    Unposted
                  </button>
                )}
              </td>
              <td>
                <p>{row.datePaid}</p>
              </td>
              <td>
                <p>{row.gravesite}</p>
              </td>
              <td>{row.paidBy}</td>
              <td>
                <p>{row.NoOfPayments}</p>
              </td>
              <td>
                <p>{row.Total}</p>
              </td>{" "}
              <td>
                <p>{row.key}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        <select
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="select"
        >
          <option className="option" value="10">
            Display 10/pages
          </option>
        </select>
      </div>
      <div>
        <MDBDataTable bordered small />
      </div>
    </div>
  );
};

export default Table;
