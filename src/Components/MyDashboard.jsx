import NavigationBar from "./NavigatioBar";
import Footer from "./Footer";
import { BarChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts";

export default function MyDashboard() {
  return (
    <>
      <NavigationBar />
      <div className="h-screen overflow-y-auto bg-gradient-to-r from-[#0B2447] from-20% via-[#19376D] via-60% to-[#0B2447] to-80%">
        <div className="m-4">
          <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-sky-900 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-sky-300">
                    2,340
                  </span>
                  <h3 class="text-base font-normal text-sky-100">
                    New products this week
                  </h3>
                </div>
                <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  14.6%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="bg-sky-900 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-sky-300">
                    385
                  </span>
                  <h3 class="text-base font-normal text-sky-100">
                    User signups this week
                  </h3>
                </div>
                <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                  -2.7%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="bg-sky-900 shadow rounded-lg p-4 sm:p-6 xl:p-8">
              <div class="flex items-center justify-between mb-4">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-sky-300">
                    $45,385
                  </span>
                  <h3 class="text-base font-normal text-sky-100">
                    Sales this year
                  </h3>
                </div>
                <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  12.5%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <BarChart
                  yAxis={[
                    {
                      label: "Sales (M)",
                    },
                  ]}
                  xAxis={[
                    {
                      label: "Month",
                      id: "barCategories",
                      data: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      scaleType: "band",
                    },
                  ]}
                  series={[
                    {
                      data: [10, 8.5, 7.5, 8, 9, 6, 11, 8, 4, 3, 6, 7],
                    },
                  ]}
                  width={700}
                  height={300}
                />
              </div>
            </div>
            <div class="bg-sky-900 shadow rounded-lg p-4 sm:p-6 xl:p-8">
              <div class="flex items-center justify-between mb-4">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-sky-300">
                    $3,756
                  </span>
                  <h3 class="text-base font-normal text-sky-100">
                    Sales this week
                  </h3>
                </div>
                <div class="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  1.5%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex items-center">
                <PieChart
                  series={[
                    {
                      data: [
                        { value: 300, label: "Product 1" },
                        { value: 450, label: "Product 2" },
                        { value: 754, label: "Product 3" },
                        { value: 150, label: "Product 4" },
                        { value: 189, label: "Product 5" },
                        { value: 645, label: "Product 6" },
                        { value: 235, label: "Product 7" },
                        { value: 354, label: "Product 8" },
                      ],
                      innerRadius: 30,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 3,
                      startAngle: 0,
                      endAngle: 360,
                    },
                  ]}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
