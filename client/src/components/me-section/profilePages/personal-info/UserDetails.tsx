// UserProfile.tsx
import { firstLetters } from "@/lib/utils";
import React from "react";

interface UserProfileProps {
  name: string;
  email: string;
  phone: string;
}

const UserDetails: React.FC<UserProfileProps> = ({ name, email, phone }) => {
  return (
    <div className="flex items-center gap-8 p-4 border-b border-gray-200">
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center text-gray-600 justify-center w-16 h-16 bg-yellow-100 rounded-full text-xl font-bold">
          {firstLetters(name)}
        </div>
        <div className="ml-auto flex gap-4">
          <button className="text-blue-600">Edit</button>
          <button className="text-red-600">Delete</button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold font-woltHeader">{name}</h2>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <p className=" font-bold">Email:</p>
            <p> {email}</p>
          </div>
          <div className="flex flex-col">
            <p className=" font-bold">Phone number: </p>
            <p> {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
