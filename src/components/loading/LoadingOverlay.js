const LoadingOverlay = () => {
    return (
      <div className="loading-overlay fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  };
  
  export default LoadingOverlay;