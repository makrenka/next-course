"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>OOpps!!! {error.message}</h1>;
}
