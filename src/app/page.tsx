import Button from "@/components/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 text-2xl font-bold">
      <Button intent={"yellow"}>Button</Button>
      <Button intent={"yellow"} showIcon>
        Button
      </Button>
      <Button intent={"white"}>Button</Button>
      <Button intent={"white"} showIcon>
        Button
      </Button>
      <Button intent={"dark"}>Button</Button>
      <Button intent={"dark"} showIcon>
        Button
      </Button>
    </div>
  );
}
