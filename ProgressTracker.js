export default function ProgressTracker({ percent }) {
  return (
    <div className="w-full max-w-md mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-1">Platform Completion: {percent}%</label>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div className="bg-green-600 h-4 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}