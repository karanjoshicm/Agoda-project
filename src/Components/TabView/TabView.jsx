import React from 'react'

//styles
import "./TabView.scss"
const TabView = ({ tabs = [], activeTab = 0, setActiveTab = () => { }, children }) => {
    return (
        <div>
            <div className="tabs">
                {
                    tabs.map((tab) => <div key={tab} onClick={() => setActiveTab(tab)} className={`tab  ${activeTab == tab && "active"}`}>{tab}</div>)
                }
            </div>

            {children}

        </div>
    )
}

export default TabView