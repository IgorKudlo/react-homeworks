import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onKeyUp, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass

    console.log(error)

    return (
        <div>
            <div className={s.wrapper}>
                <input value={name}
                       onChange={setNameCallback}
                       onBlur={setNameCallback}
                       onKeyUp={onKeyUp}
                       className={inputClass}
                />
                <button onClick={addUser}>add</button>
                <span className={s.totalUser}>{totalUsers}</span>
            </div>
            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
