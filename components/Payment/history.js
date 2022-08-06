import axios from "axios";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";

function History({ id, historyState }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/account/${id}/paymenthistory/`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  if (data === null) {
    return (
      <>
        <p className="mb-8 text-xl font-semibold">History</p>
        <p>Loading....</p>
      </>
    );
  }

  return (
    <>
      <p className="mb-8 text-xl font-semibold">History</p>
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-6 bg-white rounded shadow-lg border flex justify-between items-center"
        >
          <div>
            <p className="text-sm font-semibold">
              ID: <span>{item.id}</span>
            </p>
            <p className="text-sm font-medium text-emerald-500 mt-1">
              {item.title}
            </p>
          </div>
          <div className="ml-8">
            <NumberFormat
              prefix="+"
              value={item.price}
              className="foo text-sm font-semibold text-red-600 text-right"
              displayType={"text"}
              thousandSeparator={true}
              renderText={(value, props) => <div {...props}>{value}</div>}
            />
            <p className="text-xs mt-1 text-right">
              {item && item.created_at.slice(0, 10)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default History;
