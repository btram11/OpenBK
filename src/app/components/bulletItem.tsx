import * as React from 'react';
import Check from "@/app/components/svg/check.svg";
import Download from "@/app/components/svg/download.svg";
import Certificate from "@/app/components/svg/certificate.svg";
import Infinity from "@/app/components/svg/infinity.svg";
import Video from "@/app/components/svg/video.svg";
import Test from "@/app/components/svg/test.svg"

export const BulletItem: React.FC<{
    text: string,
    type: string,
}> = ({ text, type }) => {
  //* Pass as a FC
  let Icon: React.FC;
  switch (type) {
    case "objective":
      Icon = Check;
      break;
    case "download":
      Icon = Download;
      break;
    case "infinity":
      Icon = Infinity;
      break;
    case "certificate":
      Icon = Certificate;
      break;
    case "video":
      Icon = Video;
      break;
    case "test":
      Icon = Test;
      break;
    default:
      Icon = Check;
  }

  return (
  <div className="flex gap-2.5 items-center mt-1.5">
      <Icon />
    <div className="self-stretch my-auto">{text}</div>
  </div>
)
}