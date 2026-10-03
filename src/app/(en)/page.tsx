import { CatalogPage } from "@/components/catalog-page";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData locale="en" />
      <CatalogPage locale="en" />
    </>
  );
}
