import React from 'react'

type ParentcomProps = {
    children: React.ReactNode
}

function ParentCom(props: ParentcomProps) {
    return (
        <div>
           {props.children}
        </div>
    )
}

export default ParentCom
