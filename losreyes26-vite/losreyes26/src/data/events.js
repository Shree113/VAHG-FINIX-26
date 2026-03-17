export const eventsData = {
  day1: {
    technical: [
      {
        id: 'paper',
        name: 'PAPER PRESENTATION',
        min: 1,
        max: 4,
        poster: 'ppt.jpeg',
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdLu43zB6ebyeJCNyThjSqcH3MlKL6CiyVR4wP3yMxJUWHdFg/viewform?usp=header',
        description: 'This presentation transforms ideas into visual stories, making complex concepts simple and engaging. Each slide blends creativity with clarity, using smart design and real-world examples. The focus is on impactful communication, audience interaction, and meaningful learning.',
        details: 'Presentation Duration: 5 – 7 minutes. Slides: 8 – 12 slides required. File Name Format: TeamName_TopicName_PPT.',
        rules: [
          'For each team max 1-4 member can participate.',
          'Presentation must address a real-world problem and its solution related to the topic.',
          'All team members should participate equally in the presentation.',
          'Each team must answer at least one audience question.'
        ],
        coordinators: {
          staff: [{ name: 'PROF. S . JASEENA', role: 'AP / CSE', phone: '7736752071' }],
          student: [
            { name: 'S. ABINESH', role: 'Student Coordinator', phone: '9787732041' },
            { name: 'GOKILA', role: 'Student Coordinator', phone: '7708057684' }
          ]
        }
      },
      {
        id: 'quiz',
        name: 'TECHNICAL QUIZ',
        max: 1,
        poster: 'Technical_quiz.png',
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdEIoY8YV9zh-NrAmQlX_1hpm01kj2SaVl8tkOr3Et3XwSBzQ/viewform?usp=header',
        description: 'The Technical Quiz is an engaging event designed to test participants’ knowledge in Computer Science and Engineering concepts. The competition consists of three progressive levels, starting with basic questions and advancing to intermediate and coding rounds.',
        details: 'Individual participation only. Topics: CS & Engineering concepts. Time Limit: 20s (General), 40s (Coding).',
        rules: [
          'Team participation is not allowed.',
          'Each participant must answer questions within the given time limit.',
          'In case of a tie, a tie-breaker question will determine the winner.',
          'Participants must follow the instructions given by the quiz coordinator.'
        ],
        coordinators: {
          staff: [{ name: 'DR. T . RAJENDRAN', role: 'ASP / CSE', phone: '9952574861' }],
          student: [
            { name: 'R. SHANMUGAPRIYA', role: 'Student Coordinator', phone: '9443595202' },
            { name: 'B. YUGESH', role: 'Student Coordinator', phone: '8778635442' }
          ]
        }
      },
      {
        id: 'debug',
        name: 'CODE DEBUGGING',
        max: 1,
        poster: 'Code Poster.png',
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLScF9ItKaym5Yjh9wAPFxjRRj8aXOEY_bpMsejOIEz_e42TE1g/viewform',
        description: 'Race against time to identify and fix bugs in complex code snippets. Test your debugging skills across multiple programming languages and problem domains.',
        details: 'Participants receive buggy code and must identify and fix all errors within the time limit. Points awarded based on correctness and time taken.',
        rules: [
          'Individual participation',
          'Languages: C, Java, Python',
          'Time limit: 60 minutes',
          'Partial marks for partial solutions'
        ],
        coordinators: {
          staff: [{ name: 'PROF. J . ARUN', role: 'AP / CSE', phone: '8156946090' }],
          student: [
            { name: 'FAHAD', role: 'Student Coordinator', phone: '7306841618' },
            { name: 'SAMEER', role: 'Student Coordinator', phone: '9500592923' }
          ]
        }
      },
      {
        id: 'vibe',
        name: 'VIBE CODING',
        min: 1,
        max: 2,
        poster: 'vibe-coding.png',
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLScF9ItKaym5Yjh9wAPFxjRRj8aXOEY_bpMsejOIEz_e42TE1g/viewform',
        description: 'Vibe Coding is a rapid development challenge where participants use AI tools and programming technologies to transform ideas into working applications. Based on an assigned topic, participants must design, build, and present a functional solution within a limited time.',
        details: '1 hour development challenge. Develop an application based on the assigned topic using any programming tools or frameworks. Submission: Final project must be uploaded to GitHub. Participants are encouraged to bring their own laptops.',
        rules: [
          'Participants must show progress periodically to the coordinator during development.',
          'Applications should demonstrate clear functionality related to the assigned topic.',
          'Teams must complete and submit their project within the given time limit.',
          'The judges’ decision will be final.'
        ],
        coordinators: {
          staff: [{ name: 'PROF. S . SANDHYA', role: 'AP / CSE', phone: '7502802227' }],
          student: [
            { name: 'VINEETH', role: 'Student Coordinator', phone: '9995098453' },
            { name: 'MASHALINI', role: 'Student Coordinator', phone: '9345619417' }
          ]
        }
      }
    ],
    nonTechnical: [
      {
        id: 'rhythm',
        name: 'RHYTHM BLAST',
        max: 1,
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLScF9ItKaym5Yjh9wAPFxjRRj8aXOEY_bpMsejOIEz_e42TE1g/viewform',
        description: 'Unleash your inner performer in this energetic music and rhythm competition. Showcase your talent in this exciting non-technical event that celebrates creativity and artistry.',
        details: 'A solo performance event where participants showcase their musical or dance talent. All forms of performing arts welcome.',
        rules: [
          'Individual performance',
          'Duration: 3-5 minutes per participant',
          'Props and backing tracks allowed',
          'Performance must be original or credited'
        ],
        coordinators: {
          staff: [{ name: 'PROF. K . ELANGOVAN', role: 'AP / CSE', phone: '7010848123' }],
          student: [
            { name: 'MADHAN', role: 'Student Coordinator', phone: '7010744676' },
            { name: 'SUBASH', role: 'Student Coordinator', phone: '9361864644' }
          ]
        }
      },
      {
        id: 'lie',
        name: 'SPOT THE LIE',
        max: 1,
        googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLScF9ItKaym5Yjh9wAPFxjRRj8aXOEY_bpMsejOIEz_e42TE1g/viewform',
        description: 'A fun and engaging game of deception and deduction. Can you tell fact from fiction? Test your analytical skills and social intelligence in this thrilling event.',
        details: 'Participants are given 3 statements — 2 truths and 1 lie. Other participants must identify the lie through questioning. Best deceptor and detector both win.',
        rules: [
          'Individual participation',
          'Each round has 3 participants',
          'Questioning time: 2 minutes',
          'Points for both deception and detection'
        ],
        coordinators: {
          staff: [{ name: 'PROF. S . SATHYA', role: 'AP / CSE', phone: '6380039615' }],
          student: [
            { name: 'KAJENDRAN', role: 'Student Coordinator', phone: '9639316479' },
            { name: 'DAKSHA', role: 'Student Coordinator', phone: '8940185005' }
          ]
        }
      }
    ]
  },
  day2: {
    webinar: {
      id: 'webinar',
      name: 'CAREER AI NEXUS 2026',
      description: 'An exclusive webinar exploring the intersection of artificial intelligence and career development. Industry experts share insights on emerging AI trends, career pathways in tech, and how to leverage AI tools for professional growth. A must-attend for students aspiring to build careers in cutting-edge technology domains.',
      coordinators: {
        staff: [{ name: 'PROF. V ASHOK KUMAR', role: 'AP / CSE', phone: '7708776431' }],
        student: [{ name: 'ASHOK', role: 'Student Coordinator' }]
      }
    }
  }
};
