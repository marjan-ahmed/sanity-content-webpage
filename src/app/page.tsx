import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Home() {
  const query = 
  `*[_type == 'homepage'][0]{
    title,
    paragraph,
    buttonText,
    image
  }`

  const sanityData = await client.fetch(query);
  console.log(sanityData);
  return (
    <>
    <div className="h-screen w-[700px] mx-auto flex flex-col justify-center items-center">
    <Image src={urlFor(sanityData.image).url()} alt="demo image" width={400} height={400} />
    <h1 className="text-4xl text-[poppins] text-center mt-2 mb-6 font-extrabold">{sanityData.title}</h1>
    <h3 className="text-center">{sanityData.paragraph}</h3>
    <button className="border-black border-2 p-2 px-6 mt-6 hover:bg-gray-100 rounded-md hover:transition-all">{sanityData.buttonText}</button>
    </div>
    </>
  );
}
