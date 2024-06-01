"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Option = {
  value: string;
  label: string;
};
interface ComboboxProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeHolder?: string;
  searchPlaceholder?: string;
  maxWidth?: string;
  className?: string;
}

export function Combobox(props: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  function onSelect(value: string) {
    setValue(value);
    props.onSelect(value);
    setOpen(false);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            `h-10 w-full justify-between ${props.maxWidth}`,
            props.className,
          )}
        >
          {value
            ? props.options.find((option) => option.value === value)?.label
            : props.placeHolder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={`w-full max-w-56 p-0 ${props.maxWidth}`}>
        <Command
          filter={(value, search) => {
            const option = props.options.find(
              (option) => option.value === value,
            );
            if (option && option.label.startsWith(search)) {
              return 1;
            }
            return 0;
          }}
        >
          <CommandInput placeholder={props.searchPlaceholder} />
          <CommandEmpty className="">Ninguna opción encontrada</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {props.options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={onSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
