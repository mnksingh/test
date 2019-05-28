import React from "react"
import Banner from "../Carousel/Banner"
import CtaBlock from "../Sections/Home/Cta"
import HandPickedBlock from "../Sections/Home/Handpicked"
import SummerCollectionBlock from "../Sections/Home/Summer-Collection"
import OurBrandBlock from "../Sections/Home/Our-Brand"
import CustomerSaysBlock from "../Sections/Home/Customer-Says"

export default function HomePage() {
  return (
    <>
      <Banner />
      <CtaBlock />
      <HandPickedBlock />
      <SummerCollectionBlock />
      <OurBrandBlock />
      <CustomerSaysBlock />
    </>
  )
}
