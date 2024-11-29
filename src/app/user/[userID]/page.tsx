import { redirect } from "next/navigation";

//* Redirect; use async because NEXTJS 15 said so
export default async function Page({params}: {params: {userID: string}}) {
    redirect(`/course/${params.userID}/dashboard`);
}
