import { redirect } from "next/navigation";

//* Redirect; use async because NEXTJS 15 said so
export default async function Page({params}: {params: {courseID: string}}) {
    redirect(`/course/${params.courseID}/overview`);
}
