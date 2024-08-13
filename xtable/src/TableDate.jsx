import React, { useState } from 'react'

const TableDate = () => {
    const [articles] = useState(
        [
        
            { date: "2022-09-01", views: 100, article: "Article 1" },
        
            { date: "2023-09-01", views: 100, article: "Article 1" },
        
            { date: "2023-09-02", views: 150, article: "Article 2" },
        
            { date: "2023-09-02", views: 120, article: "Article 3" },
        
            { date: "2020-09-03", views: 200, article: "Article 4" }
        
        ]
        
        )
    const [sortedData,setSortedData] = useState(articles);

    const sortByDate = ()=>{
        const sorted = [...articles].sort((a,b)=>{
            return new Date(b.date) - new Date(a.date) || b.views - a.views
        })
        setSortedData(sorted)
    }

    const sortByViews = ()=>{
        const sorted = [...articles].sort((a,b)=>{
            return b.views - a.views || new Date(b.date) - new Date(a.date)
        })
        setSortedData(sorted)
    }

  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((data)=>(
                    <tr>
                        <td>{data.date}</td>
                        <td>{data.views}</td>
                        <td>{data.article}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableDate