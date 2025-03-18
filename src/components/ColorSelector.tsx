
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface ColorSelectorProps {
  onChange: (color: string) => void;
}

const ColorSelector = ({ onChange }: ColorSelectorProps) => {
  const colors = [
    { name: "blue", bg: "bg-blue-500", hover: "hover:bg-blue-600" },
    { name: "purple", bg: "bg-purple-500", hover: "hover:bg-purple-600" },
    { name: "pink", bg: "bg-pink-500", hover: "hover:bg-pink-600" },
    { name: "green", bg: "bg-green-500", hover: "hover:bg-green-600" },
    { name: "orange", bg: "bg-orange-500", hover: "hover:bg-orange-600" },
  ];

  return (
    <ToggleGroup type="single" defaultValue="blue" onValueChange={onChange}>
      {colors.map((color) => (
        <ToggleGroupItem key={color.name} value={color.name} aria-label={`Set color theme to ${color.name}`}>
          <div 
            className={`w-8 h-8 rounded-full ${color.bg} ${color.hover} transition-colors`}
            aria-hidden="true"
          />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ColorSelector;
