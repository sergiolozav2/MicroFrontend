type PageTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function TitleSection(props: PageTitleProps) {
  return (
    <div
      className={`ml-10 mr-2 mt-[1px] flex min-h-9 items-center font-medium md:ml-8 md:h-fit md:py-4 md:pr-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
}
