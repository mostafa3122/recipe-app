import React from 'react'

export default function SkeletonCard() {
    return (
        <div className="animate-pulse rounded-2xl shadow-md p-4 ">
            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-green-200 rounded-lg w-full"></div>
        </div>
    )
}
