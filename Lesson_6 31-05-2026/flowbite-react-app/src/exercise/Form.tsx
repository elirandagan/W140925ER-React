import { Button, Label, TextInput } from "flowbite-react";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Form</h2>
      <div className="w-75 space-y-4">
        <div>
          <Label> Email </Label>
          <TextInput type="email" />
        </div>

        <div>
          <Label> Password </Label>
          <TextInput type="password" />
        </div>

        <Button className="w-full">Login</Button>
      </div>
    </div>
  );
}
