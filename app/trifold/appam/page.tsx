'use client';

import Image from 'next/image';

export default function APPAMTrifold() {
  return (
    <div className="w-full">
      {/* Print button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-pe-teal text-white px-6 py-2 rounded hover:bg-pe-teal-600 shadow-lg"
        >
          Print Brochure
        </button>
      </div>

      {/* Page 1: Outside (when folded) */}
      <div className="w-[11in] h-[8.5in] mx-auto bg-white relative flex print:break-after-page">
        {/* Left Panel: Back */}
        <div className="w-1/3 bg-white border-r border-gray-300 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-pe-dark">Start Your Research</h3>
              <Image
                src="/logos/profile_teal.svg"
                alt="PolicyEngine"
                width={30}
                height={30}
                className="opacity-70"
              />
            </div>
            <p className="text-sm mb-3">
              <strong>Free</strong>, open-source microsimulation for tax and benefit policy research.
            </p>
            <p className="text-sm mb-4">
              Test hypotheses in seconds. Export publication-ready tables. Cite with confidence.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/qr-code.png"
              alt="QR Code"
              width={120}
              height={120}
              className="mb-3"
            />
            <p className="text-sm font-semibold text-pe-teal">policyengine.org</p>
          </div>

          <div className="text-xs text-gray-600 mt-4">
            <p className="font-semibold mb-2">Research Support</p>
            <p>hello@policyengine.org</p>
            <p className="mt-2">github.com/PolicyEngine</p>
          </div>
        </div>

        {/* Middle Panel: (fold flap) */}
        <div className="w-1/3 bg-gradient-to-br from-pe-teal to-pe-teal-800 border-r border-gray-300 flex items-center justify-center">
          <Image
            src="/logos/profile_white.svg"
            alt="PolicyEngine"
            width={120}
            height={120}
            className="opacity-30"
          />
        </div>

        {/* Right Panel: Cover */}
        <div className="w-1/3 bg-gradient-to-br from-pe-teal to-pe-teal-800 p-8 flex flex-col justify-between text-white">
          <div className="flex-1 flex flex-col justify-center">
            <Image
              src="/logos/white.svg"
              alt="PolicyEngine"
              width={220}
              height={65}
              className="mb-8"
            />

            <h2 className="text-2xl font-bold mb-3">Tax-benefit microsimulation</h2>
            <h2 className="text-2xl font-bold mb-8">for policy research</h2>

            {/* App screenshot */}
            <div className="bg-white/10 rounded-lg p-2 mb-6">
              <Image
                src="/app-screenshot.png"
                alt="PolicyEngine App"
                width={400}
                height={250}
                className="rounded"
              />
            </div>

            <p className="text-lg">Open source • All 50 states + DC</p>
            <p className="text-lg mb-6">Federal & state taxes • Major benefits</p>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold">policyengine.org</p>
          </div>
        </div>
      </div>

      {/* Page 2: Inside (when unfolded) */}
      <div className="w-[11in] h-[8.5in] mx-auto bg-white relative flex mt-8 print:mt-0">
        {/* Left Panel: What PolicyEngine Does */}
        <div className="w-1/3 border-r border-gray-300 p-6 flex flex-col">
          <div className="text-center mb-4">
            <Image
              src="/logos/profile_teal.svg"
              alt="PolicyEngine"
              width={30}
              height={30}
              className="opacity-50 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-pe-dark">What PolicyEngine Does</h2>
          </div>

          <div className="space-y-4 text-sm flex-1">
            <div className="text-center">
              <h3 className="font-bold text-base mb-2">Research Outputs</h3>
              <ul className="space-y-1 text-gray-700">
                <li>Distributional tables by income decile</li>
                <li>Poverty & inequality impacts</li>
                <li>State & congressional district breakdowns</li>
                <li>Marginal tax rate schedules</li>
                <li>Winners & losers analysis</li>
                <li>Budget scores with behavioral responses</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/obbba-screenshot.png"
                alt="Household distributional analysis"
                width={260}
                height={180}
                className="rounded-lg shadow-md mb-2"
              />
              <p className="text-xs text-center text-gray-600">
                Household-level distributional analysis
              </p>
            </div>

            <div className="text-center pt-3 border-t border-gray-200">
              <h3 className="font-bold text-base mb-2">Data & Methods</h3>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>Calibrated microdata from CPS, IRS PUF, ACS, SIPP & SCF</li>
                <li>50,000+ households</li>
                <li>Validated against IRS SOI & CBO</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Panel: Why Researchers Choose PolicyEngine */}
        <div className="w-1/3 border-r border-gray-300 p-6 flex flex-col">
          <div className="text-center mb-4">
            <Image
              src="/logos/profile_teal.svg"
              alt="PolicyEngine"
              width={30}
              height={30}
              className="opacity-50 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-pe-dark">Why Researchers Choose PolicyEngine</h2>
          </div>

          <div className="space-y-5 text-sm flex-1">
            <div>
              <h3 className="font-bold text-base text-pe-teal mb-2 text-center">Fast</h3>
              <p className="text-gray-700 text-center">
                Test reforms in seconds. No coding required. Export results instantly.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-pe-teal mb-2 text-center">Comprehensive</h3>
              <p className="text-gray-700 text-center">
                All 50 states + DC. Federal & state taxes. SNAP, Medicaid, TANF, SSI, and more.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-pe-teal mb-2 text-center">Current</h3>
              <p className="text-gray-700 text-center">
                2024 tax law. Updated monthly. Legislative references for every parameter.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-pe-teal mb-2 text-center">Reproducible</h3>
              <p className="text-gray-700 text-center">
                100% open source. Share reform links. Python API for integration.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-base text-pe-teal mb-2 text-center">Validated</h3>
              <p className="text-gray-700 text-center">
                Calibrated to IRS Statistics of Income. Matches CBO distributional tables.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <p className="font-bold text-center mb-2">Example Research Questions:</p>
              <ul className="space-y-1 text-xs text-gray-700 italic">
                <li className="text-center">"How would expanding state EITC affect poverty?"</li>
                <li className="text-center">"What's the distributional impact of SALT cap repeal?"</li>
                <li className="text-center">"How do CTCs interact with benefit cliffs?"</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel: Join These Researchers */}
        <div className="w-1/3 p-6 flex flex-col bg-gray-100">
          <div className="text-center mb-3">
            <Image
              src="/logos/profile_teal.svg"
              alt="PolicyEngine"
              width={30}
              height={30}
              className="opacity-50 mx-auto mb-2"
            />
            <h2 className="text-2xl font-bold text-pe-dark">Join These Researchers</h2>
          </div>

          <div className="mb-4 p-3 bg-white rounded-lg border border-gray-200">
            <p className="text-xs text-center text-gray-700">
              <span className="font-semibold">Used by researchers in 50+ papers</span><br/>
              <span className="font-semibold">Congressional testimony</span><br/>
              <span className="font-semibold">State legislative analysis</span>
            </p>
          </div>

          <p className="text-xs mb-3 text-gray-700 text-center font-semibold">
            Trusted by leading institutions:
          </p>

          <div className="grid grid-cols-2 gap-2 flex-1 items-center">
            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/nber.png"
                alt="NBER"
                width={70}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/atlanta-fed.png"
                alt="Atlanta Fed"
                width={100}
                height={35}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/georgetown.png"
                alt="Georgetown"
                width={90}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/umich.png"
                alt="UMich"
                width={90}
                height={35}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/pn3policy.png"
                alt="Prenatal-to-3"
                width={100}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/niskanen-center.png"
                alt="Niskanen"
                width={100}
                height={35}
                className="object-contain"
              />
            </div>

            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/aei.png"
                alt="AEI"
                width={50}
                height={35}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white/50 p-2 rounded">
              <Image
                src="/logos/organizations/ubicenter.png"
                alt="UBI Center"
                width={90}
                height={35}
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-300 bg-pe-teal/10 rounded p-3">
            <p className="text-xs italic text-gray-700 text-center">
              "PolicyEngine enabled us to analyze state-level EITC expansions across all 50 states in under a week—research that would have taken months."
            </p>
            <p className="text-xs text-center mt-2 font-semibold text-gray-600">
              — Recent APPAM presenter
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media print {
          .page-break {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  );
}