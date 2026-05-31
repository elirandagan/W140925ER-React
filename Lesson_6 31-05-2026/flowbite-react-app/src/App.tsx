import Alert from "./exercise/Alert";
import Badge from "./exercise/Badge";
import CustomButton from "./exercise/CustomButton";
import Form from "./exercise/Form";
import ImgCard from "./exercise/ImgCard";
import InfoCard from "./exercise/InfoCard";
import UserCard from "./exercise/UserCard";

export default function App() {
  return (
    <main className="grid grid-cols-1 gap-12 p-10">
      <CustomButton />
      <hr />
      <InfoCard />
      <hr />
      <ImgCard />
      <hr />
      <Form />
      <hr />
      <Alert />
      <hr />
      <Badge />
      <hr />
      <UserCard />
    </main>
  );
}
