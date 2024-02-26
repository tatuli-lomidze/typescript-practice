import { useEffect, useState } from "react"
import { IUser } from "../interfaces/user.inteface"
import { Link } from "react-router-dom"

const UsersPage: React.FC <{}> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data:IUser[]) => setUsers(data))
    }, [])

    return <div>
              <Link to="/" style={{ marginRight: "10px" }}>todo</Link>
        <Link to="/users">users</Link>
        {users.map(({id, name, phone, company:{name: companyName }, email}) =>
         <div key={id}> 
            <h1>{name}</h1>
            <h2>{phone}</h2>
            <h3>{companyName}</h3>
            <h4>{email}</h4>



        </div>
         )}


    </div>
}

export default UsersPage