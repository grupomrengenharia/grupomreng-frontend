import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import partners from '@/data/partners.json';
import { Badge } from '@/components/ui/badge';

const firstRow = partners.slice(0, partners.length / 2);
const secondRow = partners.slice(partners.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
  city,
}: {
  img: string;
  name: string;
  body: string;
  city: string;
}) => {
  return (
    <figure
      className={cn(
        'relativ flex flex-col gap-2 h-full min-w-64 cursor-pointer overflow-hidden rounded-xl p-4',
        'bg-black/55 ',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="64"
          height="64"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <div>
        <Badge variant="default" className="bg-(--brand-color)">
          {city}
        </Badge>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function PartnersMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
