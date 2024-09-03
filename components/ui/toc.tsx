import React from "react";

const TableOfContents = ({
  headings,
}: {
  headings: Array<{ id: string; text: string }>;
}) => {
  return (
    <nav className="sticky top-4">
      <h2 className="text-lg font-bold">Spis treści</h2>
      <ul className="list-disc pl-4">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="text-blue-600 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
