import { default as NumberFormat } from "react-number-format";

function TotallPayments({ payments }) {
  console.log(payments);
  return (
    <>
      <div className="rounded-t bg-white mb-0 pt-4 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-lg ml-4">Tolovlar tarixi</h3>
          </div>
          <div className="block w-full overflow-x-auto p-4">
            <div className="rounded overflow-hidden">
              <table className="items-center w-full p-4 bg-transparent border-collapse">
                <thead>
                  <tr className="text-white bg-blueGray-400">
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      ID
                    </th>
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      First name
                    </th>
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      Last name
                    </th>
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      Title
                    </th>
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      Payment
                    </th>
                    <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold">
                      Kurs narxi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payments?.map((item, i) => {
                    return (
                      <tr
                        className={`${i % 2 != 0 && "bg-blueGray-200"}`}
                        key={item.id}
                      >
                        <th className="font-bold px1 align-middle text-sm whitespace-nowrap p-2 text-center">
                          {item.id}
                        </th>
                        <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                          {item.account.first_name}
                        </td>
                        <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                          {item.account.last_name}
                        </td>
                        <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                          {item.title}
                        </td>
                        <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                          <NumberFormat
                            value={item.price}
                            className="foo text-emerald-500"
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix="+"
                            renderText={(value, props) => (
                              <div {...props}>{value}</div>
                            )}
                          />
                        </td>
                        <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                          <NumberFormat
                            value={item.account.oquvchi_narxi}
                            className="foo"
                            displayType={"text"}
                            thousandSeparator={true}
                            renderText={(value, props) => (
                              <div {...props}>{value}</div>
                            )}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotallPayments;
