const NoData = () => {
  return (
    <div className="no-data flex flex-col items-center justify-center h-full text-center p-4 mt-10">
        <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v2a1 1 0 001 1h4a1 1 0 001-1v-2m4-4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m5-4h4M12 9v3m0 0H9m3 0h3m4-10H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
        </svg>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">No News Available</h2>
        <p className="text-gray-500">It seems like we couldn't fetch any news. Please check back later.</p>
      </div>
  )
}

export default NoData