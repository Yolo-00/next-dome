import Link from "next/link";

import Carousel from "@/components/Carousel";

const hrefUrl =
  "https://get.revolut.com/E528/?af_channel=website_direct&af_dp=revolut%3A%2F%2Fapp&af_sub1=%7B%22conversion_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fen-SG%2F%22%2C%22cookie_consent%22%3A%5B%5D%2C%22landing_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fen-SG%2F%22%2C%22qr_code%22%3Afalse%2C%22website_client_id%22%3A%225b7cf120-d40d-4cb7-8f55-c061ad83dcaa%22%7D&deep_link_sub1=DEEPLINK&deep_link_value=revolut%3A%2F%2Fapp&pid=website";

export default function Home() {
  return (
    <div className="pt-10 px-5 w-[100vw] mx-auto lg:w-[800px] lg:px-0">
      <div className="text-[52px] font-semibold lg:text-center text-pretty">
        Make your spend, well-spent
      </div>
      <div className="font-semibold lg:text-center my-5 text-pretty">
        Updating your wardrobe? Get cashback. When in Japan? Spend in Yen. Big
        life goals? Reach them faster. However you spend — Revolut is all you
        need.
      </div>
      <Link href={hrefUrl}>
        <div className="w-[131px] h-[42px] text-center bg-[#191c1f] text-white leading-[42px] rounded-3xl lg:mx-auto">
          Get started
        </div>
      </Link>

      <Carousel />
    </div>
  );
}
