import clsx from "clsx";

export function TagList({ className, children }) {
  return (
    <ul role="list" className={clsx(className, "flex flex-wrap gap-4")}>
      {children}
    </ul>
  );
}

export function TagListItem({ className, children }) {
  return (
    <li
      className={clsx(
        "rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600",
        className
      )}
    >
      {children}
    </li>
  );
}
