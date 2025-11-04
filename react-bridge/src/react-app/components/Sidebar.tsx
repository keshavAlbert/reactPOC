import { PropsWithChildren, useMemo } from 'react';

export type SidebarItem = { id: string; label: string };

type SidebarProps = {
  heading?: string;
  items?: SidebarItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
};

export function Sidebar({
  heading = 'Notebook',
  items = [],
  selectedId,
  onSelect
}: PropsWithChildren<SidebarProps>) {
  const safeItems = useMemo(() => items ?? [], [items]);

  return (
    <aside className="react-sidebar">
      <h2 className="react-sidebar__heading">{heading}</h2>
      <nav className="react-sidebar__nav">
        <ul className="react-sidebar__list">
          {safeItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={
                  'react-sidebar__item' +
                  (item.id === selectedId ? ' is-active' : '')
                }
                onClick={() => onSelect?.(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
