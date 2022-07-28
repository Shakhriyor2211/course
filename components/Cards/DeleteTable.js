import React, { useEffect, useState } from "react";
import CourseChange from "components/Course/courseChange";
import ChangePrice from "components/Payment/changePrice";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { default as NumberFormat } from "react-number-format";

function DeleteTable({ table }) {
  return (
    <>
      <div className="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 pl-4 pt-4 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg ">{table.name}</h3>
            </div>
          </div>
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
                  Join Date
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Sabab
                </th>
              </tr>
            </thead>
            <tbody>
              {table.accounts.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="border-t-0 font-bold px1 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-2 text-center">
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
                      {item.join}
                    </td>
                    <td className=" align-middle text-sm text-center whitespace-nowrap p-2">
                      {item.delete_cause === null
                        ? "Not given"
                        : item.delete_cause}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DeleteTable;
