const ProgressBar = () => {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Flowbite
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          45%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full w-2/5"></div>
      </div>
    </>
  );
};

export default ProgressBar;

// className={`fixed ml-[auto] z-[999] p-[10px] text-sm font-medium text-white bg-gray-900 rounded-[6px] shadow-tooltip  dark:bg-gray-700 ${coordinate.left} ${coordinate.right}`}

// setCoordinate({
//   top: Math.round(top),
//   left: Math.round(left)
// });
