import CONFIG from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai"

import {
  LiaDiscord,
} from "react-icons/lia";

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💬 Contact</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.youtube && (
          <a
            href={`https://www.youtube.com/${CONFIG.profile.youtube}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white "
          >
            <AiOutlineYoutube className="text-2xl" />
            <div className="text-sm">youtube</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineInstagram className="text-2xl" />
            <div className="text-sm">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineMail className="text-2xl flex-shrink-0" />
            <div className="text-sm">email</div>
          </a>
        )}
        {CONFIG.profile.discord && (
          <a
            href={`https://discord.gg/${CONFIG.profile.discord}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <LiaDiscord className="text-2xl flex-shrink-0" />
            <div className="text-sm">discord</div>
          </a>
        )}
      </ul>
    </>
  )
}

export default ContactCard
