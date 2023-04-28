import React,{useState} from 'react'
import Data from './data'

const DataTable = () => {

    const [data,setData]=useState(Data)
 console.log(Data);
    const handleButtonClick = (index) => {
        const newData = [...data];
        newData[index].isActive = !newData[index].isActive;
        setData(newData);
      };

  return (
    
        <table className='w-5/6 mx-auto my-0 '>
            <thead className=' bg-green-400 h-10'>
            
            <th  className="rounded-l-md items-right" >
              <input className='' type="checkbox" />
             Receipt
            </th>
            <th>Status</th>
            <th>Date Paid</th>
            <th>Grave Site</th>
            <th>Paid By</th>
            <th>No Of Payment</th>
            <th>Total</th>
            <th className='rounded-r-md'>key</th>
       
            </thead>
            <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td className="">
                <input className=""type="checkbox" />
                {row.receipt}
              </td>
              <td className="">
                {row.isActive ? (
                  <button
                    className=""
                    onClick={() => handleButtonClick(index)}
                    style={{ backgroundColor: "#4bb334", color: "white" }}
                  >
                    Posted
                  </button>
                ) : (
                  <button
                    className=""
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
    
  )
}

export default DataTable