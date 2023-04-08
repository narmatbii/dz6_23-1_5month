import React from "react";
import {useGetUsersQuery} from "../features/DataSlice";

const Card = ({ data }) =>{
    return (
        <div  key={data.id}>
               <div >
                  <h5>{data.name}</h5>
                   <p>{data.username}</p>
               </div>
        </div>
    )
}

function Users() {
    const  {data, isLoading, isSuccess, isError, error} = useGetUsersQuery()

    let content;

    if (isLoading) {
        content = (
            <div >
                <div >
                    <span>loading...</span>
                </div>

            </div>
        )
    } else if (isSuccess) {
        content = data.map((res) => {
            return <Card data={res} key={res.id} />
        })
    } else if (isError) {
        content = <div>{error}</div>
    }
    return <div>{content}</div>
}
 export default Users