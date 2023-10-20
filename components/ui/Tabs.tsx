"use client";

import { Tab } from "@headlessui/react";
import { Fragment, HtmlHTMLAttributes } from "react";
import { Caveat } from "next/font/google";
import Container from "./container";
import Button from "./Button";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

interface Tab {
  title: string;
  tag: string;
  excerpt: any;
  link: string;
}

function Tabs() {
  const tabs: Tab[] = [
    {
      title: "Versand & Rückgabe",
      tag: "#deaa",
      excerpt: (
        <>
          <ul className="list-disc pl-3 space-y-3">
            <h1 className="text-lg font-bold text-black ">{`Versand :`} </h1>
            <li>
              Kostenloser Versand bei Bestellung über 20€: Österreich, Belgien,
              Deutschland, Dänemark, Frankreich, Spanien, Italien, Niederlande
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 40€: Bulgarien, Finnland,
              Kroatien, Ungarn, Luxemburg, Schweden, Slowakei, Slowenien
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 50€: Tschechische
              Republik, Irland, Polen, Portugal
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 60€: Griechenland
              Kostenloser Versand bei Bestellung über 80€: Litauen, Lettland,
              Rumänien
            </li>
          </ul>
          <ul className="list-disc pl-3 space-y-3 mt-6">
            <h1 className="text-lg font-bold text-black ">{`Rückgabe :`} </h1>
            <li>
              Kostenloser Versand bei Bestellung über 20€: Österreich, Belgien,
              Deutschland, Dänemark, Frankreich, Spanien, Italien, Niederlande
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 40€: Bulgarien, Finnland,
              Kroatien, Ungarn, Luxemburg, Schweden, Slowakei, Slowenien
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 50€: Tschechische
              Republik, Irland, Polen, Portugal
            </li>
            <li>
              Kostenloser Versand bei Bestellung über 60€: Griechenland
              Kostenloser Versand bei Bestellung über 80€: Litauen, Lettland,
              Rumänien
            </li>
          </ul>
        </>
      ),
      link: "#0",
    },
    {
      title: "Mount Shasta",
      tag: "#Mountain",
      excerpt:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "#0",
    },
    {
      title: "Spezifikationen",
      tag: "#Mountain",
      excerpt: (
        <>
          <ul className=" list-disc pl-3 space-y-1">
            <li>Höhe pro Pane: l7,75 in | 20 cm</li>
            <li>Breite pro Panel: 9 in | 23 cm</li>
            <li>Kantendicke: 0,24 in | 0,6 cm</li>
            <li>Gewicht pro Panel: 0,46 lb | 208 g</li>
            <li>Kabellänge: 8,24 ft (2,5 m)</li>
          </ul>
          <h1 className="text-base font-bold py-1 pl-1">Funktionen</h1>

          <ul className=" list-disc pl-3 space-y-1">
            <li>
              {` Connect+: Ja, Shapes Panels sind so konzipiert, dass sie zusammenarbeiten ?`}
            </li>
            <li>Berührungssteuerung: Ja</li>
            <li>Musik-Synchronisierung: Ja </li>
            <li>Screen Mirror: Ja</li>
          </ul>
          <h1 className="text-base font-bold py-1 pl-1">Allgemein</h1>
          <ul className=" list-disc pl-3 space-y-1">
            <li>Lichtstrom pro Panel: 100 Lumen</li>
            <li>Lebensdauer: 25.000 Stunden</li>
            <li>{`KommunikationsprotokollWLAN: (2,4 GHz b/g/n)`} </li>
            <li>
              <span className="font-bold pr-1">HINWEIS:</span>
              5-GHz-Netzwerke sind mit Nanoleaf Produkten nicht kompatibel.
            </li>
            <li>
              {`Dimmbarkeit: Ja (über Nanoleaf App, Sprachbefehl, Berührung)`}{" "}
            </li>
            <li>
              {`Montageart: Mit mitgelieferten doppelseitigem Klebeband oder
          Schraubenhalterungen (Schrauben und Dübel sind im Lieferumfang nicht
            enthalten)`}
            </li>
            <li>
              {` Store-App Steuerung über die store App (Android und iOS) für
          Mobiltelefone/Tablets oder die store Desktop App (Windows und Mac).`}{" "}
            </li>
            <li>
              {`KompatibilitätApple Home, Amazon Alexa, Google Home, IFTTT, store
          Remote, SmartThings, Razer Chroma`}{" "}
            </li>
          </ul>
          <h1 className="text-base font-bold py-1 pl-1">Farbe</h1>
          <ul className=" list-disc pl-3 space-y-1">
            <li>{`Farbtemperatur: 1200–6500 K`} </li>
            <li>{`Farbkanal-Konfiguration: RGBW`} </li>
            <li>{`Farbfähigkeit: Mehr als 16 Mio`} </li>
            <li>{`Farbwiedergabeindex: (CRI)80`}</li>
          </ul>
          <h1 className="text-base font-bold py-1 pl-1"> Leistungsaufnahme</h1>
          <ul className=" list-disc pl-3 space-y-1">
            <li>{`Spannung: 100-120 V AC`} </li>
            <li>{`Max. Leistung des Netzteils42 W`} </li>
            <li>{`Max. Energieverbrauch pro Panel2 W`} </li>
            <li>
              {`Max. Panels pro Netzteil21 Sechsecke über ein 42 W Netzteil`}{" "}
            </li>
            <li>
              {`Maximale Anzahl an Panels pro Steuereinheit500 Sechsecke`}
            </li>
          </ul>
        </>
      ),
      link: "#0",
    },
  ];
  return (
    <div className="my-12 h-full">
      <Container>
        <Tab.Group>
          {({ selectedIndex }) => (
            <div className={`${caveat.variable} bg-red-500. h-screen `}>
              {/* Buttons */}
              <div className="flex justify-center ">
                <Tab.List className=" inline-flex flex-wrap  justify-center space-x-1 bg-[#111] w-full rounded-xl p-2  mb-8 min-[480px]:mb-12">
                  {tabs.map((tab, index) => (
                    <Tab key={index} as={Fragment}>
                      <button
                        className={`flex-1  text-sm font-medium w-full h-8 px-4 py-1 rounded-2xl whitespace-nowrap focus-visible:outline-none transition-colors duration-300 ease-in-out ${
                          selectedIndex === index
                            ? "bg-white text-black"
                            : "text-white hover:text-slate-900"
                        }`}
                      >
                        {tab.title}
                      </button>
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              {/* Tab panels */}
              <Tab.Panels className="mx-auto my-auto">
                <div className="relative flex flex-col items-center">
                  {tabs.map((tab, index) => (
                    <Tab.Panel key={index} as={Fragment}>
                      <article className="w-full h-full  rounded-2xl shadow-xl min-[480px]:flex items-stretch focus-visible:outline-none focus-visible:ring">
                        <div className=" flex flex-col items-start  justify-center p-5 pl-3">
                          <div className="flex justify-between mb-1">
                            <header className="py-4">
                              <div className="font-caveat text-xl font-medium text-black">
                                {tab.tag}
                              </div>
                              <h1 className="text-xl font-bold text-black">
                                {tab.title}
                              </h1>
                            </header>
                          </div>
                          <div className="text-slate-500 text-sm items-start mb-2">
                            {tab.excerpt}
                          </div>
                        </div>
                      </article>
                    </Tab.Panel>
                  ))}
                </div>
              </Tab.Panels>
            </div>
          )}
        </Tab.Group>
      </Container>
    </div>
  );
}

export default Tabs;
