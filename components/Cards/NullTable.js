import React, { useEffect, useState } from "react";
import CourseChange from "components/Course/courseChange";
import ChangePrice from "components/Payment/changePrice";
import Link from "next/link";
import { createPopper } from "@popperjs/core";
import { default as NumberFormat } from "react-number-format";

function NullTable({ table }) {
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
                  Kurs narxi
                </th>
                <th className="align-middle text-center py-3 text-sm uppercase whitespace-nowrap font-semibold text-left ">
                  Action
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
                    <td className="border-t-0 align-middle text-xs text-center whitespace-nowrap cursor-pointer select-none p-2">
                      <DropDown user={item} />
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

const DropDown = ({ user }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [changePrice, setChangePrice] = useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      {changePrice && <ChangePrice modalState={setChangePrice} users={user} />}

      {dropdownPopoverShow && (
        <div
          className="fixed inset-0"
          onClick={() => {
            setDropdownPopoverShow(false);
          }}
        ></div>
      )}
      <div
        className="text-blueGray-500 py-1 px-3"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base relative z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 border"
        }
      >
        <Link href={`/admin/update/${user.id}`}>
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            O'zgartirish
          </a>
        </Link>
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer"
          }
          onClick={() => {
            setChangePrice(true);
            setDropdownPopoverShow(false);
          }}
        >
          Chegirma
        </div>
      </div>
    </>
  );
};

export default NullTable;
