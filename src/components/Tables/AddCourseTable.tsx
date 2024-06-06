import { Package } from "@/types/package";
import Image from "next/image";

const packageData: Package[] = [
  {
    courseName: "Object oriented programming",
    department: "CSE",
    courseCode: `CSE-205`,
  },
  {
    courseName: "Computer Networking",
    department: "CSE",
    courseCode: `CSE-305`,
  },
  {
    courseName: "Machine Learnign",
    department: "CSE",
    courseCode: `CSE-411`,
  },
  {
    courseName: "Database Management System",
    department: "CSE",
    courseCode: `CSE-305`,
  },
];

const AddCourseTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Course Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Department
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Course code
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Assign
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((course, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {course.courseName}
                  </h5>
                  {/* <p className="text-sm">${course.department}</p> */}
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {course.department}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium`}
                  >
                    {course.courseCode}
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

export default AddCourseTable;
