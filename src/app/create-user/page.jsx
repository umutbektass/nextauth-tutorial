import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"

const CreateUser = async() => {
  const session = await getServerSession(options)
  if(session.user?.role!=='Admin') return ( <h1>Yetkiniz bulunamadı.</h1>)
  return (
    <div>
        <h1>Only Admins!</h1>
    </div>
  )
}

export default CreateUser
