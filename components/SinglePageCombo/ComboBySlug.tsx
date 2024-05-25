import Image from "next/image";
import React from "react";
import { HoverComboAuthor } from "../HtmlComponents/HoverComboAuthor";
import FavortiteLikeBtn from "./FavortiteLikeBtn";
import { Combo } from "@/lib/types";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { Textarea } from "@/components/ui/textarea";
import {
  DifficultyBadge,
  RaceBadge,
  SpecialtyBadge,
  StatsBadge,
} from "../HtmlComponents/ComboBadges";
import ComboVideo from "../HtmlComponents/ComboVideo";
import { Separator } from "../ui/separator";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LargeView from "./LargeView";
import { User } from "@prisma/client";

type Props = {
  combo: Combo;
};

export default async function ComboBySlug({ combo }: Props) {
  const session = await getServerSession(authOptions);
  const currentUser = session?.user as User;

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
    select: {
      email: true,
      id: true,
      name: true,
      image: true,
      createdAt: true,
      favorites: {
        where: {
          user: {
            email: session?.user?.email,
          },
        },
      },
      commentLikes: {
        where: {
          user: {
            email: session?.user?.email,
          },
        },
      },
    },
  });

  return (
    <>
      <section className="hidden sm:block w-full p-4 rounded-lg">
        <header className="flex items-center justify-between border-b pb-2 mb-4">
          <h1 className="text-lg font-semibold">
            Viewing Combo:{" "}
            <span className="text-gradient bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {combo.combotitle}
            </span>
          </h1>
          <FavortiteLikeBtn
            combo={combo}
            comboId={combo.id}
            likeId={
              combo.likes?.find((like) => like.userId === currentUser.id)
                ?.comboId
            }
            isInLikeList={
              !!combo.likes?.find((like) => like.userId === currentUser.id)
            }
            isInFavoriteList={
              !!combo.favorites?.find((like) => like.userId === currentUser.id)
            }
            favoriteId={
              combo.favorites?.find((like) => like.userId === currentUser.id)
                ?.id
            }
            userId={currentUser.id}
            pathName={""}
            userEmail={user?.email}
          />
        </header>

        <div className="flex flex-col sm:items-center sm:flex-row gap-4 mb-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[combo.fightingstyle, combo.fruit, combo.sword, combo.weapon].map(
              (src, index) => (
                <Image
                  key={index}
                  fetchPriority="high"
                  src={src}
                  className="border rounded-md w-full"
                  alt="combo image"
                  width={140}
                  height={140}
                />
              )
            )}
          </div>
          <Textarea
            className="h-[140px] w-full resize-none"
            readOnly
            value={combo.combodescription}
          />
        </div>

        <div className="mb-4">
          <h2 className="font-bold mb-2">Combo Properties:</h2>
          <div className="flex gap-2">
            <SpecialtyBadge specialty={"PVP"} />
            <RaceBadge race={"Fishman"} />
            <StatsBadge stats={"Main Sword"} />
            <DifficultyBadge difficulty={"Medium"} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            Built by{" "}
            <HoverComboAuthor
              authorCreatedAt={combo.authorCreatedAt}
              comboAuthor={combo.author}
              authorImage={combo.authorImage}
            />
          </div>
        </div>

        <div>
          <ComboVideo comboVideo={combo.comboVideo} />
        </div>

        <Separator className="text-black mt-4" />
      </section>
      <section className="sm:hidden w-full grid grid-cols-1 gap-2 p-2">
        <div className="flex items-center w-full gap-2 border rounded-[8px] p-2">
          <h1 className="text-[12px]">
            You are viewing the combo{" "}
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent">
              {combo.combotitle}
            </span>
          </h1>
        </div>
        <div className="flex petit:justify-center w-full gap-2">
          {[combo.fightingstyle, combo.fruit, combo.sword, combo.weapon].map(
            (src, index) => (
              <Image
                key={index}
                fetchPriority="high"
                src={src}
                className="border rounded-[8px] w-1/4 min-w-[60px] petit:w-[80px]"
                alt="combo image"
                width={60}
                height={60}
              />
            )
          )}
        </div>
        <div className="flex items-center justify-between sm:justify-normal w-full gap-1">
          <div className="">
            built by
            <HoverComboAuthor
              authorCreatedAt={combo.authorCreatedAt}
              comboAuthor={combo.author}
              authorImage={combo.authorImage}
            />
          </div>
          <FavortiteLikeBtn
            combo={combo}
            comboId={combo.id}
            likeId={
              combo.likes?.find((like) => like.userId === currentUser.id)
                ?.comboId as string
            }
            isInLikeList={
              !!combo.likes?.find((like) => like.userId === currentUser.id)
            }
            isInFavoriteList={
              !!combo.favorites?.find((like) => like.userId === currentUser.id)
            }
            favoriteId={
              combo.favorites?.find((like) => like.userId === currentUser.id)
                ?.id
            }
            userId={currentUser.id}
            pathName={""}
            userEmail={user?.email}
          />
        </div>
        <Textarea
          className="h-[120px]"
          readOnly
          value={combo.combodescription}
        />
        <h2 className="font-bold">Combo Properties:</h2>
        <div className="flex gap-2">
          <SpecialtyBadge specialty={"PVP"} />
          <RaceBadge race={"Ghoul"} />
          <StatsBadge stats={"Main Fruit"} />
          <DifficultyBadge difficulty={"No Skill"} />
        </div>
        <ComboVideo comboVideo={combo.comboVideo} />
        <Separator className="text-black mt-2" />
      </section>
    </>
  );
}
