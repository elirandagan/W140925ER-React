import { Badge as BadgeComponent, Button } from "flowbite-react";
import { MdAddReaction } from "react-icons/md";

export default function Badge() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Badge</h2>
      <div className="flex items-center gap-3">
        <BadgeComponent className="flex gap-1" color="success">
          <MdAddReaction size={40} color="red" />
          {/* New */}
        </BadgeComponent>
        <Button color="blue">View Product</Button>
      </div>
    </div>
  );
}
