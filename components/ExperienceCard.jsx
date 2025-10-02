export default function ExperienceCard({ experience }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 mb-6">
      <h3 className="text-xl font-semibold">{experience.role} | {experience.company}</h3>
      <p className="text-gray-600 text-sm">{experience.start} – {experience.end}</p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {experience.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  );
}
