import Banner from "@/components/Home/Banner";
import PopularProducts from "@/components/Home/PopularProducts";
import SummerCareTips from "@/components/Home/SummerCareTips";
import TopBrands from "@/components/Home/TopBrands";

export default function Home() {
  return (
     <>
      <Banner />
      <PopularProducts></PopularProducts>
      <SummerCareTips></SummerCareTips>
      <TopBrands></TopBrands>
    </>
  );
}
