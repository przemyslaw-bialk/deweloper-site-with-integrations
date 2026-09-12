import fs from "fs/promises";
import path from "path";

const generateXML = () => {
  const now = new Date();
  const date = now.toISOString().split("T")[0];
  const year = now.getFullYear();
  const compactDate = date.replaceAll("-", "");
  const developerName =
    "SDIZPC - Sprzedaż doradztwo i zarządzanie Piotr Cywiński";

  return `<?xml version="1.0" encoding="UTF-8"?>

<ns2:datasets xmlns:ns2="urn:otwarte-dane:harvester:1.13" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">


  <dataset status="published">

    <extIdent>sdizpc_piotr_cywinski</extIdent>

    <title>
      <polish>Ceny ofertowe mieszkań dewelopera ${developerName} w ${year}</polish>
      <english>Offer prices of apartments of ${developerName} in ${year}</english>
    </title>

    <description>
      <polish>
        Zbiór danych zawiera informacje o cenach ofertowych mieszkań dewelopera ${developerName} udostępniane zgodnie z art. 19b. ust. 1 Ustawy z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym.
      </polish>
      <english>
        The dataset contains information on offer prices of apartments of the developer ${developerName} made available in accordance with art. 19b. ust. 1 of the Act of 20 May 2021 on the protection of the rights of purchasers of residential premises or single-family houses and the Developers Guarantee Fund.
      </english>
    </description>

    <updateFrequency>daily</updateFrequency>

    <hasDynamicData>false</hasDynamicData>

    <hasHighValueData>true</hasHighValueData>

    <hasHighValueDataFromEuropeanCommissionList>false</hasHighValueDataFromEuropeanCommissionList>

    <hasResearchData>false</hasResearchData>

    <categories>
      <category>ECON</category>
    </categories>

    <resources>

      <resource status="published">

        <extIdent>sdizpc_piotr_cywinski_${compactDate}</extIdent>

        <url>https://twojadomena.pl/ceny-ofertowe-mieszkan-sdizpc-${date}.csv</url>

        <title>
          <polish>Ceny ofertowe mieszkań dewelopera ${developerName} ${date}</polish>
          <english>Offer prices for developer's apartments ${developerName} ${date}</english>
        </title>

        <description>
          <polish>
            Dane dotyczące cen ofertowych mieszkań dewelopera ${developerName} udostępnione ${date} zgodnie z art. 19b. ust. 1 Ustawy z dnia 20 maja 2021 r. o ochronie praw nabywcy lokalu mieszkalnego lub domu jednorodzinnego oraz Deweloperskim Funduszu Gwarancyjnym.
          </polish>
          <english>
            Data on offer prices of apartments of the developer ${developerName} made available ${date} in accordance with art. 19b. ust. 1 of the Act of 20 May 2021 on the protection of the rights of purchasers of residential premises or single-family houses and the Developers Guarantee Fund.
          </english>
        </description>

        <availability>local</availability>

        <dataDate>${date}</dataDate>

        <specialSigns>
          <specialSign>X</specialSign>
        </specialSigns>

        <hasDynamicData>false</hasDynamicData>

        <hasHighValueData>true</hasHighValueData>

        <hasHighValueDataFromEuropeanCommissionList>false</hasHighValueDataFromEuropeanCommissionList>

        <hasResearchData>false</hasResearchData>

        <containsProtectedData>false</containsProtectedData>

      </resource>

    </resources>

    <tags>
      <tag lang="pl">Deweloper</tag>
    </tags>

  </dataset>

</ns2:datasets>`;
};

const saveXML = async () => {
  const xml = generateXML();

  const filePath = path.join(
    process.cwd(),
    "public",
    "ceny-ofertowe-mieszkan-sprzedaz-doradztwo-i-zarzadzanie-piotr-cywinski.xml",
  );

  await fs.writeFile(filePath, xml, "utf8");

  console.log(`XML generated: ${filePath}`);
};

saveXML();
