export default function ProjectCard({ repo }) {
  const imageUrl = repo.image || null; // placeholder for screenshot/GIF if available

  return (
    <div className="card border p-4 rounded shadow hover:shadow-lg transition">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={repo.name}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}
      <h3 className="text-lg font-bold mb-2">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p className="text-gray-700 mb-2">{repo.description}</p>
      <div className="text-sm text-gray-500">
        <span>⭐ {repo.stargazers_count}</span> • <span>{repo.language}</span>
      </div>
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          className="text-blue-600 mt-2 block"
        >
          Live Demo
        </a>
      )}
    </div>
  );
}
