import { useState } from 'react'
import ProjectStyles from '@/styles/Projects.module.css'
import { projects } from '@/projects';
import { useScrollAnimation } from '@/scripts/useScrollAnimation';

function Filter({currentFilter, setCurrentFilter,filters}) {
    
    return (
        <div className={ProjectStyles.filter}>
                
                <button className={currentFilter === filters.all ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onMouseDown={e=>{
                    setCurrentFilter(filters.all);
                }}>
                    All Projects
                </button>
                <button className={currentFilter === filters.apps ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onMouseDown={e=>{
                    setCurrentFilter(filters.apps);
                }}>
                    Apps
                </button>
                <button className={currentFilter === filters.web ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onMouseDown={e=>{
                    setCurrentFilter(filters.web);
                }}>
                    Web
                </button>
                <button className={currentFilter === filters.games ? ProjectStyles.activeFilter : ProjectStyles.deactiveFilter} onMouseDown={e=>{
                    setCurrentFilter(filters.games);
                }}>
                    Games
                </button>
                
        </div>
    )
}

export default function Projects({projectsRef}){

    const filters = {all: "all", apps: "apps", games: "games", web: "web"}
    const [currentFilter, setCurrentFilter] = useState(filters.all);
    useScrollAnimation();
    


    return (
        <div ref={projectsRef} id={ProjectStyles.projects_container} className='hidden'>
            <h1>Projects</h1>
            <Filter 
            currentFilter={currentFilter} 
            setCurrentFilter={setCurrentFilter}
            filters={filters}

            />

            <div className={ProjectStyles.projects}>
            {projects.map((prj,i)=>
                 {
                    return prj.type == currentFilter || currentFilter == filters.all ?
                    
                    <div key={i} className={ProjectStyles.project}>
                        <div className={ProjectStyles.project_title}>{prj.title.toUpperCase()}</div>
                        <div onClick={(_)=>{
                            window.open(prj.link, "_blank")
                        }} className={ProjectStyles.project_imagem_container}>
                            <div className={`${ProjectStyles.project_description}`}>{prj.description}</div>
                            <img className={ProjectStyles.project_imagem} src={prj.imagem} alt="Project Image" />
                        </div> 
                    </div>
                    
                    : ""
                }
                
            )}
            </div>
            
            
        </div>
    )
}