import {
  CircleXIcon,
  CircleCheckIcon,
  ClockArrowUpIcon,
  VideoIcon,
  LoaderIcon,
  AlarmClockCheck,
} from "lucide-react";

import { CommandSelect } from "@/components/command-select";

import { MeetingStatus } from "../../types";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

const options = [
    {
        id:MeetingStatus.Upcoming,
        value:MeetingStatus.Upcoming,
        children:(
        <div>
        <ClockArrowUpIcon/>
        {MeetingStatus.Upcoming}
        </div>
        )
    },
    {
        id:MeetingStatus.Completed,
        value:MeetingStatus.Completed,
        children:(
        <div>
        <CircleCheckIcon/>
        {MeetingStatus.Completed}
        </div>
        )
    },
    {
        id:MeetingStatus.Active,
        value:MeetingStatus.Active,
        children:(
        <div>
        <VideoIcon/>
        {MeetingStatus.Active}
        </div>
        )
    },
    {
        id:MeetingStatus.Processing,
        value:MeetingStatus.Processing,
        children:(
        <div>
        <LoaderIcon/>
        {MeetingStatus.Processing}
        </div>
        )
    },
    {
        id:MeetingStatus.Cancelled,
        value:MeetingStatus.Cancelled,
        children:(
        <div>
        <CircleXIcon/>
        {MeetingStatus.Cancelled}
        </div>
        )
    }
];
export const StatusFilter = () => {
  const [filters, setFilters] = useMeetingsFilters();

  return (
    <CommandSelect
      placeholder="Status"
      className="h-9"
      options={options}
      onSelect={(value) => setFilters({ status: value as MeetingStatus })}
      value={filters.status ?? ""}
    />
  );
};