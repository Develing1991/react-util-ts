import { useReducer, useState } from 'react'

interface User{
  id: number,
  name?: string   
}

interface IAction {
  type: string
  id?: number
  name?: string
}

const initailUsers:User[] = [
  {
    id:1,
    name:'lee'
  }
]

export default function ReducerPage() {
  const [users, dispatch] = useReducer(myReducer, initailUsers)
  const [name, setName] = useState('');
  const deleteUser = (id:number)=>{
    dispatch({type:'delete', id})
  }
  const createUser = ()=>{
    dispatch({type:'create', name})
  }
  
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <button onClick={createUser}>생성</button>
        {users.length > 0 && users.map(user => {
            return (
                <div key={user.id}>
                    <span>{user.id}</span>_
                    <span>{user.name}</span>_
                    <button onClick={()=>deleteUser(user.id)}>삭제</button>
                </div>
            )
        })}
    </div>
  )
}

function myReducer(users:User[], action: IAction){
    switch (action.type) {
        case 'create':
            return users.concat({id: users.length + 1, name:action.name});
        case 'delete':
            return users.filter(user => user.id !== action.id);
        default:
            throw new Error('not action type')
    }
}


