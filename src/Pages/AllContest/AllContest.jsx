"use client";
import { Button } from "keep-react";
import useAllContest from "../../Hooks/useAllContest";
import { ContestCard } from "./ContestCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { RiMedal2Fill } from "react-icons/ri";

const AllContest = () => {
  const [allContest, isPending] = useAllContest();
  const medicalContest = allContest?.filter(
    (contest) => contest.tags === "medical"
  );
  const businessContest = allContest?.filter(
    (contest) => contest.tags === "business"
  );
  const writingContest = allContest?.filter(
    (contest) => contest.tags === "writing"
  );
  const gamingContest = allContest?.filter(
    (contest) => contest.tags === "gaming"
  );
  const tags = ["all", "business", "gaming", "medical", "writing"];
  const [seeMore, setSeeMore] = useState(false);

  if (isPending) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed border-black rounded-full animate-spin border-mainColor"></div>
    );
  }

  return (
    <div className="pb-10">
      <Tabs>
        <TabList className={"mx-auto text-center mt-4 border-b"}>
          {tags.map((tag) => (
            <Tab key={tag}>{tag.toUpperCase()}</Tab>
          ))}
        </TabList>

        {/* All tag contest */}
        <TabPanel>
          <div className="space-y-5 mt-10 px-4">
            <h1 className="text-2xl flex items-center gap-1 font-semibold">
              {" "}
              {allContest.length} Contest Found <RiMedal2Fill />
            </h1>
            {!seeMore
              ? allContest
                  ?.slice(0, 4)
                  .map((item) => (
                    <ContestCard item={item} key={item._id}></ContestCard>
                  ))
              : allContest?.map((item) => (
                  <ContestCard item={item} key={item._id}></ContestCard>
                ))}
          </div>
          {allContest?.length > 0 ? (
            <div className=" mt-6 text-center ">
              <Button
                onClick={() => setSeeMore(!seeMore)}
                size={"xs"}
                className="bg-[#0ECDB9] mx-auto"
              >
                {seeMore ? "See Less" : "See More"}
              </Button>
            </div>
          ) : (
            ""
          )}
        </TabPanel>

        {/* businessContest*/}
        <TabPanel>
          <div className="space-y-5 mt-10 px-4">
            <h1 className="text-2xl flex items-center gap-1 font-semibold">
              {" "}
              {businessContest?.length} Contest Found <RiMedal2Fill />
            </h1>
            {businessContest?.map((item) => (
              <ContestCard item={item} key={item._id}></ContestCard>
            ))}
          </div>
        </TabPanel>

        {/*gamingContest */}
        <TabPanel>
          <div className="space-y-5 mt-10 px-4">
            <h1 className="text-2xl flex items-center gap-1 font-semibold">
              {" "}
              {gamingContest?.length} Contest Found <RiMedal2Fill />
            </h1>
            {gamingContest?.map((item) => (
              <ContestCard item={item} key={item._id}></ContestCard>
            ))}
          </div>
        </TabPanel>

        {/* medicalContest */}
        <TabPanel>
          <div className="space-y-5 mt-10 px-4">
            <h1 className="text-2xl flex items-center gap-1 font-semibold">
              {" "}
              {medicalContest?.length} Contest Found <RiMedal2Fill />
            </h1>
            {medicalContest?.map((item) => (
              <ContestCard item={item} key={item._id}></ContestCard>
            ))}
          </div>
        </TabPanel>

        {/*writingContestt */}
        <TabPanel>
          <div className="space-y-5 mt-10 px-4">
            <h1 className="text-2xl flex items-center gap-1 font-semibold">
              {" "}
              {writingContest?.length} Contest Found <RiMedal2Fill />
            </h1>
            {writingContest?.map((item) => (
              <ContestCard item={item} key={item._id}></ContestCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllContest;
