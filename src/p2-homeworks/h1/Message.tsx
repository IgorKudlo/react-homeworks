import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.message__avatar}>
                <img src={props.avatar} alt={props.name}/>
            </div>
            <div className={s.message__body}>
                <div className={s.message__content}>
                    <span className={s.message__name}>{props.name}</span>
                    <p className={s.message__text}>{props.message}</p>
                </div>
                <div className={s.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
