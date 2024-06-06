import { ManageTeacher } from "@/types/manageTeacher";
import Image from "next/image";

const teacher: ManageTeacher[] = [
  {
    name: "Mr. John doe",
    department: "CSE",
    room: `A-303`,
    designation: "Lecturer",
  },
  {
    name: "William Hannah",
    department: "EEE",
    room: `AB-403`,
    designation: "Assistant professor",
  },
  {
    name: "Marques caster",
    department: "Civil",
    room: `A-303`,
    designation: "Lecturer",
  },
  {
    name: "Melfiana Rachma",
    department: "CSE",
    room: `C-203`,
    designation: "Professor",
  },
];

const ManageTeacherTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Designation
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Department
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Room
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((teacher, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {teacher.name}
                  </h5>
                  {/* <p className="text-sm">${course.department}</p> */}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {teacher.designation}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium`}
                  >
                    {teacher.department}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium`}
                  >
                    {teacher.room}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-primary">
                      <Image
                        width={20}
                        height={20}
                        src={"/images/icon/assign.svg"}
                        alt="Logo"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageTeacherTable;
