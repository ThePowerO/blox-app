"use client";

import { Heart, Loader, Star, Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { useState } from "react";
import { Combo } from "@/lib/types";

export function AddLikeParagraph({ combo }: { combo: Combo }) {
  const { pending } = useFormStatus();
  return (
    <p
      title={`${
        combo.likes.length
      } likes`}
      className="text-[14px]"
    >
      {pending ? combo.likes.length + 1 : combo.likes.length}
    </p>
  );
}

export function RemoveLikeParagraph({ combo }: { combo: Combo }) {
  const { pending } = useFormStatus();
  return (
    <p
      title={`${
        combo.likes.length
      } likes`}
      className="text-[14px]"
    >
      {pending ? combo.likes.length - 1 : combo.likes.length}
    </p>
  );
}

export default function AddLikeButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            fill="#E21C49"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit" className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function RemoveLikeButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px] ">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button type="submit" className="mb-[6px]">
          <Heart
            className={`cursor-pointer`}
            color="#d64343"
            fill="#E21C49"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function AddFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            fill="#e0ec3d"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button className="" type="submit">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}

export function RemoveFavoriteButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <div className="mb-[6px]">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            width={22}
            height={22}
          />
        </div>
      ) : (
        <button className="">
          <Star
            className={`cursor-pointer`}
            color="#e0ec3d"
            fill="#e0ec3d"
            width={22}
            height={22}
          />
        </button>
      )}
    </>
  );
}
export function DeleteComboBtn() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          typeof="button"
          className="w-full flex gap-1"
          variant="destructive"
        >
          <Loader className="animate-spin" width={18} height={18} />
        </Button>
      ) : (
        <Button className="w-full flex gap-1" variant="destructive">
          <Trash2 width={18} height={18} />
          Delete Combo
        </Button>
      )}
    </>
  );
}

export function AddCommentLike(comment: Comment) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          type="button"
          className="px-[11px]  cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length + 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      ) : (
        <button
          type="submit"
          className="px-[11px]  cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length + 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      )}
    </>
  );
}

export function RemoveCommentLike(comment: Comment) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          type="button"
          className="px-[11px] cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length - 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      ) : (
        <button
          type="submit"
          className="px-[11px] cursor-pointer border-1 hover:border-lime-400 h-[25px] place-content-center bg-zinc-500 text-white rounded-full font-bold"
        >
          {/*
                    <span className=' text-white top-0 left-[12px] pointer-events-none'>
                        +{comment.likes.length - 1}
                    </span>
                    */}
          <span className="text-transparent px-[10px]" />
        </button>
      )}
    </>
  );
}
