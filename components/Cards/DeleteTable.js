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
          <table className="w-full p-4 bg-transparent">
            <thead>
              <tr>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  ID
                </th>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  First name
                </th>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  Last name
                </th>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  Phone
                </th>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  Join Date
                </th>
                <th className="text-center py-3 text-sm uppercase font-semibold">
                  Sabab
                </th>
              </tr>
            </thead>
            <tbody>
              {table.accounts.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="font-bold text-sm text-center">{item.id}</th>
                    <td className="text-sm text-center">{item.first_name}</td>
                    <td className="text-sm text-center">{item.last_name}</td>
                    <td className="text-sm text-center">{item.phone_number}</td>
                    <td className="text-sm text-center">{item.join}</td>
                    <td className="text-sm text-center">
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
