"use client";

import { db } from "@/config/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface DataType {
  uniqueId: string;
  url: string;
}

export default function Redirect({ params }: { params: { slug: string } }) {
  const uniqueId = params.slug;
  const router = useRouter();
  useEffect(() => {
    async function getData() {
      try {
        const ref = collection(db, "links");
        const querySnapshot = await getDocs(
          query(ref, where("uniqueId", "==", uniqueId), limit(1))
        );

        if (querySnapshot.size > 0) {
          const firstDoc = querySnapshot.docs[0];
          const data = firstDoc.data() as DataType;
          router.push(data.url);
        } else {
          console.log("not found");
        }
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [uniqueId, router]);
  return (
    <section className="absolute min-h-screen min-w-full dark:bg-indigo-950 bg-sky-200 z-10 flex justify-center items-center flex-col-reverse gap-5">
      <div className="text-xl font-semibold animate-bounce">Loading...</div>
      <div className="scale-[3]">
        <AiOutlineLoading className="animate-spin" />
      </div>
    </section>
  );
}
