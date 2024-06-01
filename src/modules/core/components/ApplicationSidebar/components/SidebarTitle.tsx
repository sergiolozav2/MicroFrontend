interface SidebarTitleProps {
  text: string;
  icon?: React.ReactNode;
}

export function SidebarTitle(props: SidebarTitleProps) {
  return (
    <div className="select-none py-2 text-left font-medium">
      <div className="flex items-center text-sm">
        {props.icon && <span className="pl-2.5 text-xl">{props.icon}</span>}
        <p className="pl-3">{props.text}</p>
      </div>
    </div>
  );
}
