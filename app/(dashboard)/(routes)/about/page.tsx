"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image"; // For handling images
import { FaCrown, FaLinkedinIn, FaGithub } from "react-icons/fa"; // LinkedIn and GitHub Icons
import { FaInstagram } from "react-icons/fa6";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TimelineStory } from "../../_components/our-story";
import Footerer from "@/components/Footerer";
import Link from "next/link";
// export const maxDuration = 300;

// Type definition for the user data
interface SocialLinks {
  linkedin?: string;
  instagram?: string;
  github?: string;
}

interface User {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  socialLinks: SocialLinks;
  avatar: string;
}

// Users data
const users: User[] = [
  {
    name: "Salah",
    role: "Head of Tech",
    bio: "I'm an Arab Muslim developer with an interest in cardiology. I developed this website. 😁",
    tags: ["Head of Tech", "Developer"],
    socialLinks: {
      github: "https://github.com",
      instagram: "https://www.instagram.com/sala7.dev",
    },
    avatar: "/salahx.png",
  },
];

// Function to generate random colors for tags
const generateTagColor = (tag: string) => {
  const colors = [
    "bg-purple-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-red-400",
    "bg-yellow-400",
    "bg-pink-400",
    "bg-indigo-400",
  ];
  const index = tag.length % colors.length; // simple hashing by length
  return colors[index];
};

// Modal for displaying user details
const UserCardModal = ({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    const modalContent = e.target as HTMLElement;
    if (modalContent && !modalContent.closest(".modal-content")) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <div
        className="bg-n-7 p-8 rounded-lg max-w-lg w-full relative modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-gray-300 transition-all"
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 hover:ring-4 transition-all hover:ring-purple-400">
            <PhotoProvider>
              <PhotoView src={user.avatar}>
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={128}
                  height={128}
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <h3 className="text-2xl font-semibold">{user.name}</h3>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="font-semibold">{user.role}</span>
          </div>

          {/* Display Tags with Random Colors */}
          {user.tags && user.tags.length > 0 && (
            <div className="flex gap-2 justify-center mt-4">
              {user.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-1 rounded-full text-white text-sm ${generateTagColor(
                    tag
                  )}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-lg mt-4">{user.bio}</p>
          <div className="flex gap-6 mt-6">
            {user.socialLinks.linkedin && (
              <a
                href={user.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-n-4 text-3xl hover:text-white transition-all" />
              </a>
            )}
            {user.socialLinks.instagram && (
              <a
                href={user.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-n-4 text-3xl hover:text-white transition-all" />
              </a>
            )}
            {user.socialLinks.github && (
              <a
                href={user.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-n-4 text-3xl hover:text-white transition-all" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TutorPage = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // State for selected user

  const handleUserClick = (user: User) => {
    setSelectedUser(user); // Open modal with selected user data
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-gradient-to-br from-n-8 to-n-7 text-white min-h-screen flex flex-col">
      <BackgroundLines>
        <div className="relative z-20 px-6 py-10 md:px-12 md:py-20 lg:px-16 lg:py-32 lg:pt-20 md:pt-12 pt-8 flex-grow">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight mb-5">
              About Quackly.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-12 opacity-90">
              Our main goal is simply to help all students around the world to
              catch those <span className="text-purple-400"> A*s</span> at no
              cost at all and as close as their device screen!
            </p>

            {/* Meet the Team Title */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide leading-tight mb-12">
              Meet the Team
            </h2>

            {/* Founders Section */}
            <section className="mb-24">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-8 text-purple-400">
                Founders
              </h3>
              <div className="flex justify-center flex-wrap gap-10 mb-12">
                {users.slice(0, 3).map((user, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleUserClick(user)} // Open modal on click
                  >
                    <div className="w-32 h-32 bg-gray-300 hover:ring-4 transition-all hover:ring-purple-400 rounded-full mb-4 overflow-hidden">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center flex-wrap gap-10 mb-12">
                {users.slice(3, 6).map((user, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleUserClick(user)} // Open modal on click
                  >
                    <div className="w-32 h-32 bg-gray-300 hover:ring-4 transition-all hover:ring-purple-400 rounded-full mb-4 overflow-hidden">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Board Section */}
            <section className="mb-24">
              <h3 className="text-3xl sm:text-4xl font-semibold mb-8">
                Our <span className="text-purple-400">Board</span>
              </h3>
              <div className="flex justify-center flex-wrap gap-8">
                {users.slice(6, 11).map((user, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => handleUserClick(user)} // Open modal on click
                  >
                    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden hover:ring-4 transition-all hover:ring-purple-400">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.role}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Volunteers Section */}
            <section>
              <h3 className="text-3xl sm:text-4xl font-semibold mb-8">
                Beloved <span className="text-purple-400">Volunteers</span>
              </h3>
              <div className="flex justify-center gap-8 overflow-x-auto mb-12">
                <Carousel
                  opts={{
                    align: "center",
                  }}
                  className="w-full max-w-xs lg:max-w-xl"
                >
                  {" "}
                  <CarouselContent>
                    {users.slice(10).map((user, idx) => (
                      <CarouselItem
                        key={idx}
                        className="flex flex-col items-center cursor-pointer md:basis-1/3 lg:basis-1/3"
                      >
                        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 overflow-hidden">
                          <Image
                            src={user.avatar}
                            alt={user.name}
                            width={128}
                            height={128}
                            className="object-cover"
                          />
                        </div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.role}</p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-4 py-6 pt-0 mb-20">
          <Link
            href={"/help#sendmsg"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className=" px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-purple-400 hover:to-indigo-400 transition duration-300 ease-in-out transform hover:scale-105">
              Contact us
            </Button>
          </Link>
          <Link
            href={"/help#sendmsg"}
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <Button className="border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-700 transition duration-300 ease-in-out transform hover:scale-105">
              Join our team
            </Button>
          </Link>
        </div>
      </BackgroundLines>
      <TimelineStory />
      {/* Modal for displaying user details */}
      {selectedUser && (
        <UserCardModal user={selectedUser} onClose={closeModal} />
      )}
      <Footerer />
    </div>
  );
};

export default TutorPage;
