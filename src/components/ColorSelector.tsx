
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
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onChange(color.name)}
            className={`w-10 h-10 rounded-full ${color.bg} ${color.hover} transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50`}
            aria-label={`Set color theme to ${color.name}`}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        <i className="bi bi-info-circle"></i> اختر لون الواجهة المفضل لديك
      </p>
    </div>
  );
};

export default ColorSelector;
