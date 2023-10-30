"use client";

import { useEffect, useState } from "react";
import { Wrapper } from "../components/wrapper";
import axios from "axios";
import { base, api } from "../utils/api";
import { Card, CardHeader, CardTitle, CardFooter } from "../components/ui/card";
import Link from "next/link";

interface SponsorsSectionProps {}

export const SponsorsSection: React.FC<SponsorsSectionProps> = ({}) => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    axios.get(api("/sponsors?populate=*")).then((res) => {
      setSponsors(res.data.data);
    });
  }, []);

  return (
    <Wrapper className={`my-12`}>
      <h1 className={`font-bold text-5xl`}>Sponsors ({sponsors.length})</h1>

      <div className={`mt-8 grid grid-cols-3 gap-12`}>
        {sponsors.map(({ id, attributes: ev }: any) => {
          return (
            <Link key={id} href={ev.Website}>
              <Card>
                <CardHeader>
                  <img
                    src={base(ev.logo.data.attributes.url)}
                    alt={`${ev.Name} Cover Image`}
                    className={`mb-6 rounded-2xl`}
                  />
                  <CardTitle className={`text-2xl`}>{ev.Company}</CardTitle>
                </CardHeader>

                <CardFooter>
                  <p className={`font-medium text-slate-500`}>{ev.Category}</p>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
