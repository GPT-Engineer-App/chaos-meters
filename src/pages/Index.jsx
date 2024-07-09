import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [actualChaos, setActualChaos] = useState(50);
  const [desiredChaos, setDesiredChaos] = useState(50);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Chaos Meters</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <ChaosMeter
          label="Actual"
          value={actualChaos}
          onChange={(value) => setActualChaos(value[0])}
        />
        <ChaosMeter
          label="Desired"
          value={desiredChaos}
          onChange={(value) => setDesiredChaos(value[0])}
        />
      </div>
    </div>
  );
};

const ChaosMeter = ({ label, value, onChange }) => {
  return (
    <div className="w-full max-w-xs">
      <Label htmlFor={`${label.toLowerCase()}-chaos`} className="text-lg font-semibold mb-2 block">
        {label}
      </Label>
      <div className="flex items-center gap-4">
        <Slider
          id={`${label.toLowerCase()}-chaos`}
          max={100}
          step={1}
          className="flex-grow"
          value={[value]}
          onValueChange={onChange}
        />
        <span className="text-lg font-medium w-12 text-right">{value}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">Amount of chaos</p>
    </div>
  );
};

export default Index;