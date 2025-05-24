"use client";

import { Input } from "@/components/ui/input";

const LocationSelector = ({
  onCountryChange,
  onStateChange,
}: {
  onCountryChange?: (country: { name: string }) => void;
  onStateChange?: (state: { name: string }) => void;
}) => {
  return (
    <div className="space-y-2">
      <Input
        placeholder="Mock Country"
        onChange={(e) =>
          onCountryChange?.({ name: e.target.value || "MockCountry" })
        }
      />
      <Input
        placeholder="Mock State"
        onChange={(e) =>
          onStateChange?.({ name: e.target.value || "MockState" })
        }
      />
    </div>
  );
};

export default LocationSelector;
