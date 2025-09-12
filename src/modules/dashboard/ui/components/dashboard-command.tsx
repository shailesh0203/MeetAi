import { CommandDialog, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>

     
     

      <CommandInput placeholder="Find a meeting or agent" />

      <CommandList>
        <CommandItem>Test</CommandItem>
      </CommandList>
    </CommandDialog>
  );
};

export default DashboardCommand;
