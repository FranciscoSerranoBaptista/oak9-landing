"use client";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  required?: boolean;
  maxLength?: number;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  hint,
  required,
  maxLength,
}: TextFieldProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
        {required && <span className="ml-0.5 text-red-500">*</span>}
        {hint && (
          <span className="ml-1 font-normal text-zinc-400 dark:text-zinc-500">
            — {hint}
          </span>
        )}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white"
      />
      {maxLength && (
        <div className="mt-0.5 text-right text-xs text-zinc-400 dark:text-zinc-500">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  );
}
