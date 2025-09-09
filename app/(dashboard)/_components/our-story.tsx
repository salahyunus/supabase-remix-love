import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineStory() {
  const data = [
    {
      title: "Our Story",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            I&apos;m Salah — a web and game full-stack developer, data analyst,
            and Python enthusiast with some experience in iOS development. I
            joined a short-term, 6-day coding course called “Coded” in Kuwait
            during my holiday. This was my second time taking the course because
            I really enjoyed it and learned a lot the first time. For my final
            project and to compete in the course&apos;s competition, I created
            Quackly with the goal of making web development easy and accessible
            to everyone, just like it was for me.
          </p>
        </div>
      ),
    },
    {
      title: "The Beginning",
      content: (
        <div>
          <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-8">
            From the onset, our vision was clear: to make high-quality
            educational resources accessible to over 1 million IGCSE students
            worldwide.
          </p>
          <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We recognized the challenges faced by students in diverse
            environments, especially those in war-torn areas, and we committed
            to not only educating but also aiding these communities.{" "}
          </p>{" "}
        </div>
      ),
    },
    {
      title: "Our Goal",
      content: (
        <div>
          <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Our mission extends beyond just academic support; we aim to enact
            real change. With every resource, mock exam, and note we provide, we
            are also raising funds to assist people affected by conflicts. Our
            goals are ambitious but clear: educate, support, and uplift.
          </p>{" "}
        </div>
      ),
    },
    {
      title: "Future Checklist",
      content: (
        <div>
          <p className=" text-neutral-200 text-xs md:text-sm font-normal mb-4">
            To continue our mission, we are excited to announce upcoming
            features that will further enrich our learners&apos; experiences:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center font-bold text-neutral-300 text-xs md:text-sm">
              ✅ Full Written Mock Exam Generator (We got MCQ! still Written
              exams..)
            </div>
            <div className="flex gap-2 items-center  text-neutral-300 text-xs md:text-sm font-bold">
              ✅ Question Searcher
            </div>
            <div className="flex gap-2 items-center  text-neutral-300 text-xs md:text-sm font-bold">
              ✅ Comprehensive Noters for all IGCSE Classes{" "}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
