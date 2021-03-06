import React from "react";
import { FooterDiv } from "./Footer.syled";

const Footer = () => {
  return (
    <FooterDiv>
      <div className="container-fluid toppart">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="footer-c-title">
              <span>डाउनलोड</span>
            </div>
            <div className="clerfix"></div>
            <div className="f-content f-others">
              <ul className="list-unstyled">
                <li>
                  <a href="detail/organizational-structure.html">
                    संगठनात्मक ढाँचा
                  </a>
                </li>
                <li>
                  <a href="detail/contact-lists.html">सम्पर्क सूचि</a>
                </li>
                <li>
                  <a href="detail/postal-codes-of-nepal.html">
                    नेपालका हुलाक संकेतहरु
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="footer-c-title">
              छिटो <span>लिङ्कहरू</span>{" "}
            </div>
            <div className="clerfix"></div>
            <div className="f-content f-others">
              <ul className="list-unstyled">
                <li>
                  <a href="detail/ems-services.html">ई.एम.एस. सेवा</a>
                </li>
                <li>
                  <a href="detail/general-post-box.html">
                    साधारण हुलाक मञ्जुषाा
                  </a>
                </li>
                <li>
                  <a href="detail/general-services.html">साधारण सेवाहरु</a>
                </li>
                <li>
                  <a href="detail/parcel.html">पार्सल</a>
                </li>
                <li>
                  <a href="detail/other-services.html">अन्य सेवाहरु</a>
                </li>
                <li>
                  <a href="detail/new--it-based-services.html">
                    New & IT Based Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="footer-c-title">
              अन्य <span>लिङ्कहरू</span>{" "}
            </div>
            <div className="clerfix"></div>
            <div className="f-content f-others">
              <ul className="list-unstyled">
                <li>
                  <a href="http://mocit.gov.np/" target="_blank">
                    सञ्‍चार तथा सूचना प्रविधि मन्त्रालय
                  </a>
                </li>

                <li>
                  <a href="http://www.gpo.gov.np/" target="_blank">
                    गोश्वारा हुलाक कार्यालय
                  </a>
                </li>

                <li>
                  <a href="http://www.ptc.gov.np/" target="_blank">
                    हुलाक प्रशिक्षण केन्द्र
                  </a>
                </li>

                <li>
                  <a href="http://www.cmo.gov.np/" target="_blank">
                    केन्द्रिय धनादेश कार्यालय
                  </a>
                </li>

                <li>
                  <a href="http://www.psc.gov.np/" target="_blank">
                    लोक सेवा आयोग
                  </a>
                </li>

                <li>
                  <a href="http://www.upu.int/en.html" target="_blank">
                    विश्व हुलाक संघ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="footer-c-title">
              सम्पर्क <span>जानकारी</span>
            </div>
            <div className="clerfix"></div>
            <div className="f-content f-contact">
              <ul className="list-unstyled">
                <li>हुलाक सेवा विभाग</li>
                <li>डिलीबाजार, काठमाडौं, नेपाल</li>
                <li className="c-phone">
                  <a href="tel:+९७७-१-४४१०२२४, ०१-४४१०५६९, ०१-४४११३५३, ०१-४४२१२८३, ०१-४४२१२८६">
                    फोन: +९७७-१-४४१०२२४, ०१-४४१०५६९, ०१-४४११३५३, ०१-४४२१२८३,
                    ०१-४४२१२८६
                  </a>
                </li>
                <li className="c-fax">फ्याक्स: +९७७-१-४४१४६८८, ०१-४४३८१३४</li>
                <li className="c-audio">
                  अडियो नोटिस
                  बोर्डः&#2407;&#2412;&#2407;&#2414;&#2406;&#2407;&#2410;&#2410;&#2407;&#2410;&#2412;&#2414;&#2414;
                </li>
                <li className="c-email">
                  <a href="mailto: info@postalservice.gov.np">
                    इमेल: info@postalservice.gov.np
                  </a>
                </li>
                <li className="c-website">वेबसाइट: www.postalservice.gov.np</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright bottompart">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="">
                Visitor Counter:
                <span style={{ marginLeft: "20px;" }}>
                  अन्तिम अद्यावधिक गरिएको मिति:{" "}
                  <span>
                    &#2408;&#2406;&#2413;&#2412;&#45;&#2407;&#2406;&#45;&#2407;&#2413;
                  </span>
                </span>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="c-c" style={{ textAlign: "right" }}>
                © Copyright 2018. नेपाल सरकार हुलाक सेवा विभाग All Right
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" name="baseurl" id="baseurl" value="index.html" />
    </FooterDiv>
  );
};

export default Footer;
