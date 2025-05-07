import { FiGrid, FiList } from "react-icons/fi";

const ViewToggle = ({ isGridView, setIsGridView }) => {
  return (
    <div className="flex border border-gray-200 rounded-lg p-1">
      <button
        onClick={() => setIsGridView(true)}
        className={`p-2 rounded-md ${isGridView ? "bg-black text-white" : ""}`}
      >
        <FiGrid />
      </button>
      <button
        onClick={() => setIsGridView(false)}
        className={`p-2 rounded-md ${!isGridView ? "bg-black text-white" : ""}`}
      >
        <FiList />
      </button>
    </div>
  );
};
export default ViewToggle;
