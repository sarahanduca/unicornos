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

  function displayRate() {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  }

  return (
    <div className="patchDisplay mb-5 border-b border-zinc-800">
      <h1 className="text-lg">
        Patch {version} - {date} 📅
      </h1>
      <div className="flex flex-col justify-start">
        <div className="patchLog">
          <button onClick={() => setDisplayDescription(!displayDescription)}>
            Patch Log 📑
          </button>
          {displayDescription && (
            <div className="bg-zinc-900 rounded px-4 pt-1 pb-4 my-4">
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
          )}
        </div>
        <span className="text-sm">
          autor: {author}{" "}
          {rating && `- rating: ${displayRate(parseInt(rating))}`}
        </span>
        <br />
        {file ? (
          <a className="font-semibold" target="_blank" href={file}>
            Download 📦
          </a>
        ) : (
          "Downalod em zip 📚 under construction 🚧"
        )}
      </div>
    </div>
  );
}
