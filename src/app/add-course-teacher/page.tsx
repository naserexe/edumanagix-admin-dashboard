import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import AddCourseTable from "@/components/Tables/AddCourseTable";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "EduManagix",
  description: "Manage educational institute",
};

const ManageModerator = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Course to Teacher" />

      <div className="flex flex-col gap-10">
        <AddCourseTable />
      </div>
    </DefaultLayout>
  );
};

export default ManageModerator;
