import { useEffect, useState } from 'react'
import './App.css'

interface Users {
            users: User[]
        }

        interface User {
            id: number
            firstName: string
            lastName: string
            email: string
        }        

function App() {

  const [users, setUsers] = useState<User[]>([])

        useEffect(() => {
            console.log('Felhasználók betöltése.') // tesztelés
            async function load() {
                const response = await fetch('/felhasznalok.json')
                const users: Users = await response.json();
                setUsers(users.users);
            }
            load()
            console.log(users) // tesztelés
        }, [])
  
  return (
    <>
      <h2>Felhasználók listája</h2>
            <ul>
                {
                    users.map((user: User) => <li>
                        {user.firstName} {user.lastName} - {user.email}
                    </li>)
                }
            </ul>
    </>
  )
}

export default App
