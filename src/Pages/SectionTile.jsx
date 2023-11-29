/* eslint-disable react/prop-types */
const SectionTile = ({ heading, subHeading }) => {
  return (
    <>
      <div>
        <h1 className="md:text-4xl text-2xl font-semibold text-center ">
          {heading}
        </h1>
        <p className="md:text-sm text-xs mt-3 max-w-lg text-center px-4 mx-auto ">
          {subHeading}
        </p>
      </div>
    </>
  );
};

export default SectionTile;
