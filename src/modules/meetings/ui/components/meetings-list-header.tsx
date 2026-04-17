"use client";

import { PlusIcon, XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewMeetingDialog } from "./new-meeting-dialog";
import { useState } from "react";



export const MeetingsListHeader = () => {
    const [isDialogOpen,setIsDialongOpen]=useState(false)
  return (
   
    <>
   <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialongOpen}/>
    <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-xl">My Meetings</h5>
        <Button onClick={()=>setIsDialongOpen(true)}>
          <PlusIcon />
          New Meeting
        </Button>
      </div>
      <div className="flex items-center gap-x-2 p-1">
       TODO:Filters
      </div>
    </div>
    </>
  );
};
