import { Card } from "flowbite-react";

export default function InfoCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Info Card</h2>
      <Card className="w-72 text-white shadow bg-gray-700">
        <h2 className="text-2xl font-bold">Card Title</h2>
        <p>This is a simple card description.</p>
      </Card>
    </div>
  );
}
