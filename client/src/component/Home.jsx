const Home = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[32px] font-extrabold flex flex-col">
          The Community Showcase
        </h1>
        <p className="mt-2 md:text-sm text-md">
          Browse through of imaginative and visually stunning images generated
          by DALL-E AI
        </p>
      </div>
      {/* <div className="mt-16">
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] ">
                Showing Result for{" "}
                <span className=" text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid gap-3 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Result Found"
                />
              ) : (
                <RenderCards data={allPost} title="NO POST FOUND" />
              )}
            </div>
          </>
        )}
      </div> */}
    </section>
  );
};

export default Home;
