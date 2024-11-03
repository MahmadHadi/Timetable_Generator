// import React from "react";

// const Card = ({ sub, teacherName, time, loc }) => {
//     return (
//         <div className="my-2 flex flex-col">
//             <p>{sub}</p>
//             <p>{time}</p>
//             <p>{teacherName}</p>
//             <p>{loc}</p>
//         </div>
//     );
// };

// export default Card;

// import React from "react";

// const Card = ({ sub, teacherName, time, loc }) => {
//     return (
//         <div className="my-2 p-2 rounded-sm shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200">
//             <h3 className="text-lg font-semibold text-blue-600 mb-1">{sub}</h3>
//             <p className="text-sm text-gray-500">{time}</p>
//             <p className="text-sm text-gray-700 mt-2">
//                 <span className="font-medium">Teacher: </span>
//                 {teacherName}
//             </p>
//             <p className="text-sm text-gray-700">
//                 <span className="font-medium">Location: </span>
//                 {loc}
//             </p>
//         </div>
//     );
// };

// export default Card;

// import React from "react";

// const Card = ({ sub, teacherName, time, loc }) => {
//     return (
//         <div className="my-0 px-4 py-1 bg-white border border-gray-200 w-64 flex-shrink-0">
//             <div className="flex">
//                 <h3 className="text-lg font-semibold text-blue-600 mb-1">
//                     {sub}
//                 </h3>
//                 <p className="text-sm text-gray-500">{time}</p>
//             </div>
//             <div className="flex">
//                 <p className="text-sm text-gray-700 mt-2">
//                     <span className="font-medium">Teacher: </span>
//                     {teacherName}
//                 </p>
//                 <p className="text-sm text-gray-700">
//                     <span className="font-medium">Location: </span>
//                     {loc}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Card;

import React from "react";

const Card = ({ sub, teacherName, time, loc }) => {
    return (
        <div className="my-0 px-4 py-1 bg-white border border-gray-200 w-64 flex-shrink-0">
            {/* Top row with subject and time */}
            <div className="grid grid-cols-2 gap-x-2">
                <h3 className="text-md font-semibold text-blue-600 mb-1 col-span-1">
                    {sub}
                </h3>
                <p className="text-xs text-gray-500 text-right col-span-1">
                    {time}
                </p>
            </div>
            {/* Bottom row with teacher and location */}
            <div className="grid grid-cols-2 gap-x-2 mt-1">
                <p className="text-xs text-gray-700 col-span-1">
                    <span className="font-medium">Teacher: </span>
                    {teacherName}
                </p>
                <p className="text-xs text-gray-700 text-right col-span-1">
                    <span className="font-medium">Location: </span>
                    {loc}
                </p>
            </div>
        </div>
    );
};

export default Card;
