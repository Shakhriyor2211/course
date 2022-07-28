import { default as NumberFormat } from "react-number-format";

function CourseAllArrear({ users }) {
  console.log(users);
  return (
    <div className="rounded-t mb-0 pl-4 pt-4 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-lg">Qarzdorlar royxati</h3>
        </div>
        <div className="block w-full overflow-x-auto p-4">
          {/* Projects table */}
          <table className="items-center w-full p-4 bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  ID
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  First name
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Last name
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Phone
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Qarzdorlik
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Kurs narxi
                </th>
              </tr>
            </thead>
            <tbody>
              {users.ota_qarzdorlar.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="font-bold px1 align-middle text-sm whitespace-nowrap p-2 text-center">
                      {item.id}
                    </th>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      {item.first_name}
                    </td>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      {item.last_name}
                    </td>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      {item.phone_number}
                    </td>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      <NumberFormat
                        value={item.qarzi}
                        className="foo text-red-600"
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix="-"
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </td>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      <NumberFormat
                        value={item.oquvchi_narxi}
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
  );
}

export default CourseAllArrear;
