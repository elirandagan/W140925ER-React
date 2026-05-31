import { Button } from "flowbite-react";
import { MdSaveAlt } from "react-icons/md";

export default function CustomButton() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Custom Card</h2>
      <Button
        onClick={() => console.log("Saved")}
        color="green"
        className="rounded-xl px-2 py-1 w-30 text-xl cursor-pointer flex gap-2"
      >
        <MdSaveAlt />
        Save
      </Button>
    </div>
  );
}
