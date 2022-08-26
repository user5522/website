import React from "react";
import { Helmet } from "react-helmet";

export default function notFound() {
  return (
    <div className="flex">
      <Helmet>
        <title>Not found</title>
      </Helmet>
      <h2 className="text-5xl text-white">404 this doesn't exit mf</h2>
    </div>
  );
}
