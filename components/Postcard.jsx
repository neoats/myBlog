import React from "react";
import moment from "moment";
import Link from "next/link";

export const Postcard = ({ post }) => {
  return (
    <div className="bg-white  shadow-lg rounded-lg  pb-12 mb-12">
      <div className="relative overflow-hidden rounded-lg shadow-md ">
        <div className=" relative h-full w-full shadow-lg rounded-t-lg lg:rounded-lg">
          {post.featuredImage && post.featuredImage.url ? (
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className=" h-full w-full border-gray-700 border-3 "
            />
          ) : (
            <div className="bg-gray-300 h-full w-full" />
          )}
        </div>
      </div>

      <div className="mb-2"></div>

      <div className="flex items-center justify-start mb-4 lg:mb-0 w-full lg:w-auto ml-1">
        <img
          unoptimized="true"
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 text-lg">
          {post.author.name}
        </p>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline ml-4 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>

      <div>
        <h1 className="transaition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>

        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer mb-4">
              Okumaya Devam Et
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Postcard;
