"use client";
import * as React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import YouTube from "react-youtube";
import { comments as initialComments } from "@/data/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

interface CommentProps {
  username: string;
  avatar: string;
  timestamp: string;
  content: string;
}

const Comment: React.FC<CommentProps> = ({
  username,
  avatar,
  timestamp,
  content,
}) => (
  <div className="flex flex-col justify-center px-2.5 mt-2.5 w-full tracking-wide max-md:max-w-full">
    <div className="flex flex-wrap gap-2.5 items-center w-full leading-none text-black text-opacity-50 max-md:max-w-full">
      <Avatar className="h-[46px] w-[46px]">
        <AvatarImage src={avatar}></AvatarImage>
        <AvatarFallback>{username}</AvatarFallback>
      </Avatar>
      <div className="self-stretch my-auto">{timestamp}</div>
    </div>
    <div className="mt-2.5 leading-5 text-justify text-black max-md:max-w-full">
      {content}
    </div>
  </div>
);

const CommentForm: React.FC<{
  onSubmit: (comment: string) => void;
}> = ({ onSubmit }) => {
  const [comment, setComment] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-2.5 w-full text-black max-md:max-w-full"
    >
      <div className="relative">
        <label htmlFor="commentInput" className="sr-only">
          Add a comment
        </label>
        <input
          id="commentInput"
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment here..."
          className="overflow-hidden w-full px-5 py-1.5 bg-white rounded-md border border-solid border-zinc-400 max-md:max-w-full"
          aria-label="Comment input field"
        />
      </div>
      <button
        type="submit"
        className="overflow-hidden gap-1 self-start px-5 py-2.5 mt-2.5 font-semibold bg-amber-400 border border-black border-solid rounded-[50px]"
        aria-label="Submit comment"
      >
        Add comment
      </button>
    </form>
  );
};

export default function UnitPage(params: { courseID: string; unitID: string }) {
  const [comments, setComments] =
    React.useState<CommentProps[]>(initialComments);
  const handleAddComment = (content: string) => {
    setComments([
      ...comments,
      {
        username: "Test user",
        avatar: "",
        timestamp: "Just now",
        content: content,
      },
    ]);
  };
  return (
    <div className="flex flex-wrap pb-20 justify-between w-[1420px] max-md:max-w-full">
      <article className="flex flex-col gap-4 min-w-[240px] w-[992px] max-md:max-w-full">
        <YouTube
          videoId="ZVuHLPl69mM"
          opts={{
            height: "500",
            width: "988",
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={(event: any) => {
            event.target.pauseVideo();
          }}
        />

        <section aria-label="Comments section">
          <h2 className="gap-4 self-stretch pt-4 pr-24 pb-1.5 pl-16 max-w-full text-2xl font-bold text-left text-black max-md:px-5">
            Comments ({comments.length})
          </h2>

          <div className="flex flex-col px-16 py-2.5 w-full text-sm max-md:px-5 max-md:max-w-full">
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}

            <CommentForm onSubmit={handleAddComment} />
          </div>
        </section>
      </article>
    </div>
  );
}
