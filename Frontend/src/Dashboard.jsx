import React, { useEffect, useState } from "react";
import { Sun, Moon, Github, CheckCircle, Settings, LogOut, WebhookIcon } from "lucide-react";

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
    link: "text-[#FF4C60] hover:text-[#ff3347]"
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
    link: "text-blue-500 hover:text-blue-600"
  }
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
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [showUsernameCard, setShowUsernameCard] = useState(!username);
  const [showSettings, setShowSettings] = useState(false);
  const theme = useTheme(isDark);

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${username}`);
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

  const topics = [
    { name: "Arrays", count: 15, color: "bg-[#FF4C60]" },
    { name: "Dynamic Programming", count: 21, color: "bg-[#4C6FFF]" },
    { name: "Trees", count: 18, color: "bg-[#4CAF50]" },
    { name: "Graphs", count: 12, color: "bg-[#FF9800]" },
    { name: "Binary Search", count: 8, color: "bg-[#E91E63]" },
    { name: "Sliding Window", count: 6, color: "bg-[#9C27B0]" }
  ];

  const companies = ["Google", "Amazon", "Microsoft", "Apple", "Meta", "Netflix"];


  const problems = [

          {
            "title": "Contains Duplicate",
            "difficulty": "Easy",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Bloomberg",
              "Google",
              "Microsoft",
              "Amazon",
              "Meta",
              "Apple",
              "Uber",
              "Oracle",
              "Adobe",
              "Nagarro",
              "ZScaler"
            ],
            "url": "https://leetcode.com/problems/contains-duplicate"
          },
          {
            "title": "Missing Number",
            "difficulty": "Easy",
            "topics": [
              "Arrays",
              "Bit Manipulation"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Meta",
              "Nvidia",
              "tcs",
              "Warnermedia",
              "IBM",
              "Apple",
              "Tesla"
            ],
            "url": "https://leetcode.com/problems/missing-number"
          },
          {
            "title": "Find All Numbers Disappeared in an Array",
            "difficulty": "Easy",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Amazon",
              "Tinkoff",
              "Meta",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array"
          },
          {
            "title": "Single Number",
            "difficulty": "Easy",
            "topics": [
              "Arrays",
              "Bit Manipulation"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Bloomberg",
              "Meta",
              "Apple",
              "tcs",
              "Accenture"
            ],
            "url": "https://leetcode.com/problems/single-number"
          },
          {
            "title": "Product of Array Except Self",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Meta",
              "Warnermedia",
              "Asana",
              "Uber",
              "Intuit",
              "Bloomberg",
              "Yahoo",
              "Adobe",
              "Apple",
              "Oracle",
              "Flipkart",
              "Accenture",
              "IBM",
              "Turing",
              "Autodesk",
              "Sigmoid",
              "Infosys",
              "Yandex",
              "TikTok",
              "Tekion"
            ],
            "url": "https://leetcode.com/problems/product-of-array-except-self"
          },
          {
            "title": "Find the Duplicate Number",
            "difficulty": "Medium",
            "topics": [
              "Arrays",
              "Binary Search",
              "Two Pointers"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Microsoft",
              "Google",
              "Citadel",
              "TikTok",
              "Nvidia",
              "Anduril",
              "Uber",
              "Oracle",
              "Apple",
              "IBM"
            ],
            "url": "https://leetcode.com/problems/find-the-duplicate-number"
          },
          {
            "title": "Find All Duplicates in an Array",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Amazon",
              "TikTok",
              "Google",
              "Microsoft",
              "Bloomberg",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array"
          },
          {
            "title": "Set Matrix Zeroes",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Google",
              "Meta",
              "Microsoft",
              "Bloomberg",
              "Oracle",
              "Apple",
              "Adobe",
              "Amazon",
              "Goldman Sachs",
              "tcs"
            ],
            "url": "https://leetcode.com/problems/set-matrix-zeroes"
          },
          {
            "title": "Spiral Matrix",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Amazon",
              "Zoho",
              "Cisco",
              "Microsoft",
              "Google",
              "Capital One",
              "Epic Systems",
              "Meta",
              "Adobe",
              "Bloomberg",
              "Uber",
              "Oracle",
              "TikTok",
              "Apple",
              "eBay",
              "PayPal",
              "Intuit",
              "Roblox",
              "Databricks",
              "IBM",
              "Nordstrom",
              "Yahoo",
              "AMD"
            ],
            "url": "https://leetcode.com/problems/spiral-matrix"
          },
          {
            "title": "Rotate Image",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Cisco",
              "IBM",
              "Microsoft",
              "Adobe",
              "Bloomberg",
              "Uber",
              "Roblox",
              "Yahoo",
              "Tinkoff",
              "Capital One",
              "Oracle",
              "Nvidia",
              "Apple",
              "Walmart Labs",
              "Infosys",
              "Salesforce",
              "Accenture",
              "Zoho",
              "AMD"
            ],
            "url": "https://leetcode.com/problems/rotate-image"
          },
          {
            "title": "Word Search",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Amazon",
              "Bloomberg",
              "TikTok",
              "Uber",
              "Microsoft",
              "Apple",
              "Capital One",
              "Meta",
              "Karat",
              "Salesforce",
              "Goldman Sachs",
              "Walmart Labs",
              "PayPal",
              "Google",
              "Oracle",
              "Epic Systems",
              "Atlassian",
              "Samsung",
              "Zoho",
              "Grammarly",
              "Wix"
            ],
            "url": "https://leetcode.com/problems/word-search"
          },
          {
            "title": "First Missing Positive",
            "difficulty": "Hard",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Oracle",
              "Apple",
              "MakeMyTrip",
              "Netflix",
              "Adobe",
              "Meta",
              "Bloomberg",
              "Myntra",
              "Sprinklr",
              "Zomato",
              "Walmart Labs",
              "ServiceNow",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/first-missing-positive"
          },
          {
            "title": "Longest Consecutive Sequence",
            "difficulty": "Medium",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Bloomberg",
              "Meta",
              "Microsoft",
              "Adobe",
              "Apple",
              "Oracle",
              "TikTok",
              "Uber",
              "ByteDance",
              "IBM",
              "EPAM Systems",
              "Yahoo",
              "tcs",
              "SAP",
              "DE Shaw",
              "Zoho",
              "Swiggy"
            ],
            "url": "https://leetcode.com/problems/longest-consecutive-sequence"
          },
          {
            "title": "Letter Case Permutation",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/letter-case-permutation"
          },
          {
            "title": "Subsets",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Meta",
              "Bloomberg",
              "Amazon",
              "Google",
              "Adobe",
              "Microsoft",
              "TikTok",
              "Apple",
              "Coupang",
              "tcs",
              "Mastercard"
            ],
            "url": "https://leetcode.com/problems/subsets"
          },
          {
            "title": "Subsets II",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Bloomberg",
              "Amazon",
              "Microsoft",
              "Google",
              "Walmart Labs",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/subsets-ii"
          },
          {
            "title": "Permutations",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Google",
              "Microsoft",
              "Bloomberg",
              "Meta",
              "Amazon",
              "LinkedIn",
              "Apple",
              "Oracle",
              "TikTok",
              "Adobe",
              "Citadel",
              "ServiceNow"
            ],
            "url": "https://leetcode.com/problems/permutations"
          },
          {
            "title": "Permutations II",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Meta",
              "Microsoft",
              "LinkedIn",
              "Amazon"
            ],
            "url": "https://leetcode.com/problems/permutations-ii"
          },
          {
            "title": "Combinations",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Google",
              "TikTok",
              "Microsoft",
              "Meta",
              "Amazon",
              "Bloomberg"
            ],
            "url": "https://leetcode.com/problems/combinations"
          },
          {
            "title": "Combination Sum",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Bloomberg",
              "Oracle",
              "TikTok",
              "Microsoft",
              "Walmart Labs",
              "ByteDance",
              "Apple",
              "Zoho",
              "Airbnb",
              "Meta",
              "LinkedIn",
              "J.P. Morgan",
              "Citadel",
              "Infosys"
            ],
            "url": "https://leetcode.com/problems/combination-sum"
          },
          {
            "title": "Combination Sum II",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Amazon",
              "Google",
              "LinkedIn",
              "Bloomberg",
              "Meta",
              "Oracle",
              "ByteDance",
              "TikTok",
              "Microsoft",
              "Adobe"
            ],
            "url": "https://leetcode.com/problems/combination-sum-ii"
          },
          {
            "title": "Combination Sum III",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Bloomberg"
            ],
            "url": "https://leetcode.com/problems/combination-sum-iii"
          },
          {
            "title": "Generate Parentheses",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "Microsoft",
              "Apple",
              "ServiceNow",
              "Oracle",
              "Bloomberg",
              "Yandex",
              "Texas Instruments",
              "Zoho",
              "Adobe",
              "Goldman Sachs",
              "Huawei",
              "Infosys",
              "TikTok",
              "MakeMyTrip",
              "Avito"
            ],
            "url": "https://leetcode.com/problems/generate-parentheses"
          },
          {
            "title": "Target Sum",
            "difficulty": "Medium",
            "topics": [
              "Backtracking",
              "DFS",
              "Dynamic Programming"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Microsoft",
              "Bloomberg",
              "Salesforce",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/target-sum"
          },
          {
            "title": "Palindrome Partitioning",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Microsoft",
              "Bloomberg",
              "Infosys"
            ],
            "url": "https://leetcode.com/problems/palindrome-partitioning"
          },
          {
            "title": "Letter Combinations of a Phone Number",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Google",
              "Epic Systems",
              "IBM",
              "Adobe",
              "Uber",
              "Accenture",
              "Bloomberg",
              "Tesla",
              "LinkedIn",
              "Citadel",
              "DE Shaw",
              "Yandex",
              "TikTok",
              "Siemens"
            ],
            "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number"
          },
          {
            "title": "Generalized Abbreviation",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/generalized-abbreviation"
          },
          {
            "title": "Sudoku Solver",
            "difficulty": "Hard",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Google",
              "Microsoft",
              "Intuit",
              "Meta",
              "Amazon",
              "Goldman Sachs",
              "Confluent",
              "Zoho",
              "Citadel",
              "DoorDash"
            ],
            "url": "https://leetcode.com/problems/sudoku-solver"
          },
          {
            "title": "N-Queens",
            "difficulty": "Hard",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Meta",
              "TikTok",
              "Apple",
              "Bloomberg"
            ],
            "url": "https://leetcode.com/problems/n-queens"
          },
          {
            "title": "Climbing Stairs",
            "difficulty": "Easy",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Meta",
              "Accenture",
              "Zoho",
              "Apple",
              "Bloomberg",
              "TikTok",
              "Adobe",
              "J.P. Morgan",
              "IBM",
              "Accolite",
              "Grammarly",
              "Nvidia",
              "Citadel",
              "Flipkart",
              "Infosys"
            ],
            "url": "https://leetcode.com/problems/climbing-stairs"
          },
          {
            "title": "House Robber",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Cisco",
              "Amazon",
              "Databricks",
              "Microsoft",
              "Google",
              "Meta",
              "Apple",
              "TikTok",
              "Adobe",
              "Uber",
              "Oracle",
              "PhonePe",
              "Bloomberg",
              "Agoda",
              "Goldman Sachs",
              "Flipkart",
              "PayPal",
              "EPAM Systems",
              "DE Shaw",
              "LinkedIn",
              "Walmart Labs",
              "ByteDance",
              "Arcesium",
              "Yahoo",
              "Infosys",
              "Zoho",
              "Intuit",
              "Tesla",
              "Nvidia",
              "Nordstrom"
            ],
            "url": "https://leetcode.com/problems/house-robber"
          },
          {
            "title": "Best Time to Buy and Sell Stock",
            "difficulty": "Easy",
            "topics": [
              "Greedy"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "Microsoft",
              "Bloomberg",
              "TikTok",
              "Zoho",
              "IBM",
              "Apple",
              "Nvidia",
              "tcs",
              "Bolt",
              "PayPal",
              "Morgan Stanley",
              "Salesforce",
              "Infosys",
              "Accenture",
              "Adobe",
              "DE Shaw",
              "Yahoo",
              "Visa",
              "Zoox",
              "Goldman Sachs",
              "BlackRock",
              "Uber",
              "Capital One",
              "Walmart Labs",
              "Agoda",
              "Squarepoint Capital",
              "Turing",
              "Citadel",
              "J.P. Morgan",
              "Oracle",
              "ServiceNow",
              "ByteDance",
              "PhonePe",
              "athenahealth",
              "Capgemini",
              "RBC",
              "CrowdStrike",
              "Slice",
              "Myntra"
            ],
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock"
          },
          {
            "title": "Maximum Subarray",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "LinkedIn",
              "Cisco",
              "Bloomberg",
              "Meta",
              "Accenture",
              "Turing",
              "Apple",
              "Uber",
              "Oracle",
              "Goldman Sachs",
              "Infosys",
              "tcs",
              "TikTok",
              "Cognizant",
              "Upstart",
              "Adobe",
              "ServiceNow",
              "Walmart Labs",
              "Zoho",
              "Samsung",
              "Squarepoint Capital"
            ],
            "url": "https://leetcode.com/problems/maximum-subarray"
          },
          {
            "title": "Range Sum Query - Immutable",
            "difficulty": "Easy",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/range-sum-query-immutable"
          },
          {
            "title": "House Robber II",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Databricks",
              "Google",
              "Microsoft",
              "Apple",
              "Meta",
              "Amazon",
              "TikTok",
              "Uber",
              "Adobe",
              "thoughtspot",
              "Nordstrom"
            ],
            "url": "https://leetcode.com/problems/house-robber-ii"
          },
          {
            "title": "Coin Change",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Datadog",
              "Microsoft",
              "Bloomberg",
              "Oracle",
              "TikTok",
              "Adobe",
              "Infosys",
              "Apple",
              "Meta",
              "Affirm",
              "PayPal",
              "Pinterest",
              "Salesforce",
              "Accenture",
              "Intuit",
              "Nvidia"
            ],
            "url": "https://leetcode.com/problems/coin-change"
          },
          {
            "title": "Maximum Product Subarray",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Wayfair",
              "LinkedIn",
              "Google",
              "Amazon",
              "Microsoft",
              "Bloomberg",
              "Goldman Sachs",
              "Meta",
              "Oracle",
              "DE Shaw",
              "TikTok",
              "Nvidia",
              "ServiceNow"
            ],
            "url": "https://leetcode.com/problems/maximum-product-subarray"
          },
          {
            "title": "Longest Increasing Subsequence",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "TikTok",
              "Microsoft",
              "Goldman Sachs",
              "Amazon",
              "Walmart Labs",
              "Oracle",
              "Splunk",
              "PayPal",
              "Yandex",
              "Flexport",
              "Uber",
              "Apple",
              "Citadel"
            ],
            "url": "https://leetcode.com/problems/longest-increasing-subsequence"
          },
          {
            "title": "Longest Palindromic Substring",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "Cisco",
              "Amazon",
              "Microsoft",
              "Meta",
              "Bloomberg",
              "TikTok",
              "Zoho",
              "Adobe",
              "Oracle",
              "Accenture",
              "Uber",
              "Huawei",
              "Pure Storage",
              "Apple",
              "Goldman Sachs",
              "IBM",
              "SAP",
              "tcs",
              "Commvault",
              "Turing",
              "Walmart Labs",
              "Yandex",
              "LiveRamp",
              "Accolite",
              "PhonePe",
              "ThoughtWorks"
            ],
            "url": "https://leetcode.com/problems/longest-palindromic-substring"
          },
          {
            "title": "Word Break",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Google",
              "TikTok",
              "Bloomberg",
              "Grammarly",
              "LinkedIn",
              "Salesforce",
              "Walmart Labs",
              "BuyHatke",
              "Apple",
              "Oracle",
              "Nutanix",
              "Zoho",
              "Netskope"
            ],
            "url": "https://leetcode.com/problems/word-break"
          },
          {
            "title": "Combination Sum IV",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "TikTok",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/combination-sum-iv"
          },
          {
            "title": "Decode Ways",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Goldman Sachs",
              "Google",
              "Meta",
              "Microsoft",
              "Zoho",
              "Amazon",
              "Apple",
              "TikTok",
              "Moengage"
            ],
            "url": "https://leetcode.com/problems/decode-ways"
          },
          {
            "title": "Unique Paths",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "Meta",
              "Amazon",
              "Microsoft",
              "Bloomberg",
              "Coupang",
              "tcs",
              "Adobe",
              "Oracle",
              "DE Shaw"
            ],
            "url": "https://leetcode.com/problems/unique-paths"
          },
          {
            "title": "Jump Game",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming",
              "Greedy"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Bloomberg",
              "tcs",
              "Meta",
              "Apple",
              "Goldman Sachs",
              "DoorDash",
              "Walmart Labs",
              "Meesho",
              "Adobe",
              "TikTok",
              "Shopee",
              "Informatica"
            ],
            "url": "https://leetcode.com/problems/jump-game"
          },
          {
            "title": "Palindromic Substrings",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Meta",
              "Salesforce",
              "Goldman Sachs",
              "Google",
              "Amazon",
              "Citadel",
              "Cisco",
              "Arista Networks",
              "Wayfair",
              "Accenture"
            ],
            "url": "https://leetcode.com/problems/palindromic-substrings"
          },
          {
            "title": "Number of Longest Increasing Subsequence",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "TikTok",
              "Intuit"
            ],
            "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence"
          },
          {
            "title": "Partition Equal Subset Sum",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta",
              "Microsoft",
              "Zoho",
              "EPAM Systems",
              "Flipkart"
            ],
            "url": "https://leetcode.com/problems/partition-equal-subset-sum"
          },
          {
            "title": "Partition to K Equal Sum Subsets",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "LinkedIn",
              "Meta",
              "Adobe"
            ],
            "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets"
          },
          {
            "title": "Best Time to Buy and Sell Stock with Cooldown",
            "difficulty": "Medium",
            "topics": [
              "Dynamic Programming"
            ],
            "companies": [
              "Google"
            ],
            "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown"
          },
          {
            "title": "Counting Bits",
            "difficulty": "Easy",
            "topics": [
              "Dynamic Programming",
              "Bit Manipulation"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Nvidia"
            ],
            "url": "https://leetcode.com/problems/counting-bits"
          },
          {
            "title": "Linked List Cycle",
            "difficulty": "Easy",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "tcs",
              "Adobe",
              "Meta",
              "Goldman Sachs",
              "Cisco",
              "Oracle",
              "ZScaler"
            ],
            "url": "https://leetcode.com/problems/linked-list-cycle"
          },
          {
            "title": "Middle of the Linked List",
            "difficulty": "Easy",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Google",
              "Apple",
              "Amazon",
              "Microsoft",
              "Meta",
              "Bloomberg",
              "Intuit",
              "Uber"
            ],
            "url": "https://leetcode.com/problems/middle-of-the-linked-list"
          },
          {
            "title": "Reverse Linked List",
            "difficulty": "Easy",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta",
              "Bloomberg",
              "Microsoft",
              "Apple",
              "Nvidia",
              "SAP",
              "Oracle",
              "Adobe",
              "TikTok",
              "ByteDance",
              "tcs"
            ],
            "url": "https://leetcode.com/problems/reverse-linked-list"
          },
          {
            "title": "Palindrome Linked List",
            "difficulty": "Easy",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Google",
              "Bloomberg",
              "Microsoft",
              "Meta",
              "Amazon",
              "Adobe",
              "Apple",
              "Yandex",
              "Uber",
              "Intuit"
            ],
            "url": "https://leetcode.com/problems/palindrome-linked-list"
          },
          {
            "title": "Remove Linked List Elements",
            "difficulty": "Easy",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/remove-linked-list-elements"
          },
          {
            "title": "Remove Duplicates from Sorted List",
            "difficulty": "Easy",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Adobe",
              "Bloomberg",
              "Google",
              "Microsoft",
              "Amazon",
              "Nvidia",
              "Apple",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list"
          },
          {
            "title": "Linked List Cycle II",
            "difficulty": "Medium",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Microsoft",
              "Amazon",
              "Google",
              "Meta",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/linked-list-cycle-ii"
          },
          {
            "title": "Add Two Numbers",
            "difficulty": "Medium",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Bloomberg",
              "Microsoft",
              "Meta",
              "Apple",
              "Adobe",
              "Oracle",
              "Avito",
              "Nvidia",
              "Goldman Sachs",
              "TikTok",
              "Cisco",
              "Accenture",
              "Yandex",
              "josh technology",
              "EPAM Systems",
              "Zopsmart"
            ],
            "url": "https://leetcode.com/problems/add-two-numbers"
          },
          {
            "title": "Remove Nth Node From End of List",
            "difficulty": "Medium",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Microsoft",
              "Apple",
              "Goldman Sachs"
            ],
            "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list"
          },
          {
            "title": "Sort List",
            "difficulty": "Medium",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Google",
              "TikTok",
              "Meta",
              "Microsoft",
              "Amazon",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/sort-list"
          },
          {
            "title": "Reorder List",
            "difficulty": "Medium",
            "topics": [
              "Fast & Slow Pointers"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Microsoft",
              "TikTok",
              "Bloomberg",
              "Apple",
              "Arista Networks",
              "Goldman Sachs"
            ],
            "url": "https://leetcode.com/problems/reorder-list"
          },
          {
            "title": "Pacific Atlantic Water Flow",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS"
            ],
            "companies": [
              "Google",
              "Uber",
              "Amazon",
              "Meta",
              "TikTok",
              "Coupang"
            ],
            "url": "https://leetcode.com/problems/pacific-atlantic-water-flow"
          },
          {
            "title": "Number of Islands",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS",
              "Union Find"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "Bloomberg",
              "TikTok",
              "Microsoft",
              "Apple",
              "Uber",
              "Oracle",
              "Anduril",
              "Siemens",
              "PayPal",
              "Yandex",
              "LinkedIn",
              "Samsung",
              "Goldman Sachs",
              "Nvidia",
              "Salesforce",
              "Zoho",
              "Tinkoff",
              "Adobe",
              "Citadel",
              "Waymo",
              "eBay",
              "Huawei",
              "Yahoo",
              "Walmart Labs",
              "SAP",
              "Cisco",
              "Tesla",
              "ByteDance",
              "Flipkart",
              "Axon",
              "UiPath",
              "SoFi"
            ],
            "url": "https://leetcode.com/problems/number-of-islands"
          },
          {
            "title": "Graph Valid Tree",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS",
              "Graph",
              "Union Find"
            ],
            "companies": [
              "Google",
              "Microsoft",
              "LinkedIn",
              "Amazon"
            ],
            "url": "https://leetcode.com/problems/graph-valid-tree"
          },
          {
            "title": "Number of Connected Components in an Undirected Graph",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS",
              "Graph",
              "Union Find"
            ],
            "companies": [
              "General Motors",
              "Google",
              "Amazon",
              "LinkedIn",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph"
          },
          {
            "title": "Reverse Linked List II",
            "difficulty": "Medium",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Google",
              "Arista Networks",
              "Microsoft",
              "Apple",
              "Walmart Labs",
              "Adobe",
              "Nvidia",
              "Zoho",
              "EPAM Systems"
            ],
            "url": "https://leetcode.com/problems/reverse-linked-list-ii"
          },
          {
            "title": "Rotate List",
            "difficulty": "Medium",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Bloomberg",
              "LinkedIn",
              "Microsoft",
              "Oracle",
              "Siemens"
            ],
            "url": "https://leetcode.com/problems/rotate-list"
          },
          {
            "title": "Swap Nodes in Pairs",
            "difficulty": "Medium",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Bloomberg",
              "Google",
              "Meta",
              "Microsoft",
              "Snowflake",
              "Amazon",
              "Apple",
              "Qualcomm"
            ],
            "url": "https://leetcode.com/problems/swap-nodes-in-pairs"
          },
          {
            "title": "Odd Even Linked List",
            "difficulty": "Medium",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Bloomberg",
              "Meta",
              "Oracle",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/odd-even-linked-list"
          },
          {
            "title": "Reverse Nodes in k-Group",
            "difficulty": "Hard",
            "topics": [
              "In-place reversal of a linked list"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Snowflake",
              "Arista Networks",
              "Microsoft",
              "Bloomberg",
              "Meta",
              "Salesforce",
              "Adobe",
              "Tesla"
            ],
            "url": "https://leetcode.com/problems/reverse-nodes-in-k-group"
          },
          {
            "title": "Merge Two Sorted Lists",
            "difficulty": "Easy",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Oracle",
              "Meta",
              "Bloomberg",
              "Apple",
              "Hubspot",
              "Yahoo",
              "Siemens",
              "Huawei",
              "Yandex",
              "HPE",
              "Palo Alto Networks",
              "Arista Networks",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/merge-two-sorted-lists"
          },
          {
            "title": "Kth Smallest Element in a Sorted Matrix",
            "difficulty": "Medium",
            "topics": [
              "Binary Search",
              "Heap"
            ],
            "companies": [
              "Meta",
              "Microsoft",
              "Amazon",
              "TikTok",
              "Oracle",
              "PhonePe"
            ],
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix"
          },
          {
            "title": "Find K Pairs with Smallest Sums",
            "difficulty": "Medium",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Microsoft",
              "Google",
              "Amazon",
              "Walmart Labs"
            ],
            "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums"
          },
          {
            "title": "Merge k Sorted Lists",
            "difficulty": "Hard",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Google",
              "TikTok",
              "Bloomberg",
              "Warnermedia",
              "Adobe",
              "Apple",
              "Nvidia",
              "Two Sigma",
              "Oracle",
              "Goldman Sachs",
              "Yandex",
              "Citadel",
              "Snowflake",
              "MongoDB",
              "Uber",
              "Walmart Labs",
              "Palantir Technologies"
            ],
            "url": "https://leetcode.com/problems/merge-k-sorted-lists"
          },
          {
            "title": "Smallest Range Covering Elements from K Lists",
            "difficulty": "Hard",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Amazon",
              "PhonePe",
              "Google",
              "Microsoft",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists"
          },
          {
            "title": "Meeting Rooms",
            "difficulty": "Easy",
            "topics": [
              "Intervals"
            ],
            "companies": [
              "TikTok",
              "Apple",
              "Meta",
              "Google",
              "Oracle",
              "Amazon"
            ],
            "url": "https://leetcode.com/problems/meeting-rooms"
          },
          {
            "title": "Merge Intervals",
            "difficulty": "Medium",
            "topics": [
              "Intervals"
            ],
            "companies": [
              "Meta",
              "Google",
              "Bloomberg",
              "Amazon",
              "TikTok",
              "Microsoft",
              "Oracle",
              "Salesforce",
              "Yandex",
              "Apple",
              "Tesco",
              "Grammarly",
              "Uber",
              "Atlassian",
              "Zoho",
              "Adobe",
              "LinkedIn",
              "Morgan Stanley",
              "Goldman Sachs",
              "Netflix",
              "IXL",
              "Roblox",
              "Nextdoor",
              "CrowdStrike",
              "Cisco",
              "Disney",
              "Docusign",
              "GoDaddy",
              "Walmart Labs",
              "Expedia",
              "IBM",
              "razorpay",
              "Hubspot",
              "Yahoo",
              "ServiceNow",
              "J.P. Morgan",
              "PhonePe",
              "Grubhub",
              "Workday",
              "Turing",
              "Siemens",
              "Okta"
            ],
            "url": "https://leetcode.com/problems/merge-intervals"
          },
          {
            "title": "Interval List Intersections",
            "difficulty": "Medium",
            "topics": [
              "Intervals"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Uber",
              "Yandex",
              "Verkada"
            ],
            "url": "https://leetcode.com/problems/interval-list-intersections"
          },
          {
            "title": "Non-overlapping Intervals",
            "difficulty": "Medium",
            "topics": [
              "Intervals"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Zoho",
              "Capital One",
              "Bloomberg",
              "Verkada"
            ],
            "url": "https://leetcode.com/problems/non-overlapping-intervals"
          },
          {
            "title": "Meeting Rooms II",
            "difficulty": "Medium",
            "topics": [
              "Heap",
              "Intervals"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Meta",
              "Bloomberg",
              "TikTok",
              "Uber",
              "Netflix",
              "Oracle",
              "Apple",
              "Salesforce",
              "Splunk",
              "Capital One",
              "Snap",
              "Lyft",
              "ServiceNow",
              "Nordstrom",
              "SoFi"
            ],
            "url": "https://leetcode.com/problems/meeting-rooms-ii"
          },
          {
            "title": "Task Scheduler",
            "difficulty": "Medium",
            "topics": [
              "Greedy",
              "Heap"
            ],
            "companies": [
              "Amazon",
              "Roblox",
              "Google",
              "DoorDash",
              "Microsoft",
              "Meta",
              "Apple",
              "Rubrik",
              "Oracle",
              "zeta suite",
              "Zeta"
            ],
            "url": "https://leetcode.com/problems/task-scheduler"
          },
          {
            "title": "Minimum Number of Arrows to Burst Balloons",
            "difficulty": "Medium",
            "topics": [
              "Greedy"
            ],
            "companies": [
              "Amazon",
              "Apple",
              "Goldman Sachs"
            ],
            "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons"
          },
          {
            "title": "Insert Interval",
            "difficulty": "Medium",
            "topics": [
              "Intervals"
            ],
            "companies": [
              "Google",
              "Apple",
              "Meta",
              "Microsoft",
              "Bloomberg",
              "MongoDB",
              "TikTok",
              "Amazon",
              "Uber",
              "Yahoo",
              "Oracle",
              "Adobe",
              "Synology"
            ],
            "url": "https://leetcode.com/problems/insert-interval"
          },
          {
            "title": "Employee Free Time",
            "difficulty": "Hard",
            "topics": [
              "Heap",
              "Greedy"
            ],
            "companies": [
              "Google"
            ],
            "url": "https://leetcode.com/problems/employee-free-time"
          },
          {
            "title": "Binary Search",
            "difficulty": "Easy",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Google",
              "Bloomberg",
              "Microsoft",
              "Amazon",
              "Meta",
              "Oracle",
              "Adobe"
            ],
            "url": "https://leetcode.com/problems/binary-search"
          },
          {
            "title": "Find Smallest Letter Greater Than Target",
            "difficulty": "Easy",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "LinkedIn"
            ],
            "url": "https://leetcode.com/problems/find-smallest-letter-greater-than-target"
          },
          {
            "title": "Peak Index in a Mountain Array",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta",
              "Bloomberg",
              "Uber",
              "DE Shaw"
            ],
            "url": "https://leetcode.com/problems/peak-index-in-a-mountain-array"
          },
          {
            "title": "Find Minimum in Rotated Sorted Array",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "TikTok",
              "Goldman Sachs",
              "Microsoft",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array"
          },
          {
            "title": "Find Peak Element",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Bloomberg",
              "Microsoft",
              "Uber",
              "Commvault",
              "TikTok",
              "Wix",
              "Apple",
              "Adobe",
              "Flipkart"
            ],
            "url": "https://leetcode.com/problems/find-peak-element"
          },
          {
            "title": "Search in Rotated Sorted Array",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Amazon",
              "Microsoft",
              "Meta",
              "TikTok",
              "Google",
              "LinkedIn",
              "Apple",
              "Bloomberg",
              "Flipkart",
              "Grammarly",
              "Visa",
              "Walmart Labs",
              "Oracle",
              "Salesforce",
              "Goldman Sachs",
              "Zoho",
              "Yahoo",
              "Nvidia",
              "ByteDance",
              "MongoDB",
              "Anduril",
              "ZScaler"
            ],
            "url": "https://leetcode.com/problems/search-in-rotated-sorted-array"
          },
          {
            "title": "Search in Rotated Sorted Array II",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Meta",
              "Microsoft",
              "Bloomberg",
              "Amazon",
              "Walmart Labs",
              "Google"
            ],
            "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii"
          },
          {
            "title": "Search a 2D Matrix",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Amazon",
              "Bloomberg",
              "Microsoft",
              "Google",
              "Apple",
              "Oracle",
              "Meta",
              "Goldman Sachs",
              "Snap",
              "Tinkoff"
            ],
            "url": "https://leetcode.com/problems/search-a-2d-matrix"
          },
          {
            "title": "Search a 2D Matrix II",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Meta",
              "Oracle",
              "Snap",
              "ByteDance"
            ],
            "url": "https://leetcode.com/problems/search-a-2d-matrix-ii"
          },
          {
            "title": "Find K Closest Elements",
            "difficulty": "Medium",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Meta",
              "DoorDash",
              "Yandex",
              "Google",
              "Bloomberg",
              "Adobe",
              "Microsoft",
              "Amazon",
              "LinkedIn",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/find-k-closest-elements"
          },
          {
            "title": "Count of Range Sum",
            "difficulty": "Hard",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Amazon",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/count-of-range-sum"
          },
          {
            "title": "Minimum Size Subarray Sum",
            "difficulty": "Medium",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "TikTok",
              "Bloomberg",
              "Microsoft",
              "Goldman Sachs",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/minimum-size-subarray-sum"
          },
          {
            "title": "Fruit Into Baskets",
            "difficulty": "Medium",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Meta",
              "Microsoft",
              "Amazon",
              "Adobe",
              "Walmart Labs"
            ],
            "url": "https://leetcode.com/problems/fruit-into-baskets"
          },
          {
            "title": "Permutation in String",
            "difficulty": "Medium",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Yandex",
              "Goldman Sachs",
              "Bloomberg",
              "Oracle",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/permutation-in-string"
          },
          {
            "title": "Longest Repeating Character Replacement",
            "difficulty": "Medium",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta",
              "Microsoft",
              "Apple",
              "TikTok",
              "Uber",
              "Bloomberg",
              "Goldman Sachs",
              "Flipkart",
              "Yahoo"
            ],
            "url": "https://leetcode.com/problems/longest-repeating-character-replacement"
          },
          {
            "title": "Sliding Window Maximum",
            "difficulty": "Hard",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Meta",
              "Booking.com",
              "Apple",
              "TikTok",
              "Adobe",
              "Citadel",
              "DE Shaw",
              "Uber",
              "Bloomberg",
              "Goldman Sachs",
              "Oracle",
              "tcs",
              "Gameskraft",
              "MongoDB",
              "Nutanix",
              "Coupang",
              "Roku",
              "Autodesk"
            ],
            "url": "https://leetcode.com/problems/sliding-window-maximum"
          },
          {
            "title": "Longest Substring Without Repeating Characters",
            "difficulty": "Medium",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Microsoft",
              "Oracle",
              "TikTok",
              "Bloomberg",
              "Meta",
              "Tinkoff",
              "Apple",
              "Adobe",
              "Turing",
              "Yandex",
              "Zoho",
              "Yahoo",
              "ByteDance",
              "Flipkart",
              "Goldman Sachs",
              "Lyft",
              "Walmart Labs",
              "Infosys",
              "Nvidia",
              "Accenture",
              "EPAM Systems",
              "Juspay",
              "Grab",
              "Tesla",
              "Palo Alto Networks",
              "LinkedIn",
              "Salesforce",
              "ServiceNow",
              "Roblox",
              "American Express",
              "Nagarro",
              "IBM",
              "Agoda",
              "AMD",
              "Alibaba",
              "opentext",
              "PayPal",
              "Intuit",
              "Visa",
              "tcs",
              "Wipro",
              "FreshWorks",
              "Lucid",
              "PornHub"
            ],
            "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters"
          },
          {
            "title": "Minimum Number of K Consecutive Bit Flips",
            "difficulty": "Hard",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips"
          },
          {
            "title": "Count Unique Characters of All Substrings of a Given String",
            "difficulty": "Hard",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string"
          },
          {
            "title": "Minimum Window Substring",
            "difficulty": "Hard",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Yandex",
              "Microsoft",
              "Airbnb",
              "Lyft",
              "Zopsmart",
              "TikTok",
              "Apple",
              "LinkedIn",
              "Snowflake",
              "SoFi",
              "Bloomberg",
              "Nagarro",
              "MakeMyTrip"
            ],
            "url": "https://leetcode.com/problems/minimum-window-substring"
          },
          {
            "title": "Substring with Concatenation of All Words",
            "difficulty": "Hard",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Google",
              "Roku"
            ],
            "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words"
          },
          {
            "title": "Kth Smallest Element in a BST",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Uber",
              "Amazon",
              "Meta",
              "Google",
              "Bloomberg",
              "Oracle",
              "Microsoft",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst"
          },
          {
            "title": "K Closest Points to Origin",
            "difficulty": "Medium",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Asana",
              "Salesforce",
              "Apple",
              "Oracle"
            ],
            "url": "https://leetcode.com/problems/k-closest-points-to-origin"
          },
          {
            "title": "Top K Frequent Elements",
            "difficulty": "Medium",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Microsoft",
              "Uber",
              "Oracle",
              "TikTok",
              "Netflix",
              "Bloomberg",
              "Avito",
              "Adobe",
              "Walmart Labs",
              "PayPal",
              "Apple",
              "Salesforce",
              "Intuit",
              "Pinterest",
              "Microstrategy",
              "Yahoo",
              "DoorDash"
            ],
            "url": "https://leetcode.com/problems/top-k-frequent-elements"
          },
          {
            "title": "Sort Characters By Frequency",
            "difficulty": "Medium",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Amazon",
              "Bloomberg",
              "Apple",
              "Google",
              "Meta",
              "Zoho",
              "Nvidia",
              "Microsoft",
              "Uber",
              "Adobe",
              "Walmart Labs",
              "tcs"
            ],
            "url": "https://leetcode.com/problems/sort-characters-by-frequency"
          },
          {
            "title": "Kth Largest Element in an Array",
            "difficulty": "Medium",
            "topics": [
              "Heap",
              "QuickSelect"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Google",
              "TikTok",
              "Bloomberg",
              "ServiceNow",
              "Goldman Sachs",
              "LinkedIn",
              "Morgan Stanley",
              "Oracle",
              "Walmart Labs",
              "Turing",
              "Flipkart",
              "Samsung",
              "Intuit",
              "Guidewire",
              "AMD"
            ],
            "url": "https://leetcode.com/problems/kth-largest-element-in-an-array"
          },
          {
            "title": "Reorganize String",
            "difficulty": "Medium",
            "topics": [
              "Greedy",
              "Heap"
            ],
            "companies": [
              "Amazon",
              "Roblox",
              "Google",
              "Meta",
              "TikTok",
              "Microsoft",
              "Oracle",
              "Pinterest",
              "Uber",
              "Yahoo",
              "PayPal",
              "eBay",
              "Apple",
              "Adobe",
              "Walmart Labs"
            ],
            "url": "https://leetcode.com/problems/reorganize-string"
          },
          {
            "title": "Rearrange String k Distance Apart",
            "difficulty": "Hard",
            "topics": [
              "Greedy",
              "Heap"
            ],
            "companies": [
              "Amazon",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/rearrange-string-k-distance-apart"
          },
          {
            "title": "Course Schedule III",
            "difficulty": "Hard",
            "topics": [
              "Greedy",
              "Heap"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/course-schedule-iii"
          },
          {
            "title": "Maximum Frequency Stack",
            "difficulty": "Hard",
            "topics": [
              "Bucket Sort",
              "Heap"
            ],
            "companies": [
              "Amazon",
              "Microsoft",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/maximum-frequency-stack"
          },
          {
            "title": "Course Schedule",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS",
              "Graph",
              "Topological Sort"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Google",
              "Microsoft",
              "TikTok",
              "Anduril",
              "Apple",
              "Bloomberg",
              "Visa",
              "Oracle",
              "Uber",
              "Coupang",
              "ByteDance",
              "Snowflake",
              "Snap",
              "Yahoo",
              "Walmart Labs",
              "Flipkart"
            ],
            "url": "https://leetcode.com/problems/course-schedule"
          },
          {
            "title": "Course Schedule II",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS",
              "Graph",
              "Topological Sort"
            ],
            "companies": [
              "Amazon",
              "TikTok",
              "Oracle",
              "Google",
              "Meta",
              "Intuit",
              "Uber",
              "DoorDash",
              "Microsoft",
              "Nvidia",
              "Apple",
              "Snap",
              "Snowflake",
              "Salesforce",
              "Walmart Labs",
              "LinkedIn",
              "Anduril",
              "Karat"
            ],
            "url": "https://leetcode.com/problems/course-schedule-ii"
          },
          {
            "title": "Minimum Height Trees",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "Graph",
              "Topological Sort"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta",
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/minimum-height-trees"
          },
          {
            "title": "Alien Dictionary",
            "difficulty": "Hard",
            "topics": [
              "Graph",
              "Topological Sort"
            ],
            "companies": [
              "Uber",
              "Meta",
              "Amazon",
              "TikTok",
              "Google",
              "Microsoft",
              "Oracle",
              "Airbnb"
            ],
            "url": "https://leetcode.com/problems/alien-dictionary"
          },
          {
            "title": "Sequence Reconstruction",
            "difficulty": "Medium",
            "topics": [
              "Graph",
              "Topological Sort"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/sequence-reconstruction"
          },
          {
            "title": "Binary Tree Level Order Traversal II",
            "difficulty": "Medium",
            "topics": [
              "BFS"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii"
          },
          {
            "title": "Average of Levels in Binary Tree",
            "difficulty": "Easy",
            "topics": [
              "BFS"
            ],
            "companies": [
              "Meta"
            ],
            "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree"
          },
          {
            "title": "Minimum Depth of Binary Tree",
            "difficulty": "Easy",
            "topics": [
              "BFS",
              "DFS"
            ],
            "companies": [
              "Meta",
              "Bloomberg"
            ],
            "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree"
          },
          {
            "title": "Binary Tree Level Order Traversal",
            "difficulty": "Medium",
            "topics": [
              "BFS"
            ],
            "companies": [
              "Microsoft",
              "Amazon",
              "Meta",
              "Google",
              "Oracle",
              "LinkedIn",
              "Bloomberg",
              "Adobe"
            ],
            "url": "https://leetcode.com/problems/binary-tree-level-order-traversal"
          },
          {
            "title": "Binary Tree Zigzag Level Order Traversal",
            "difficulty": "Medium",
            "topics": [
              "BFS"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Microsoft",
              "Bloomberg",
              "Oracle",
              "Google",
              "Nutanix",
              "Walmart Labs",
              "Yandex",
              "TikTok",
              "Sigmoid",
              "LinkedIn",
              "ServiceNow",
              "Adobe",
              "ByteDance"
            ],
            "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal"
          },
          {
            "title": "Binary Tree Right Side View",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Bloomberg",
              "Walmart Labs",
              "Yandex",
              "Uber",
              "Microsoft",
              "Oracle",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/binary-tree-right-side-view"
          },
          {
            "title": "All Nodes Distance K in Binary Tree",
            "difficulty": "Medium",
            "topics": [
              "BFS",
              "DFS"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Microsoft",
              "Google",
              "Salesforce",
              "Walmart Labs"
            ],
            "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree"
          },
          {
            "title": "Same Tree",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Microsoft",
              "Google",
              "Meta",
              "Adobe",
              "Bloomberg",
              "tcs"
            ],
            "url": "https://leetcode.com/problems/same-tree"
          },
          {
            "title": "Path Sum",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Microsoft",
              "Meta",
              "Google",
              "Bloomberg",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/path-sum"
          },
          {
            "title": "Maximum Depth of Binary Tree",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Google",
              "Meta",
              "Yahoo",
              "LinkedIn",
              "Infosys"
            ],
            "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree"
          },
          {
            "title": "Diameter of Binary Tree",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Microsoft",
              "Bloomberg",
              "Visa",
              "TikTok",
              "LinkedIn"
            ],
            "url": "https://leetcode.com/problems/diameter-of-binary-tree"
          },
          {
            "title": "Merge Two Binary Trees",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Meta",
              "Amazon"
            ],
            "url": "https://leetcode.com/problems/merge-two-binary-trees"
          },
          {
            "title": "Lowest Common Ancestor of a Binary Search Tree",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "LinkedIn",
              "Amazon",
              "Meta",
              "Microsoft",
              "Google",
              "Bloomberg",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree"
          },
          {
            "title": "Subtree of Another Tree",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Microsoft",
              "Google"
            ],
            "url": "https://leetcode.com/problems/subtree-of-another-tree"
          },
          {
            "title": "Invert Binary Tree",
            "difficulty": "Easy",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Google",
              "Amazon"
            ],
            "url": "https://leetcode.com/problems/invert-binary-tree"
          },
          {
            "title": "Path Sum II",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Microsoft",
              "Google",
              "Oracle",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/path-sum-ii"
          },
          {
            "title": "Path Sum III",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Amazon",
              "Meta",
              "Bloomberg",
              "Microsoft",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/path-sum-iii"
          },
          {
            "title": "Lowest Common Ancestor of a Binary Tree",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Microsoft",
              "Adobe",
              "LinkedIn",
              "Oracle",
              "Bloomberg",
              "Yandex",
              "Apple",
              "TikTok",
              "Salesforce",
              "GE Healthcare"
            ],
            "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree"
          },
          {
            "title": "Maximum Binary Tree",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/maximum-binary-tree"
          },
          {
            "title": "Maximum Width of Binary Tree",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "TikTok",
              "Amazon",
              "Google",
              "Uber"
            ],
            "url": "https://leetcode.com/problems/maximum-width-of-binary-tree"
          },
          {
            "title": "Construct Binary Tree from Preorder and Inorder Traversal",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Microsoft",
              "TikTok",
              "Meta",
              "Bloomberg",
              "Google",
              "Amazon",
              "Snowflake",
              "Uber"
            ],
            "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal"
          },
          {
            "title": "Validate Binary Search Tree",
            "difficulty": "Medium",
            "topics": [
              "DFS"
            ],
            "companies": [
              "Bloomberg",
              "Amazon",
              "Microsoft",
              "Google",
              "Oracle",
              "Apple",
              "Meta",
              "Yandex",
              "IBM",
              "Yahoo",
              "Uber"
            ],
            "url": "https://leetcode.com/problems/validate-binary-search-tree"
          },
          {
            "title": "Implement Trie (Prefix Tree)",
            "difficulty": "Medium",
            "topics": [
              "Design",
              "Trie"
            ],
            "companies": [
              "DoorDash",
              "Amazon",
              "Google",
              "Microsoft",
              "Roblox",
              "Apple",
              "Citadel",
              "Bloomberg",
              "Nvidia",
              "Arista Networks"
            ],
            "url": "https://leetcode.com/problems/implement-trie-prefix-tree"
          },
          {
            "title": "Binary Tree Maximum Path Sum",
            "difficulty": "Hard",
            "topics": [
              "DFS"
            ],
            "companies": [
              "DoorDash",
              "Meta",
              "Amazon",
              "Google",
              "Nvidia",
              "TikTok",
              "Microsoft",
              "Oracle",
              "tcs",
              "Apple",
              "Walmart Labs",
              "Arista Networks"
            ],
            "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum"
          },
          {
            "title": "Serialize and Deserialize Binary Tree",
            "difficulty": "Hard",
            "topics": [
              "Design"
            ],
            "companies": [
              "Amazon",
              "Microsoft",
              "Meta",
              "LinkedIn",
              "Nvidia",
              "DoorDash",
              "TikTok",
              "Qualcomm",
              "Google",
              "Uber",
              "Bloomberg",
              "Adobe",
              "Citadel"
            ],
            "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree"
          },
          {
            "title": "Word Search II",
            "difficulty": "Hard",
            "topics": [
              "DFS",
              "Trie"
            ],
            "companies": [
              "Amazon",
              "Uber",
              "Microsoft",
              "Google",
              "TikTok",
              "Wix",
              "Meta",
              "Cisco",
              "Two Sigma",
              "DoorDash",
              "Roblox",
              "PayPal",
              "Capital One"
            ],
            "url": "https://leetcode.com/problems/word-search-ii"
          },
          {
            "title": "Find Median from Data Stream",
            "difficulty": "Hard",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Oracle",
              "Pinterest",
              "Meta",
              "Microsoft",
              "Anduril",
              "Docusign",
              "Uber",
              "Nvidia",
              "Splunk",
              "IXL",
              "TikTok",
              "PayPal",
              "Tinder",
              "Okta",
              "Bloomberg",
              "Walmart Labs",
              "Citadel",
              "Cohesity"
            ],
            "url": "https://leetcode.com/problems/find-median-from-data-stream"
          },
          {
            "title": "Sliding Window Median",
            "difficulty": "Hard",
            "topics": [
              "Heap"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Datadog"
            ],
            "url": "https://leetcode.com/problems/sliding-window-median"
          },
          {
            "title": "Two Sum",
            "difficulty": "Easy",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Meta",
              "Bloomberg",
              "Apple",
              "Yandex",
              "Oracle",
              "tcs",
              "Uber",
              "Yahoo",
              "Infosys",
              "Goldman Sachs",
              "Walmart Labs",
              "Salesforce",
              "Accenture",
              "TikTok",
              "SAP",
              "IBM",
              "DoorDash",
              "Visa",
              "Samsung",
              "Zoho",
              "Ozon",
              "Adobe",
              "Spotify",
              "Nvidia",
              "ServiceNow",
              "PayPal",
              "KLA",
              "Deloitte",
              "Morgan Stanley",
              "Grab",
              "Intuit",
              "J.P. Morgan",
              "Epic Systems",
              "VMware",
              "Nutanix",
              "Flipkart",
              "Atlassian",
              "Siemens",
              "Capgemini",
              "Tinkoff",
              "Publicis Sapient",
              "SoFi"
            ],
            "url": "https://leetcode.com/problems/two-sum"
          },
          {
            "title": "Squares of a Sorted Array",
            "difficulty": "Easy",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Uber",
              "Meta",
              "Google",
              "Amazon",
              "Bloomberg",
              "Yandex",
              "Agoda",
              "Apple",
              "Yahoo"
            ],
            "url": "https://leetcode.com/problems/squares-of-a-sorted-array"
          },
          {
            "title": "Backspace String Compare",
            "difficulty": "Easy",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Goldman Sachs",
              "Amazon",
              "Tinkoff",
              "Google",
              "IBM",
              "Microstrategy",
              "Wayfair",
              "Meta",
              "Oracle",
              "Booking.com"
            ],
            "url": "https://leetcode.com/problems/backspace-string-compare"
          },
          {
            "title": "3Sum",
            "difficulty": "Medium",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Bloomberg",
              "Microsoft",
              "Apple",
              "Adobe",
              "TikTok",
              "Cloudflare",
              "Intuit",
              "Yahoo",
              "tcs",
              "Goldman Sachs",
              "Agoda",
              "BNY Mellon",
              "Walmart Labs",
              "Barclays",
              "Myntra",
              "Nvidia"
            ],
            "url": "https://leetcode.com/problems/3sum"
          },
          {
            "title": "3Sum Closest",
            "difficulty": "Medium",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Meta",
              "Google",
              "Microsoft",
              "Amazon",
              "Zoho"
            ],
            "url": "https://leetcode.com/problems/3sum-closest"
          },
          {
            "title": "Subarray Product Less Than K",
            "difficulty": "Medium",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Meta",
              "IBM",
              "Amazon",
              "Salesforce",
              "Squarepoint Capital",
              "Apple",
              "Flexport",
              "Adobe",
              "Nvidia",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/subarray-product-less-than-k"
          },
          {
            "title": "Sort Colors",
            "difficulty": "Medium",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Meta",
              "TikTok",
              "Bloomberg",
              "Walmart Labs",
              "Swiggy",
              "PhonePe",
              "tcs",
              "Adobe",
              "Flipkart",
              "PayPal",
              "Zoho"
            ],
            "url": "https://leetcode.com/problems/sort-colors"
          },
          {
            "title": "Trapping Rain Water",
            "difficulty": "Hard",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Amazon",
              "Goldman Sachs",
              "Google",
              "Microsoft",
              "Meta",
              "Bloomberg",
              "TikTok",
              "Adobe",
              "Snowflake",
              "Apple",
              "Oracle",
              "Salesforce",
              "Visa",
              "Yandex",
              "PhonePe",
              "Zopsmart",
              "Uber",
              "Zoho",
              "Flipkart",
              "InMobi",
              "Expedia",
              "SAP",
              "Intuit",
              "Intel",
              "Walmart Labs",
              "Yahoo",
              "Atlassian",
              "ByteDance",
              "ServiceNow",
              "Myntra",
              "Sprinklr",
              "tcs",
              "HashedIn",
              "American Express"
            ],
            "url": "https://leetcode.com/problems/trapping-rain-water"
          },
          {
            "title": "Container With Most Water",
            "difficulty": "Medium",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Microsoft",
              "Bloomberg",
              "Apple",
              "Meta",
              "Goldman Sachs",
              "SAP",
              "Oracle",
              "Adobe",
              "Yahoo",
              "TikTok",
              "Accenture",
              "Snowflake",
              "Zopsmart",
              "Mastercard"
            ],
            "url": "https://leetcode.com/problems/container-with-most-water"
          },
          {
            "title": "Longest Word in Dictionary",
            "difficulty": "Medium",
            "topics": [
              "Trie"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/longest-word-in-dictionary"
          },
          {
            "title": "Index Pairs of a String",
            "difficulty": "Easy",
            "topics": [
              "Trie"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/index-pairs-of-a-string"
          },
          {
            "title": "Maximum XOR of Two Numbers in an Array",
            "difficulty": "Medium",
            "topics": [
              "Trie"
            ],
            "companies": [
              "Google",
              "Goldman Sachs",
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array"
          },
          {
            "title": "Concatenated Words",
            "difficulty": "Hard",
            "topics": [
              "Trie"
            ],
            "companies": [
              "Amazon",
              "Salesforce",
              "eBay",
              "TikTok"
            ],
            "url": "https://leetcode.com/problems/concatenated-words"
          },
          {
            "title": "Prefix and Suffix Search",
            "difficulty": "Hard",
            "topics": [
              "Trie"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/prefix-and-suffix-search"
          },
          {
            "title": "Palindrome Pairs",
            "difficulty": "Hard",
            "topics": [
              "Trie"
            ],
            "companies": [
              "Airbnb",
              "Google",
              "Yandex"
            ],
            "url": "https://leetcode.com/problems/palindrome-pairs"
          },
          {
            "title": "Design Search Autocomplete System",
            "difficulty": "Hard",
            "topics": [
              "Trie"
            ],
            "companies": [
              "Pinterest",
              "Bloomberg",
              "Apple",
              "Citadel",
              "Google",
              "Amazon",
              "TikTok",
              "Uber",
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/design-search-autocomplete-system"
          },
          {
            "title": "Word Squares",
            "difficulty": "Hard",
            "topics": [
              "Trie"
            ],
            "companies": [],
            "url": "https://leetcode.com/problems/word-squares"
          },
          {
            "title": "Sort Items by Groups Respecting Dependencies",
            "difficulty": "Hard",
            "topics": [
              "DFS",
              "Graph",
              "Topological Sort"
            ],
            "companies": [
              "Citadel",
              "Google"
            ],
            "url": "https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies"
          },
          {
            "title": "Median of Two Sorted Arrays",
            "difficulty": "Hard",
            "topics": [
              "Binary Search"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Goldman Sachs",
              "Meta",
              "Microsoft",
              "Bloomberg",
              "Uber",
              "Wix",
              "Apple",
              "Walmart Labs",
              "TikTok",
              "Zoho",
              "Adobe",
              "Oracle",
              "Rippling",
              "Swiggy",
              "Snap",
              "LinkedIn",
              "Yandex",
              "ServiceNow",
              "IBM",
              "Wipro"
            ],
            "url": "https://leetcode.com/problems/median-of-two-sorted-arrays"
          },
          {
            "title": "Majority Element",
            "difficulty": "Easy",
            "topics": [
              "Sorting"
            ],
            "companies": [
              "Google",
              "Microsoft",
              "Amazon",
              "Meta",
              "tcs",
              "Bloomberg",
              "Apple",
              "Adobe",
              "Accenture",
              "DE Shaw",
              "Nvidia",
              "Pwc",
              "Deloitte"
            ],
            "url": "https://leetcode.com/problems/majority-element"
          },
          {
            "title": "Convert 1D Array Into 2D Array",
            "difficulty": "Easy",
            "topics": [
              "Arrays"
            ],
            "companies": [
              "Google",
              "Amazon",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/convert-1d-array-into-2d-array"
          },
          {
            "title": "Move Zeroes",
            "difficulty": "Easy",
            "topics": [
              "Arrays",
              "Two Pointers"
            ],
            "companies": [
              "Meta",
              "Microsoft",
              "Amazon",
              "Google",
              "Bloomberg",
              "Adobe",
              "Yandex",
              "josh technology",
              "Apple",
              "Oracle",
              "TikTok",
              "Walmart Labs",
              "Zoho",
              "tcs",
              "Cisco",
              "ServiceNow",
              "Nvidia",
              "JTG",
              "Anduril",
              "Uber",
              "Yahoo",
              "Tesla"
            ],
            "url": "https://leetcode.com/problems/move-zeroes"
          },
          {
            "title": "Is Subsequence",
            "difficulty": "Easy",
            "topics": [
              "Two Pointers"
            ],
            "companies": [
              "Meta",
              "Google",
              "Amazon",
              "Microsoft",
              "Yandex",
              "Pinterest",
              "Adobe",
              "Apple"
            ],
            "url": "https://leetcode.com/problems/is-subsequence"
          },
          {
            "title": "Binary Tree Paths",
            "difficulty": "Easy",
            "topics": [
              "DFS",
              "Backtracking"
            ],
            "companies": [
              "Google",
              "Microsoft"
            ],
            "url": "https://leetcode.com/problems/binary-tree-paths"
          },
          {
            "title": "Factor Combinations",
            "difficulty": "Medium",
            "topics": [
              "Arrays",
              "Backtracking"
            ],
            "companies": [
              "LinkedIn"
            ],
            "url": "https://leetcode.com/problems/factor-combinations"
          },
          {
            "title": "Split a String Into the Max Number of Unique Substrings",
            "difficulty": "Medium",
            "topics": [
              "Backtracking"
            ],
            "companies": [
              "Amazon",
              "Meta"
            ],
            "url": "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings"
          },
          {
            "title": "Maximum Average Subarray I",
            "difficulty": "Easy",
            "topics": [
              "Sliding Window"
            ],
            "companies": [
              "Meta",
              "Amazon",
              "Google",
              "Apple",
              "Bloomberg"
            ],
            "url": "https://leetcode.com/problems/maximum-average-subarray-i"
          }
    // ... other problems ...
  ];

  const filteredProblems = problems.filter(
    (problem) =>
      (selectedDifficulty === "All" || problem.difficulty === selectedDifficulty) &&
      (selectedTopic === "All" || problem.topics.includes(selectedTopic)) &&
      (selectedCompany === "All" || problem.companies.includes(selectedCompany))
  );

  const getProgressPercentage = () => {
    if (!userData) return 0;
    const { totalSolved, totalQuestions } = userData;
    return Math.round((totalSolved / totalQuestions) * 100);
  };

  const isProblemCompleted = (problemTitle) => {
    if (!userData?.recentSubmissions) return false;
    return userData.recentSubmissions.some(
      (submission) => submission.title === problemTitle && submission.statusDisplay === "Accepted"
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
            <a href="https://github.com" className={`${theme.hover} transition-colors`}>
              <Github size={20} />
            </a>
            <a href="https://mannpatel0.github.io" className={`${theme.hover} transition-colors`}>
              <WebhookIcon size={20} />
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
            <div className={`${theme.cardBg} p-6 rounded-lg shadow-lg text-center w-96`}>
              <h2 className="text-lg font-bold mb-4">Welcome to CodePractice!</h2>
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
            <div className={`${theme.cardBg} p-6 rounded-lg shadow-lg text-center w-96`}>
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
                  <span className="text-lg font-bold">{getProgressPercentage()}%</span>
                </div>
              </div>
              <div>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Solved: {userData?.totalSolved || 0}/{userData?.totalQuestions || 0}
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${theme.cardBg} col-span-2`}>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <label className={`${theme.textSecondary} mb-2`}>Difficulty</label>
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
                      <a href={problem.url} target="_blank" rel="noopener noreferrer" className={theme.link}>
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
                            className="px-2 py-1 bg-[#4C6FFF] rounded-lg text-sm text-white">
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
      <footer className={`p-4 text-center ${theme.cardBg} ${theme.textSecondary}`}>
      <p>&copy; 2025 CodePractice. All rights reserved.</p>
      <p>
      Created with help from the following sources:
      <a href="https://seanprashad.com/leetcode-patterns/" className={theme.link}> Sean Prasad</a>,
      <a href="https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-100-LeetCode-Questions-to-Save-Your-Time-OaM1orEU" className={theme.link}> Blind Curated 75 Question List</a>
      </p>
    </footer>
    </div>
  );
};

export default Dashboard;
