"use client";

interface ImageUrlFieldProps {
  label?: string;
  hint?: string;
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
}

export function ImageUrlField({
  label = "Image URL",
  hint,
  value,
  onChange,
  placeholder = "https://...",
}: ImageUrlFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
        {hint && (
          <span className="ml-1 font-normal text-zinc-400 dark:text-zinc-500">
            — {hint}
          </span>
        )}
      </label>
      {value && (
        <div className="relative mb-2">
          <img
            src={value}
            alt="Preview"
            className="h-24 w-full rounded-md border border-zinc-200 object-cover dark:border-zinc-700"
          />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-1.5 top-1.5 rounded bg-black/50 px-1.5 py-0.5 text-xs text-white hover:bg-black/70"
          >
            Remove
          </button>
        </div>
      )}
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
      />
    </div>
  );
}
