"use client";
import TemplateAdmin from "@/components/template/template.admin";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return (
    <>
      <TemplateAdmin>{session?.user?.email}</TemplateAdmin>
    </>
  );
};

export default Page;
