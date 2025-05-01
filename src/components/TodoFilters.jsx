export default function TodoFilters({ current, setFilter }) {
    const baseClasses =
      'px-3 py-1 rounded border text-sm hover:bg-gray-200 transition';
  
    const activeClass = 'bg-gray-300 font-semibold';
  
    return (
      <div className="flex gap-2">
        {['all', 'completed', 'pending'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`${baseClasses} ${current === type ? activeClass : ''}`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    );
  }
  