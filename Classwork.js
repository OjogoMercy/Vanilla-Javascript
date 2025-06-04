const data = [
    {
      id: 1,
      name: "Favour",
      scores: {
        year1: [
          { firstSemester: { csc101: 85, mth101: 78 }, secondSemester: { csc102: 80, gst102: 88 } },
          { firstSemester: { csc201: 90 }, secondSemester: { mth202: 75, csc202: 92 } }
        ],
      },
      projects: [
        {
          title: "LauHub",
          team: ["Favour", "Ayo", "Tola"],
          tech: { frontend: ["React Native", "Redux"], backend: ["Node.js", "MongoDB"] }
        }
      ]
    },
    {
      id: 2,
      name: "Hope",
      scores: {
        year1: [
          { firstSemester: { csc101: 60, mth101: 72 }, secondSemester: { csc102: 65, gst102: 75 } },
          { firstSemester: { csc201: 78 }, secondSemester: { mth202: 82, csc202: 87 } }
        ],
      },
      projects: [
        {
          title: "StudyPadi",
          team: ["Hope", "Precious", "Sandra"],
          tech: { frontend: ["Flutter"], backend: ["Firebase"] }
        }
      ]
    }
  ];

  data.map((data,index) => {
   if (data.id == 2){
    data.csc101 + 20;
   }
   console.log(data)
  })
  
  console.log(data[0].projects[0].tech.frontend[1])
  console.log(data[1].scores.year1[1].secondSemester.mth202)
  console.log(data[0].projects[0].team[2])
  console.log(data[0].projects[0].team[2] ='300 times te number of people in the team')
  console.log(data[1].scores.year1[0].firstSemester)
  console.log(data[0].scores.year1[1].secondSemester.csc202 + data[0].scores.year1[1].secondSemester.mth202 + data[0].scores.year1[0].secondSemester.csc102 +  data[0].scores.year1[0].secondSemester.gst102 )
  console.log(data[1].projects[0].team[1])
  console.log(data[1].projects[0].team[0] +" uses " + data[1].projects[0].tech.frontend  + " and " + data[1].projects[0].tech.backend)
  console.log(data[1].projects[0].team[1] +" uses " + data[1].projects[0].tech.frontend  + " and " + data[1].projects[0].tech.backend)
  console.log(data[1].projects[0].team[2] +" uses " + data[1].projects[0].tech.frontend  + " and " + data[1].projects[0].tech.backend)

  
  
   // Output “Redux” from Favour’s frontend tech stack.
// Output “82” (Hope’s mth202 score).
// Output “Tola” (Favour’s third team member).
// Output Hope’s first year, first semester course names and scores.
// Output the total of Favour’s second semester scores.
// Output the project title where “Precious” is on the team.
// Output each student’s name and how many tech stacks (frontend + backend) they use.
  console.log(30==40) 
  // compares the values 
  console.log(30  !== 40)
  // is30 not equal to 40
  // if ststements a
  age =340;
  if (age == 20){
    console.log("age is not 30");
  }
  else {
    console.log(`my age is ${age} `)
  }