import { useState } from "react";

export default function PatchDisplay({
  version,
  date,
  file,
  description,
  author,
  tags,
  rating,
}) {
  const [displayDescription, setDisplayDescription] = useState(false);

  return (
    <div className="patchDisplay mb-5 border-b border-zinc-800">
      <h1 className="text-lg">
        Patch {version} - {date} 📅
      </h1>
      <div className="flex flex-col justify-start">
        <span className="text-sm">
          autor: {author} {rating && `- rating: ${"⭐".repeat(rating)}`}
        </span>
        <div className="patchLog">
          <button
            className="border-solid border-2 border-zinc-900 rounded-lg p-2 my-4"
            onClick={() => setDisplayDescription(!displayDescription)}
          >
            Patch Log 📑
          </button>
          {displayDescription && typeof description == "string" ? (
            <div className="bg-zinc-900 rounded-lg px-4 pt-1 pb-4 mb-2">
              <span className=" text-zinc-400">{description}</span>
              <div className="mt-3">
                <span className="text-zinc-400 mr-2">#</span>
                {tags
                  ? tags.map((tag) => (
                      <span
                        className="text-zinc-800 text-xs rounded-full w-fit px-2 pb-1 mr-2 bg-zinc-400 "
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          ) : displayDescription ? (
            <div className="bg-zinc-900 rounded-lg px-4 pt-1 pb-4 mb-2">
              {description}
              <div className="mt-3">
                <span className="text-zinc-400 mr-2">#</span>
                {tags
                  ? tags.map((tag) => (
                      <span
                        className="text-zinc-800 text-xs rounded-full w-fit px-2 pb-1 mr-2 bg-zinc-400 "
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          ) : null}
        </div>
        <div className="mb-4 font-bold">
          {file ? (
            <a
              className="underline decoration-pink-500"
              target="_blank"
              href={file}
            >
              Download 📦
            </a>
          ) : (
            "Sem Download 🏳‍🌈"
          )}
        </div>
      </div>
    </div>
  );
}
