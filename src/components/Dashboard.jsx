import React, { useEffect, useRef, useState } from "react";

const Dashboard = () => {

  const [voterCount, setVoterCount] = useState("")
  const [CandidateCount, setCandidateCount] = useState("")
  const [voteCount, setVoteCount] = useState("")
  const [remainingVote, setRemainingVote] = useState("")

  return (
    <div className="flex px-12 py-2 flex-col m-2 shadow-lg bg-white w-[95%] h-5/6  ">
      <h1 className="text-l text-red-700 font-bold py-4 border-b-2 ">
        Search Blood Type
      </h1>
      <div className="flex justify-start mt-10 items-start ">
          <h1 className="text-sm mr-10  mb-5">Select Province : </h1>
          <div className="border-2  rounded-lg">
            <select
              className="px-2 text-sm"
              placeholder="Eg : A+ , A- , B+, B-, O+"
            >
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
            </select>
     
          </div>
          
        </div>
      <div className="flex justify-start items-start ">
          <h1 className="text-sm  mr-10 mb-5">Select District : </h1>
          <div className="border-2  rounded-lg">
            <select
              className="px-2 text-sm"
              placeholder="Eg : A+ , A- , B+, B-, O+"
            >
<option>Kathmandu</option>
<option>Lalitpur</option>
<option>Parsa</option>
<option>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
            </select>
     
          </div>
          
        </div>
      <div className="flex justify-start items-start ">
          <h1 className="text-sm  mr-10 mb-5">Blood Group : </h1>
          <div className="border-2  rounded-lg">
            <select
              className="px-2 text-sm"
              placeholder="Eg : A+ , A- , B+, B-, O+"
            >
<option>All Blood Group</option>
<option>A+</option>
<option>B+</option>
<option>O+</option>
<option>AB+</option>
<option>A-</option>
<option>B-</option>
</select>
     
          </div>
          
        </div>
      <div className="flex justify-start items-start "> 
          <h1 className="text-sm  mr-10 mb-5">Blood Component : </h1>
          <div className="border-2  rounded-lg">
            <select
              className="px-2 text-sm"
              placeholder=""
            >
<option>Whole Blood</option>
<option>PLASMA</option>
<option>Platelets</option>
<option>Red Blood Cell</option>

</select>
     
          </div>
          
        </div>

        <button
              className="bg-red-600 text-white   rounded-md py-2 px-4"
            >
              Search
            </button> 
    </div>
  );
};

export default Dashboard;
