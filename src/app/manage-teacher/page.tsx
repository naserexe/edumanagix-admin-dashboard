import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/AddCourseTable";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ManageTeacherTable from "@/components/Tables/ManageTeacherTable";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ManageTeacher = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Manage Teacher" />

      <div className="flex flex-col gap-10">
        <ManageTeacherTable />
      </div>
    </DefaultLayout>
  );
};

export default ManageTeacher;
