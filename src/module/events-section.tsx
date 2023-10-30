"use client";

import { useEffect, useState } from "react";
import { Wrapper } from "../components/wrapper";
import axios from "axios";
import dayjs from "dayjs";
import { base, api } from "../utils/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  CalendarIcon,
  ChevronRightIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

interface EventsSectionProps {}

export const EventsSection: React.FC<EventsSectionProps> = ({}) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(api("/events?populate=*")).then((res) => {
      setEvents(res.data.data);
    });
  }, []);

  return (
    <Wrapper className={`my-12`}>
      <h1 className={`font-bold text-5xl`}>Events ({events.length})</h1>

      <div className={`mt-8 grid grid-cols-3 gap-12`}>
        {events.map(({ id, attributes: ev }: any) => {
          return (
            <Card key={id}>
              <CardHeader>
                <img
                  src={base(ev.CoverImage.data.attributes.url)}
                  alt={`${ev.Name} Cover Image`}
                  className={`mb-6 rounded-2xl`}
                />
                <CardTitle className={`text-2xl`}>{ev.Name}</CardTitle>
              </CardHeader>

              <CardFooter>
                <p className={`text-xs font-medium`}>
                  <span className="flex gap-2 items-center mb-2">
                    <CalendarIcon />{" "}
                    {dayjs(ev.DateTime).format("DD/MM/YYYY hh:mm")}
                  </span>
                  <span className="flex gap-2 items-center">
                    <GlobeIcon /> {ev.Venue}
                  </span>
                </p>
              </CardFooter>
              <CardContent className={`text-sm`}>
                <Collapsible>
                  <CollapsibleTrigger
                    className={`font-bold flex gap-1 items-center`}
                  >
                    Read More <ChevronRightIcon />
                  </CollapsibleTrigger>
                  <CollapsibleContent
                    className={`mt-4 leading-6 text-slate-400`}
                  >
                    {ev.Description}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Wrapper>
  );
};
