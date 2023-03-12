import React, { useState } from 'react'
import produce from 'immer'
interface User{
    id: number,
    name?: string   
}
  
  
const initailUsers:User[] = [
    {
      id:1,
      name:'lee'
    }
]
  
export default function ImmerPage() {
  const [users, setUsers] = useState(initailUsers)
  const addUser = () => {
    setUsers(
        produce(draft=>{
            draft.push({id:users.length + 1, name:'lee'})
        })
    )
  }
  const updateUser = (id:number) => {
    setUsers(
        produce(draft => {
            const user = draft.find(user => user.id === id)
            if(user){
                user.name = 'kkk'
            }
        })
    )
  }
  return (
    <div>
        <button onClick={addUser}>add</button>
        <button onClick={()=>updateUser(1)}>update</button>
        <div>
            {users.map(user=>{
                return <div key={user.id}>
                    <span>{user.id}</span>_
                    <span>{user.name}</span>
                </div>
            })}
        </div>
    </div>
  )
}
