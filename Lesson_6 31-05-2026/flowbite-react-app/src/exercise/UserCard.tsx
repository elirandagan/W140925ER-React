import { Card, Button } from "flowbite-react";

export default function UserCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">User Card</h2>
      <div className="mt-10 flex justify-center">
        <Card className="w-72 text-center">
          <h3 className="text-2xl font-bold">John Doe</h3>
          <p className="text-gray-500">Frontend Developer</p>
          <Button className="mt-3">Follow</Button>
        </Card>
      </div>
    </div>
  );
}
