import { connectDB } from "@/util/database";
import Sample from "@/util/Sample";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";

export default async function Home() {
	const db=(await connectDB).db("culture-calendar");
	let result=await db.collection('post').find().toArray();

	let session=await getServerSession(authOptions);

	result=result.map((data)=>{
        data._id=data._id.toString();
        return data
    });

	return (
		<div>
			<Sample></Sample>
			{
				result.map((data)=>{
					return(
						<div>
							<strong>{data.title}</strong>
							<strong>{data.title}</strong>
							<p>{data.content}</p>
						</div>
					)
				})
			}
			{
				session
				? <span>{session.user.name} <LogoutBtn></LogoutBtn> </span>
				: <LoginBtn></LoginBtn>
			}
		</div>
	)
}
