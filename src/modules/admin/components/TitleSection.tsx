type PageTitleProps = {
  children: React.ReactNode;
};

export function TitleSection(props: PageTitleProps) {
  return <div className="ml-10 md:ml-0 flex h-9 md:h-fit items-center">{props.children}</div>;
}
