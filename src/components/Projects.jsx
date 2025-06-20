import { useState } from 'react'
import ProjectStyles from '../styles/Projects.module.css'

function Tittle() {
    return (
        <h1 className='tittle'>Projects</h1>
    )
}

function getProjects(prop) {
    return (
        <>
        
        </>
    )
}

function Filter() {
    const [activeFilter, setActiveFilter] = useState('all');

    return (
        <div className={ProjectStyles.filter}>
                
                <button className={activeFilter === 'all' ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onClick={e=>{
                    setActiveFilter('all')
                }}>
                    All Projects
                </button>
                <button className={activeFilter === 'apps' ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onClick={e=>{
                    setActiveFilter('apps')
                }}>
                    Apps
                </button>
                <button className={activeFilter === 'web' ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onClick={e=>{
                    setActiveFilter('web')
                }}>
                    Web
                </button>
                <button className={activeFilter === 'games' ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onClick={e=>{
                    setActiveFilter('games')
                }}>
                    Games
                </button>
                
        </div>
    )
}

function FolderOfProjects(prop) {
    return (
        <>
        
        </>
    )
}


export default function Projects(){
    return (
        <div className={ProjectStyles.projects}>
            <Tittle></Tittle>
            <Filter></Filter>
        </div>
    )
}