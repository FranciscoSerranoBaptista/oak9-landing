"use client";

interface BooleanFieldProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  hint?: string;
}

export function BooleanField({
  label,
  value,
  onChange,
  hint,
}: BooleanFieldProps) {
  return (
    <div>
      <label className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="rounded border-zinc-300 dark:border-zinc-600"
        />
        {label}
        {hint && (
          <span className="font-normal text-zinc-400 dark:text-zinc-500">
            — {hint}
          </span>
        )}
      </label>
    </div>
  );
}
