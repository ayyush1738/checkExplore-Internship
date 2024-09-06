// utils.js
export const renderDefects = (defects) => {
    if (!defects || typeof defects !== 'object') {
      return <div>No defects data available.</div>;
    }
    
    const excludeKeys = [
      "Tyre_Unqiue_Id",
      "Type",
      "Error_Code",
      "Error_Message"
    ];
    
    const borderKeys = {
      "#######################################": "border-bottom",
      "***************************************": "border-top",
    };
    
    const filteredDefects = Object.entries(defects).filter(
      ([key]) => !excludeKeys.some(excludeKey => key.startsWith(excludeKey))
    );
    
    return filteredDefects.map(([key, value]) => {
      const borderClass = borderKeys[key];
    
      if (borderClass) {
        return <div key={key} className={`border-t-2 border-black my-2 ${borderClass}`} />;
      }
  
      return (
        <div key={key} className="mb-2">
          <div className="font-bold text-black p-2 rounded-lg bg-lime-200">
            {key.replace(/_/g, ' ')} <span className='text-blue-600'>{value}</span>
          </div>
        </div>
      );
    });
};
  