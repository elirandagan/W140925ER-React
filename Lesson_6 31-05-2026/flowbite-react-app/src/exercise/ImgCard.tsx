import { Card } from "flowbite-react";

export default function ImgCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Image Card</h2>
      <Card
        imgSrc="../../assets/img.jpg"
        imgAlt="background image"
        className="w-72 bg-white hover:shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-700">Farm</h3>
        <p className="font-semibold text-green-400">$9999</p>
      </Card>
    </div>
  );
}
