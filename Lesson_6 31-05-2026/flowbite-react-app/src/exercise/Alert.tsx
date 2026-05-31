import { Alert as AlertComponent } from "flowbite-react";

export default function Alert() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-2xl">Alert</h2>
      <AlertComponent color="success" className="mt-6 w-96">
        User saved successfully!
      </AlertComponent>
    </div>
  );
}
