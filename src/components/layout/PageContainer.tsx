const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto w-full">
      {children}
    </div>
  );
};

export default PageContainer;
