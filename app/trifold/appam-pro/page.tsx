'use client';

import Image from 'next/image';

export default function APPAMProTrifold() {
  return (
    <div className="w-full">
      {/* Print button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={() => window.print()}
          className="bg-pe-teal-600 text-white px-6 py-2 rounded hover:bg-pe-teal-700 shadow-lg"
        >
          Print Brochure
        </button>
      </div>

      {/* Page 1: Outside (when folded) */}
      <div className="w-[11in] h-[8.5in] mx-auto bg-white relative flex print:break-after-page">

        {/* Left Panel: Start Simulating */}
        <div className="w-1/3 bg-gradient-to-br from-pe-teal-800 to-pe-teal-600 p-8 flex flex-col justify-between text-white">
          <div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">
              Start<br/>simulating
            </h1>
          </div>

          <div>
            <Image
              src="/logos/white.svg"
              alt="PolicyEngine"
              width={180}
              height={50}
              className="mb-8"
            />

            <p className="text-sm mb-4 leading-relaxed">
              Free, open-source microsimulation for tax and benefit policy research
            </p>

            <p className="text-sm mb-2">Test hypotheses in seconds</p>
            <p className="text-sm mb-2">Export publication-ready visualizations</p>
            <p className="text-sm mb-6">Cite with confidence</p>
          </div>
        </div>

        {/* Middle Panel: Watermark */}
        <div className="w-1/3 bg-gradient-to-br from-pe-teal-600 to-pe-teal-400 flex items-center justify-center relative overflow-hidden">
          <div className="text-white/10 font-bold" style={{ fontSize: '200px', letterSpacing: '-20px' }}>
            PE
          </div>
          <div className="absolute bottom-8 text-white text-sm">
            hello@policyengine.org
          </div>
        </div>

        {/* Right Panel: Cover */}
        <div className="w-1/3 bg-gradient-to-br from-pe-teal-400 to-pe-teal-600 p-8 flex flex-col justify-between text-white">
          <div>
            <Image
              src="/logos/white.svg"
              alt="PolicyEngine"
              width={200}
              height={55}
              className="mb-6"
            />
            <p className="text-xl mb-8">
              Computing public<br/>policy for everyone
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-white/10 rounded-lg p-3">
              <Image
                src="/app-screenshot.png"
                alt="PolicyEngine App"
                width={350}
                height={220}
                className="rounded w-full h-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-lg mb-6">
              Open source tax and<br/>
              benefit microsimulation
            </p>
            <p className="text-xl font-semibold">policyengine.org</p>
          </div>
        </div>
      </div>

      {/* Page 2: Inside (when unfolded) */}
      <div className="w-[11in] h-[8.5in] mx-auto bg-white relative flex mt-8 print:mt-0">

        {/* Left Panel: What PolicyEngine Does */}
        <div className="w-1/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-pe-teal-600 mb-6 text-center">
            What<br/>PolicyEngine<br/>does
          </h2>

          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Hypothetical household analysis</h3>
              <p className="text-gray-600 text-xs">
                Tax and benefit calculations and marginal tax rate schedules
              </p>
              <div className="mt-2 h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs">📊 Household calculator</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Policy reform creation</h3>
              <p className="text-gray-600 text-xs">
                Adjust thousands of parameters.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Microsimulation outputs</h3>
              <p className="text-gray-600 text-xs">
                Budget scores, distributional tables, poverty & inequality impacts, winners and losers
              </p>
              <div className="mt-2 h-16 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-xs">📈 Impact chart</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2">Custom tools</h3>
              <p className="text-gray-600 text-xs">
                Use our full app, policy-specific tools, or build your own with our Python API
              </p>
            </div>
          </div>

          <div className="mt-auto pt-4 flex justify-center">
            <Image
              src="/logos/profile_teal.svg"
              alt="PolicyEngine"
              width={30}
              height={30}
              className="opacity-30"
            />
          </div>
        </div>

        {/* Middle Panel: Why Researchers Choose PolicyEngine */}
        <div className="w-1/3 p-6 flex flex-col bg-gray-50/50">
          <h2 className="text-2xl font-bold text-pe-teal-600 mb-6 text-center">
            Why researchers<br/>choose<br/>PolicyEngine
          </h2>

          <div className="space-y-4 text-sm flex-1">
            <div className="text-center">
              <h3 className="font-bold text-pe-teal-600 text-base mb-1">Fast</h3>
              <p className="text-gray-600 text-xs">
                Test reforms in seconds. No coding required.<br/>Export results instantly.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-pe-teal-600 text-base mb-1">Comprehensive</h3>
              <p className="text-gray-600 text-xs">
                All 50 states + DC. Federal & state taxes. SNAP, Medicaid, ACA, SSI, and more.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-pe-teal-600 text-base mb-1">Reproducible</h3>
              <p className="text-gray-600 text-xs">
                100% free and open source. Full legislative references. Web app or Python package.
              </p>
            </div>

            <div className="text-center">
              <h3 className="font-bold text-pe-teal-600 text-base mb-1">Accurate</h3>
              <p className="text-gray-600 text-xs">
                Integrated CPS, IRS PUF, ACS, SIPP, and SCF.<br/>
                Calibrated to thousands of targets. Results by<br/>
                state and congressional district.
              </p>
            </div>

            <div className="mt-4 bg-white rounded-lg p-3">
              <Image
                src="/us-map-districts.png"
                alt="US Coverage Map"
                width={250}
                height={150}
                className="w-full h-auto opacity-80"
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Image
              src="/logos/teal.svg"
              alt="PolicyEngine"
              width={120}
              height={35}
              className="opacity-30"
            />
          </div>
        </div>

        {/* Right Panel: Join the Community */}
        <div className="w-1/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-pe-teal-600 mb-4 text-center">
            Join the<br/>PolicyEngine<br/>community
          </h2>

          <div className="space-y-4 flex-1">
            <div>
              <p className="text-xs font-semibold text-gray-700 mb-3 text-center">Research organizations</p>
              <div className="grid grid-cols-3 gap-2">
                {/* Row 1 */}
                <div className="flex items-center justify-center h-8">
                  <Image src="/logos/organizations/nber.png" alt="NBER" width={50} height={25} className="object-contain" />
                </div>
                <div className="col-span-2 flex items-center justify-start h-8">
                  <span className="text-[8px] text-gray-600">NATIONAL BUREAU of<br/>ECONOMIC RESEARCH</span>
                </div>

                {/* Row 2 */}
                <div className="col-span-3 flex items-center h-8 text-[10px] text-gray-700">
                  Federal Reserve Bank of Atlanta
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/umich.png" alt="UMich" width={60} height={30} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/georgetown.png" alt="Georgetown" width={60} height={30} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/uhero.png" alt="UHERO" width={50} height={25} className="object-contain" />
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/aei.png" alt="AEI" width={40} height={30} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/pn3policy.png" alt="Prenatal-to-3" width={60} height={30} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <span className="text-[10px] font-bold text-gray-600">Colorado<br/>Social Policy</span>
                </div>

                {/* Row 5 */}
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/mothers-outreach-network.png" alt="Mother's Outreach" width={60} height={30} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/usc.png" alt="USC" width={50} height={25} className="object-contain" />
                </div>
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/ubicenter.png" alt="UBI Center" width={60} height={30} className="object-contain" />
                </div>

                {/* Row 6 */}
                <div className="flex items-center justify-center h-10">
                  <Image src="/logos/organizations/gary-community-ventures.png" alt="Gary Ventures" width={60} height={30} className="object-contain" />
                </div>
                <div className="col-span-2 flex items-center justify-center h-10">
                  <Image src="/logos/organizations/niskanen-center.png" alt="Niskanen Center" width={100} height={30} className="object-contain" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-700 mb-3 text-center">Benefit access tools</p>
              <div className="flex justify-around items-center">
                <Image src="/logos/organizations/amplifi.png" alt="Amplifi" width={60} height={30} className="object-contain" />
                <Image src="/logos/organizations/myfriendben.png" alt="MyFriendBen" width={70} height={30} className="object-contain" />
                <Image src="/logos/organizations/mirza.png" alt="Mirza" width={50} height={25} className="object-contain" />
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Image
              src="/logos/profile_teal.svg"
              alt="PolicyEngine"
              width={30}
              height={30}
              className="opacity-30"
            />
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