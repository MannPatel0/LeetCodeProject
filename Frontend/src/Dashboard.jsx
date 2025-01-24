import { useEffect, useState } from "react";
import { Sun, Moon, Github, CheckCircle, Settings } from "lucide-react";
import dotenv from "dotenv";


const themes = {
  dark: {
    background: "bg-[#1E2028]",
    cardBg: "bg-[#282A36]",
    tableBg: "bg-[#282A36]",
    tableHeaderBg: "bg-[#373945]",
    text: "text-gray-200",
    textSecondary: "text-gray-400",
    border: "border-[#373945]",
    hover: "hover:bg-[#373945]",
    input: "bg-[#373945] text-gray-200",
    buttonPrimary: "bg-[#FF4C60] hover:bg-[#ff3347] text-white",
    buttonSecondary: "bg-[#373945] hover:bg-[#444752] text-gray-200",
    accent: "text-[#FF4C60]",
    link: "text-[#FF4C60] hover:text-[#ff3347]",
  },
  light: {
    background: "bg-gray-100",
    cardBg: "bg-white",
    tableBg: "bg-white",
    tableHeaderBg: "bg-gray-50",
    text: "text-gray-900",
    textSecondary: "text-gray-600",
    border: "border-gray-200",
    hover: "hover:bg-gray-100",
    input: "bg-gray-100 text-gray-900",
    buttonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
    buttonSecondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    accent: "text-blue-500",
    link: "text-blue-500 hover:text-blue-600",
  },
};

const useTheme = (isDark) => {
  return isDark ? themes.dark : themes.light;
};

const Dashboard = () => {
  const [isDark, setIsDark] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState(
    localStorage.getItem("username") || "",
  );
  const [showUsernameCard, setShowUsernameCard] = useState(!username);
  const [showSettings, setShowSettings] = useState(false);
  const [problems, setProblems] = useState([]); // Added state for problems
  const theme = useTheme(isDark);

  const topics = [
    { name: "Arrays", count: 15, color: "bg-[#FF4C60]" },
    { name: "BFS", count: 1, color: "bg-[#FF4C60]" },
    { name: "Backtracking", count: 1, color: "bg-[#FF4C60]" },
    { name: "Binary Search", count: 8, color: "bg-[#E91E63]" },
    { name: "Bit Manipulation", count: 1, color: "bg-[#FF4C60]" },
    { name: "Bucket Sort", count: 1, color: "bg-[#FF4C60]" },
    { name: "DFS", count: 1, color: "bg-[#FF4C60]" },
    { name: "Design", count: 1, color: "bg-[#FF4C60]" },
    { name: "Dynamic Programming", count: 21, color: "bg-[#4C6FFF]" },
    { name: "Fast &amp; Slow Pointers", count: 1, color: "bg-[#4C6FFF]" },
    { name: "Graphs", count: 12, color: "bg-[#FF9800]" },
    { name: "Greedy", count: 1, color: "bg-[#FF4C60]" },
    { name: "Heap", count: 1, color: "bg-[#FF4C60]" },
    {
      name: "In-place reversal of a linked list",
      count: 1,
      color: "bg-[#FF4C60]",
    },
    { name: "Intervals", count: 1, color: "bg-[#FF4C60]" },
    { name: "QuickSelect", count: 1, color: "bg-[#FF4C60]" },
    { name: "Sliding Window", count: 6, color: "bg-[#9C27B0]" },
    { name: "Sorting", count: 1, color: "bg-[#FF4C60]" },
    { name: "Topological Sort", count: 1, color: "bg-[#FF4C60]" },
    { name: "Trie", count: 1, color: "bg-[#FF4C60]" },
    { name: "Two Pointers", count: 1, color: "bg-[#FF4C60]" },
    { name: "Union Find", count: 1, color: "bg-[#FF4C60]" },
    { name: "Trees", count: 18, color: "bg-[#4CAF50]" },
  ];

  const companies = [
    "AMD",
    "Accenture",
    "Accolite",
    "Adobe",
    "Affirm",
    "Agoda",
    "Airbnb",
    "Alibaba",
    "Amazon",
    "American Express",
    "Anduril",
    "Apple",
    "Arcesium",
    "Arista Networks",
    "Asana",
    "Atlassian",
    "Autodesk",
    "Avito",
    "Axon",
    "BNY Mellon",
    "Barclays",
    "BlackRock",
    "Bloomberg",
    "Bolt",
    "Booking.com",
    "BuyHatke",
    "ByteDance",
    "Capgemini",
    "Capital One",
    "Cisco",
    "Citadel",
    "Cloudflare",
    "Cognizant",
    "Cohesity",
    "Commvault",
    "Confluent",
    "Coupang",
    "CrowdStrike",
    "DE Shaw",
    "Databricks",
    "Datadog",
    "Deloitte",
    "Disney",
    "Docusign",
    "DoorDash",
    "EPAM Systems",
    "Epic Systems",
    "Expedia",
    "Flexport",
    "Flipkart",
    "FreshWorks",
    "GE Healthcare",
    "Gameskraft",
    "General Motors",
    "GoDaddy",
    "Goldman Sachs",
    "Google",
    "Grab",
    "Grammarly",
    "Grubhub",
    "Guidewire",
    "HPE",
    "HashedIn",
    "Huawei",
    "Hubspot",
    "IBM",
    "IXL",
    "InMobi",
    "Informatica",
    "Infosys",
    "Intel",
    "Intuit",
    "J.P. Morgan",
    "JTG",
    "Juspay",
    "KLA",
    "Karat",
    "LinkedIn",
    "LiveRamp",
    "Lucid",
    "Lyft",
    "MakeMyTrip",
    "Mastercard",
    "Meesho",
    "Meta",
    "Microsoft",
    "Microstrategy",
    "Moengage",
    "MongoDB",
    "Morgan Stanley",
    "Myntra",
    "Nagarro",
    "Netflix",
    "Netskope",
    "Nextdoor",
    "Nordstrom",
    "Nutanix",
    "Nvidia",
    "Okta",
    "Oracle",
    "Ozon",
    "Palantir Technologies",
    "Palo Alto Networks",
    "PayPal",
    "PhonePe",
    "Pinterest",
    "PornHub",
    "Pure Storage",
    "Pwc",
    "Qualcomm",
    "RBC",
    "Rippling",
    "Roblox",
    "Roku",
    "Rubrik",
    "SAP",
    "Salesforce",
    "Samsung",
    "ServiceNow",
    "Shopee",
    "Siemens",
    "Sigmoid",
    "Slice",
    "Snap",
    "Snowflake",
    "SoFi",
    "Splunk",
    "Spotify",
    "Sprinklr",
    "Squarepoint Capital",
    "Swiggy",
    "Synology",
    "Tekion",
    "Tesco",
    "Tesla",
    "Texas Instruments",
    "ThoughtWorks",
    "TikTok",
    "Tinder",
    "Tinkoff",
    "Turing",
    "Two Sigma",
    "Uber",
    "UiPath",
    "Upstart",
    "VMware",
    "Verkada",
    "Visa",
    "Walmart Labs",
    "Warnermedia",
    "Wayfair",
    "Waymo",
    "Wipro",
    "Wix",
    "Workday",
    "Yahoo",
    "Yandex",
    "ZScaler",
    "Zeta",
    "Zoho",
    "Zomato",
    "Zoox",
    "Zopsmart",
    "athenahealth",
    "eBay",
    "josh technology",
    "opentext",
    "razorpay",
    "tcs",
    "thoughtspot",
  ];

  useEffect(() => {
    if (username) {
      fetchData();
      fetchProblems();
    }
  }, [username]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GETUSER}${username}`
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleUsernameSubmit = (newUsername) => {
    if (newUsername.trim()) {
      localStorage.setItem("username", newUsername);
      setUsername(newUsername);
      setShowUsernameCard(false);
    }
  };

  const fetchProblems = async () => {
    try {
      //import.meta.env.VITE_GETPROBLEMS
      const response = await fetch("https://leetcodeproject.onrender.com/");
      const data = await response.json();
      setProblems(data);
    } catch (error) {
      console.error("Failed to fetch problems data:", error);
    }
  };

  const filteredProblems = problems.filter(
    (problem) =>
      (selectedDifficulty === "All" ||
        problem.difficulty === selectedDifficulty) &&
      (selectedTopic === "All" || problem.topics.includes(selectedTopic)) &&
      (selectedCompany === "All" ||
        problem.companies.includes(selectedCompany)),
  );

  const totalProblems = problems.length;

  const getProgressPercentage = () => {
    if (!userData) return 0;
    const { totalSolved } = userData;
    return Math.round((totalSolved / totalProblems) * 100);
  };

  const isProblemCompleted = (problemTitle) => {
    if (!userData?.recentSubmissions) return false;
    return userData.recentSubmissions.some(
      (submission) =>
        submission.title === problemTitle &&
        submission.statusDisplay === "Accepted",
    );
  };

  const clearFilters = () => {
    setSelectedDifficulty("All");
    setSelectedTopic("All");
    setSelectedCompany("All");
  };

  return (
    <div className={`min-h-screen ${theme.background} ${theme.text}`}>
      <nav className={`border-b ${theme.border} p-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">CodePractice</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg ${theme.hover} transition-colors`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="https://github.com/mannpatel0"
              className={`${theme.hover} transition-colors`}
            >
              <Github size={20} />
            </a>
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2 rounded-lg ${theme.hover} transition-colors`}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {showUsernameCard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`${theme.cardBg} p-6 rounded-lg shadow-lg text-center w-96`}
            >
              <h2 className="text-lg font-bold mb-4">
                Welcome to CodePractice!
              </h2>
              <p className="mb-4">Please enter your Leetcode username</p>
              <input
                type="text"
                className={`w-full p-2 border rounded-lg mb-4 ${theme.input}`}
                placeholder="Enter username"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleUsernameSubmit(e.target.value);
                }}
              />
              <button
                className={`${theme.buttonPrimary} px-4 py-2 rounded-lg`}
                onClick={() => {
                  const input = document.querySelector("input").value;
                  handleUsernameSubmit(input);
                }}
              >
                Save
              </button>
            </div>
          </div>
        )}

        {showSettings && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`${theme.cardBg} p-6 rounded-lg shadow-lg text-center w-96`}
            >
              <h2 className="text-lg font-bold mb-4">Settings</h2>
              <label className="block mb-2 text-left">Change Username:</label>
              <input
                type="text"
                defaultValue={username}
                className={`w-full p-2 border rounded-lg mb-4 ${theme.input}`}
              />
              <div className="flex gap-4 justify-center">
                <button
                  className={`${theme.buttonPrimary} px-4 py-2 rounded-lg`}
                  onClick={() => {
                    const input = document.querySelector("input").value;
                    handleUsernameSubmit(input);
                    setShowSettings(false);
                  }}
                >
                  Save
                </button>
                <button
                  className={`${theme.buttonSecondary} px-4 py-2 rounded-lg`}
                  onClick={() => setShowSettings(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-lg ${theme.cardBg}`}>
            <h3 className="text-lg font-semibold mb-2">Progress</h3>
            <div className="flex items-center gap-4">
              <div className="h-24 w-24 relative">
                <svg className="transform -rotate-90" viewBox="0 0 36 36">
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-gray-700"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#FF4C60]"
                    strokeWidth="2"
                    strokeDasharray="100"
                    strokeDashoffset={100 - getProgressPercentage()}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">
                    {getProgressPercentage()}%
                  </span>
                </div>
              </div>
              <div>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Solved: {userData?.totalSolved || 0} / {totalProblems || 0}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${theme.cardBg} col-span-2`}>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <label className={`${theme.textSecondary} mb-2`}>
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className={`rounded-lg px-4 py-2 ${theme.input} border-none focus:ring-2 focus:ring-[#FF4C60]`}
                >
                  <option>All</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className={`${theme.textSecondary} mb-2`}>Topic</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className={`rounded-lg px-4 py-2 ${theme.input} border-none focus:ring-2 focus:ring-[#FF4C60]`}
                >
                  <option>All</option>
                  {topics.map((topic) => (
                    <option key={topic.name} value={topic.name}>
                      {topic.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className={`${theme.textSecondary} mb-2`}>Company</label>
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className={`rounded-lg px-4 py-2 ${theme.input} border-none focus:ring-2 focus:ring-[#FF4C60]`}
                >
                  <option>All</option>
                  {companies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={clearFilters}
              className={`mt-4 ${theme.buttonPrimary} px-4 py-2 rounded-lg`}
            >
              Clear All Filters
            </button>
          </div>
        </div>

        <div className={`rounded-lg ${theme.tableBg} p-6`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-xl font-bold">Problems</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`text-left ${theme.tableHeaderBg}`}>
                <tr>
                  <th className="p-4">Title</th>
                  <th className="p-4">Difficulty</th>
                  <th className="p-4">Topics</th>
                  <th className="p-4">Companies</th>
                  <th className="p-4">Recently Completed</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((problem, index) => (
                  <tr key={index} className={`border-t ${theme.border}`}>
                    <td className="p-4">
                      <a
                        href={problem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={theme.link}
                      >
                        {problem.title}
                      </a>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-lg text-sm ${
                          problem.difficulty === "Easy"
                            ? "bg-[#4CAF50]"
                            : problem.difficulty === "Medium"
                              ? "bg-[#FF9800]"
                              : "bg-[#FF4C60]"
                        } text-white`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {problem.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-[#4C6FFF] rounded-lg text-sm text-white"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {problem.companies.map((company) => (
                          <span
                            key={company}
                            className="px-2 py-1 bg-[#373945] rounded-lg text-sm text-white"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {isProblemCompleted(problem.title) ? (
                        <CheckCircle className="text-[#4CAF50]" size={20} />
                      ) : (
                        <span className={theme.textSecondary}>-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProblems.length === 0 && (
            <div className={`text-center mt-6 ${theme.textSecondary}`}>
              No problems match the selected filters.
            </div>
          )}
        </div>
      </main>
      <footer
        className={`p-4 text-center ${theme.cardBg} ${theme.textSecondary}`}
      >
        <p>&copy; 2025 CodePractice. All rights reserved.</p>
        <p>
          Created with help from the following sources:
          <a
            href="https://seanprashad.com/leetcode-patterns/"
            className={theme.link}
          >
            {" "}
            Sean Prasad
          </a>
          ,
          <a
            href="https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU"
            className={theme.link}
          >
            {" "}
            Blind Curated 75 Question List
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
