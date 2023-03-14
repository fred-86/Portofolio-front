import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Data/data'
import { Card } from './Card'
/**
 * Card for resume projects
 * @returns  {React.ReactElement}
 */
export function CardProject() {
    return (
        <Link to="/Projects">
            <Card title={data[1].title} img={data[1].picture} />
        </Link>
    )
}
