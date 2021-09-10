import React from 'react'
import AnnoucementItem from './AnnoucementItem'
import tasks from './annoucement'


const AnnoucementList = ({

}) => {
    return (
        <>
            <h1 className="page-title">  </h1>
            <div className="row">
                {
                    tasks.map(task =>  (
                        <div className="col-lg-6">
                            <AnnoucementItem
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                date={task.date}
                                
                            />
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default AnnoucementList
