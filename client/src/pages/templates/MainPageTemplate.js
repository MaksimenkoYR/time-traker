import React from 'react'
import MainNavigation from '../../features/MainNavigation'

const MainTemplate = ({children}) => {
    return (
        <div>
            <MainNavigation />

            <div className='container'>
                <div className='row'>{children}</div>
            </div>
        </div>
    )
}

export default MainTemplate
