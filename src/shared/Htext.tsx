type Props = {
  children: React.ReactNode;
};

export const Htext = ({ children }: Props) => {
  return (
    <div>
      <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
        {children}
      </h2>
    </div>
  );
};
