
"use client";

import Image from "next/image";
import { Navbar } from "../Navbar";
import { Button } from "@/components/ui/button";

const portalItems = [
  {
    title: "Canvas",
    content: "Dive into course materials, submit tasks, and track grades.",
    imgUrl: "/canvas.webp",
    imgHeight: 321,
    imgWidth: 1095,
    targetUrl: "https://my.smccd.edu/canvas/",
  },
  {
    title: "WebSmart",
    content: "Manage your student account, enroll in classes, and view aid.",
    imgUrl: "/websmart.png",
    imgHeight: 200,
    imgWidth: 528,
    targetUrl: "https://websmart.smccd.edu/",
  },
  {
    title: "WebSchedule",
    content: "Explore the class schedule, find your next course, and more.",
    imgUrl: "/webschedule.png",
    imgHeight: 100,
    imgWidth: 264,
    targetUrl: "https://webschedule.smccd.edu/",
  },
];

export default function Home() {
  return (
    <>
      {/* <header className="flex p-4 items-center">
        <Image
          src="/smccd-horizontal-blue.svg"
          alt="SMCCCD Logo"
          width={300}
          height={100}
          className="mr-10"
        />
        <Navbar />
        <Button variant="default" className="ml-auto">
          Need Help?
        </Button>
      </header> */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600  flex justify-center items-center h-32">
        <h1 className="text-7xl text-white">Accudemia</h1>
      </section>
      <div className="container">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 overflow-hidden">
          <div className="rotate-12 grid grid-cols-1 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-1 animate-spin"></div>
        </div>
        <main className="py-16">
          <div className="prose lg:prose-xl mx-auto">
            <h1> Accudemia's Academic Support Platform</h1>
            <p>
            The AccuDemia Academic Support Platform is a dynamic and comprehensive tool designed to provide students with personalized academic support and tutoring services, fostering success and achievement in their educational journey. Embraced by educational institutions globally, AccuDemia offers a range of features tailored to meet the diverse needs of students seeking academic assistance and guidance.
            </p>
            <h2>Key Features of AccuDemia</h2>
            <p>
            AccuDemia encompasses a variety of features aimed at empowering students and enhancing their academic performance:
            </p>
            <ul>
              <li>
                <strong>Personalized Tutor Matching: </strong>{" "}
                AccuDemia utilizes advanced algorithms to match students with qualified tutors based on their academic needs, learning preferences, and scheduling constraints. This personalized approach ensures that students receive tailored support that aligns with their individual learning styles and goals.
              </li>
              <li>
                <strong>Virtual Tutoring Sessions:</strong>  AccuDemia facilitates virtual tutoring sessions through video conferencing and online collaboration tools. Students can connect with tutors in real-time, seek clarification on challenging concepts, and receive personalized guidance and feedback, promoting active learning and comprehension.
              </li>
              <li>
                <strong>24/7 Access to Academic Resources: </strong> AccuDemia provides students with round-the-clock access to a repository of academic resources, including study guides, practice quizzes, and instructional videos. This comprehensive resource library empowers students to supplement their learning outside of traditional classroom hours, enhancing retention and mastery of course material.
              </li>
            </ul>
            <h2>Benefits of Utilizing AccuDemia</h2>
            <p>
            The adoption of AccuDemia offers numerous benefits that contribute to student success and academic achievement:
            </p>
            <ul>
              <li>
                <strong>Enhanced Academic Support:</strong> AccuDemia delivers personalized academic support tailored to the unique needs of each student. Through one-on-one tutoring sessions, targeted interventions, and access to supplemental resources, students receive the guidance and assistance necessary to overcome academic challenges and excel in their studies.
              </li>
              <li>
                <strong>Increased Confidence and Competence:</strong> AccuDemia empowers students to develop confidence in their academic abilities and strengthen their subject comprehension. By providing personalized feedback, constructive guidance, and encouragement, tutors help students build essential skills and strategies for academic success.
              </li>
              <li>
                <strong>Improved Performance and Progress: </strong> AccuDemia enables students to make tangible progress in their academic endeavors, leading to improved grades, increased retention rates, and enhanced overall academic performance. Through regular assessments, goal-setting, and progress tracking, students can measure their growth and achievement over time, fostering a sense of accomplishment and motivation.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
            In an educational landscape characterized by diverse learning needs and challenges, the AccuDemia Academic Support Platform emerges as a valuable resource for students seeking personalized academic assistance and guidance. By leveraging technology to facilitate virtual tutoring sessions, personalized mentorship, and access to comprehensive academic resources, AccuDemia empowers students to overcome obstacles, achieve their academic goals, and thrive in their educational pursuits.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
