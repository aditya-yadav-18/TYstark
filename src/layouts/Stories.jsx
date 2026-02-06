import IMG from "../assets/logo.png";
import Aditya from "../assets/logo.png";
import { FaPlusSquare } from "react-icons/fa";

const stories = [
  { id: 1, name: "Virat Kohli", image: IMG },
  { id: 2, name: "Vicky Koshal", image: IMG },
  { id: 3, name: "Charlie", image: IMG },
  { id: 4, name: "Sidharth", image: IMG },
  { id: 5, name: "Varun Dhawan", image: IMG },
];

function Stories() {
  return (
    <div className="my-3 px-4">
      <div className="flex gap-3 overflow-auto pb-2">
        {/* User Story */}
        <div
          className="relative w-[110px] h-[130px] cursor-pointer text-center"
          onClick={() => alert("Create Story")}
        >
          <img
            src={Aditya}
            className="w-full h-full rounded-xl border-2 border-pink-500 opacity-60 object-cover"
          />
          <p className="absolute bottom-0 right-0 w-full text-white bg-black/50 text-lg rounded-b-xl">
            <FaPlusSquare className="mx-auto" />
          </p>
        </div>

        {stories.map((story) => (
          <div
            key={story.id}
            className="relative w-[110px] h-[130px] cursor-pointer hover:scale-90 transition"
            onClick={() => alert(`Opening ${story.name}`)}
          >
            <img
              src={story.image}
              className="w-full h-full rounded-xl border-2 border-gray-500 object-cover"
            />
            <p className="absolute bottom-0 w-full bg-black/50 text-white text-xs text-center rounded-b-xl">
              {story.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
