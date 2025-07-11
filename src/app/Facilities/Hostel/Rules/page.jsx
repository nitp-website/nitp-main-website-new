"use client";

const HostelRules = [
  {
    title: "Hostel Rules & Regulations",
    img: "https://lh3.googleusercontent.com/d/1FQlSxCgEBclr5gHsPM9sVWc4uj6xKIYN",
    points: [
      "Ragging is a social crime and is strictly prohibited in any form.",
      "DON’T Rag and DO NOT be a mute witness to Ragging.",
      "Students during their stay in the hostel will be governed by the hostel management rules.",
      "Students indulging in use of abusive and threatening language, physical fights, and use of force to get unfair act accomplished, etc. will be punished. Further, they are liable to be expelled from the hostel/ Institute.",
    ],
  },
  {
    title: `SUBSTANCE ABUSE`,
    img: "",
    points: [
      "This Institute is a drug-free workplace. Students are not allowed to consume alcoholic, narcotic drugs or any intoxicating substance on the campus and hostel premises.",
      "Students indulging in the use of abusive and threatening language, physical fights, use of force to get unfair acts accomplished, etc., will be punished. Further, they are liable to be expelled from the hostel/ Institute.",
    ],
  },
  {
    title: `Hostel Allotment Terms and Conditions`,
    desc: `General rule of hostel will be applicable to all the boarders. However some important rules are as follows: `,
    img: ``,
    points: [
      "Joining Institute mess is compulsory.",
      "No guest of boarders will be allowed to stay in the hostel.",
      "There will be a Base Menu applicable to all boarders. Extra items will be available on a payment basis through coupons.",
      "Mess facilities for guests will be available only with prior written notice to the mess contractor and approval from the hostel warden.",
      "Menu of the mess may be changed from time to time by the Hostel Management Committee.",
      "Boarders must vacate the hostel at the end of each even semester.",
      "No mutual transfer of room/seat will be allowed without the warden’s permission. Unauthorized transfers may lead to eviction.",
      "Boarders must take prior permission from the concerned warden for any overnight absence.",
      "Use of electric appliances like room heaters, coolers, air conditioners, TVs (except computers, laptops, mobiles, iPads) and parking of vehicles (except bicycles) is strictly prohibited.",
      "Bringing or taking cooked food and/or mess utensils to rooms is strictly prohibited.",
      "Consumption, possession, or bearing of alcoholic beverages and prohibited drugs is strictly banned.",
      "Acts of indiscipline, ragging, damage to hostel property, or misbehavior will be severely dealt with and may result in fines, hostel expulsion, loss of campus placement, or institute expulsion.",
      "Hostel fees once paid are non-refundable.",
      "Boarders must strictly follow hostel and mess timings.",
      "All applications must be routed through proper channel.",
      "Decisions made by the Warden or Hostel Management Committee are final and binding on all boarders.",
    ],
  },
];

const RulesTab = () => {
  return (
    <div className="text-black mt-2 w-full text-sm md:text-base">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-red-950 text-center">
        Rules & Regulations
      </h1>
      <div className="mt-5 mx-auto w-full">
        {HostelRules.map((rule, index) => (
          <div key={index} className="mb-5">
            <h2 className="text-xl font-bold mb-2 text-red-950">
              {rule.title}
            </h2>
            {rule.img && (
              <img src={rule.img} alt={rule.title} className="mb-2 mx-auto" />
            )}
            {rule.desc && (
              <p className="text-red-950 text-justify mb-2">{rule.desc}</p>
            )}
            <ul className="list-disc list-inside text-red-950">
              {rule.points.map((point, idx) => (
                <li key={idx} className="text-justify">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};





export default RulesTab;
