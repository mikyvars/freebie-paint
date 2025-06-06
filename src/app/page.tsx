import Button from "@/components/button";
import Question from "@/components/faq-question";
import Pills from "@/components/pills";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-gray-400 text-2xl font-bold">
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

      <Pills>Pills</Pills>
      <Pills intent={"light"}>Pills</Pills>

      <Question
        question="Quam vehicula faucibus amet lorem. "
        answer="Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod."
      />
    </div>
  );
}
