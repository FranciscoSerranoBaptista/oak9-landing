"use client";

interface CtaButtonValue {
  label?: string;
  url?: string;
  variant?: "primary" | "secondary" | "ghost" | "text-link";
  size?: "small" | "medium" | "large";
  open_in_new_tab?: boolean;
}

interface CtaButtonFieldProps {
  label?: string;
  value: CtaButtonValue | undefined;
  onChange: (value: CtaButtonValue | undefined) => void;
}

const variantOptions = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "ghost", label: "Ghost" },
  { value: "text-link", label: "Text Link" },
];

const sizeOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-surface-base dark:text-white";

export function CtaButtonField({
  label = "CTA Button",
  value,
  onChange,
}: CtaButtonFieldProps) {
  const v = value ?? {};

  function update(patch: Partial<CtaButtonValue>) {
    onChange({ ...v, ...patch });
  }

  return (
    <div className="space-y-3">
      <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {label}
      </label>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Button Label
          </label>
          <input
            type="text"
            value={v.label ?? ""}
            onChange={(e) => update({ label: e.target.value })}
            placeholder="Get Started"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            URL
          </label>
          <input
            type="url"
            value={v.url ?? ""}
            onChange={(e) => update({ url: e.target.value })}
            placeholder="https://..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Variant
          </label>
          <select
            value={v.variant ?? "primary"}
            onChange={(e) =>
              update({
                variant: e.target.value as CtaButtonValue["variant"],
              })
            }
            className={inputClass}
          >
            {variantOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Size
          </label>
          <select
            value={v.size ?? "medium"}
            onChange={(e) =>
              update({ size: e.target.value as CtaButtonValue["size"] })
            }
            className={inputClass}
          >
            {sizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
        <input
          type="checkbox"
          checked={v.open_in_new_tab ?? false}
          onChange={(e) => update({ open_in_new_tab: e.target.checked })}
          className="rounded border-zinc-300 dark:border-zinc-600"
        />
        Open in new tab
      </label>
    </div>
  );
}
