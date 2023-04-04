import React, { useState } from "react";
import User from "./User";
const fectchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);
    return res.json()
}
export default function Users() {
    const [users, setUsers] = useState(null);

    React.useEffect(() => {
        let mounted = true;
        if (mounted) {
            fectchData()
                .then((res) => {
                    setUsers(res)
                })
                .catch((err) => {

                })
        }

        return () => {
            mounted = false;
        }

    }, [])
    return (
        <div>
          {users && users.length > 0 && 
          users.map((user,index)=> <User {...user} />)
          }
        </div>
    )
}