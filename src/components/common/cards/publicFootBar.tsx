import { ButtonClick } from "../buttons/button";
import ArrowRight from "@/public/svg/arrow_right.svg";
export const PublicFootBar: React.FC<{ price: string }> = ({ price }) => {
    return (
        <div className="flex gap-5 justify-between items-center pt-4 mt-4 w-full">
            <ButtonClick>
              Enroll now
              <ArrowRight />
            </ButtonClick>
            <div className="self-stretch my-auto text-2xl font-bold text-sky-600">
              {price}$
            </div>
          </div>
    );
}
